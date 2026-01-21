/**
 * Central navigation mapping for the Dachdecker Software Vergleich application.
 * This module provides type-safe route definitions and helper functions.
 */

export const routes = {
  home: "/",
  vergleich: "/vergleich",
  kontakt: "/kontakt",
  faq: "/faq",
  
  // Content pages
  funktionen: "/funktionen",
  preise: "/preise",
  cloud: "/cloud",
  mobile: "/mobile",
  wartung: "/wartung",
  kleineBetriebe: "/kleine-betriebe",
  
  // Legal pages
  datenschutz: "/datenschutz",
  impressum: "/impressum",
  
  // Dynamic routes
  thema: (id: string) => `/thema/${id}`,
  software: (slug: string) => `/software/${slug}`,
} as const;

/**
 * Category to route mapping
 * Maps category IDs to their corresponding content pages
 */
export const categoryRoutes: Record<string, string> = {
  cloud: routes.cloud,
  mobile: routes.mobile,
  integration: routes.funktionen, // Integration features are on Funktionen page
  wartung: routes.wartung,
  "kleine-betriebe": routes.kleineBetriebe,
};

/**
 * Navigation items for headers, footers, etc.
 */
export const navigationItems = [
  { label: "Vergleich", path: routes.vergleich },
  { label: "Funktionen", path: routes.funktionen },
  { label: "Preise", path: routes.preise },
  { label: "FAQ", path: routes.faq },
  { label: "Kontakt", path: routes.kontakt },
] as const;

/**
 * Helper to create software slug from name
 */
export function createSoftwareSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
