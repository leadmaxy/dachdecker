import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contentTopics = [
  { id: "mobile-zeiterfassung", title: "Mobile Zeiterfassung", category: "Funktionen" },
  { id: "cloud-vs-onprem", title: "Cloud vs. On-Premise", category: "Vergleich" },
  { id: "funktionen", title: "Funktionen moderner Dachdecker-Software", category: "Übersicht" },
  { id: "preismodelle", title: "Preismodelle & Lizenzarten", category: "Kosten" },
  { id: "einfuehrung", title: "Erfolgreiche Einführung", category: "Implementierung" },
  { id: "kleine-betriebe", title: "Software für kleine Betriebe", category: "Betriebsgröße" },
  { id: "schnittstellen", title: "Wichtige Schnittstellen", category: "Integration" },
  { id: "wartung-digital", title: "Inspektion digitalisieren", category: "Service" },
  { id: "trends-2025", title: "Trends 2025", category: "Zukunft" },
  { id: "effizienz", title: "Erfolg messen", category: "ROI" },
] as const;

export const faqData = [
  {
    topic: "Cloud",
    question: "Ist Cloud-Software im Dachdeckerhandwerk sicher?",
    answer: "Ja, wenn sie DSGVO-konform betrieben wird und Serverstandorte in Deutschland hat."
  },
  {
    topic: "Mobile",
    question: "Kann ich Zeiterfassung offline nutzen?",
    answer: "Ja, viele mobile Apps synchronisieren Daten später automatisch."
  },
  {
    topic: "Wartung",
    question: "Wie digitalisiere ich Inspektionen und Wartung?",
    answer: "Über digitale Inspektionszyklen, Checklisten und Terminvorlagen im Wartungsmodul."
  },
  {
    topic: "Cloud",
    question: "Welche Vorteile bietet Cloud-Software gegenüber On-Premise?",
    answer: "Cloud-Software bietet Flexibilität, automatische Updates, geringere Infrastrukturkosten und Zugriff von überall."
  },
  {
    topic: "Integration",
    question: "Welche Schnittstellen sind für Dachdeckerbetriebe wichtig?",
    answer: "DATEV für Buchhaltung, GAEB/STLB-Bau für Ausschreibungen sowie Hersteller- und Großhandelsschnittstellen sind zentral."
  },
  {
    topic: "Kosten",
    question: "Was kostet professionelle Dachdecker-Software?",
    answer: "Die Preise variieren zwischen 29 EUR/Monat für Cloud-Lösungen bis zu mehreren tausend Euro für Kaufsoftware."
  }
] as const;
