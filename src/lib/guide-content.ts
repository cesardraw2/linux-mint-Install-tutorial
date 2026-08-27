type FrontmatterValue = string | number | string[];

import bddMarkdown from "../../[Padawan a Gedi] Instalando o Linux Mint/BDD - Cenários de instalação.md?raw";

export type GuideMeta = Record<string, FrontmatterValue>;

export type GuideDocument = {
  sourcePath: string;
  meta: GuideMeta;
  title: string;
  lead: string;
  body: string;
};

export type GuideSection = GuideDocument & {
  id: string;
  number: string;
  navLabel: string;
};

export type GuideScenarioTask = {
  id: string;
  label: string;
  sectionId?: string;
};

export type GuideScenario = {
  id: string;
  label: string;
  summary: string;
  tasks: GuideScenarioTask[];
};

export type GuideScenarioTaskState = Record<string, boolean>;

export type GlossaryEntry = { id: string; term: string; definition: string };

// `[[]` and `[]]` escape the literal brackets in the vault's folder name for Vite's glob syntax.
const noteSources = import.meta.glob("../../[[]Padawan a Gedi[]] Instalando o Linux Mint/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const attachmentUrls = import.meta.glob(
  "../../[[]Padawan a Gedi[]] Instalando o Linux Mint/Anexos/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

function scalar(value: string): FrontmatterValue {
  const trimmed = value.trim();
  if (/^\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return trimmed.replace(/^['"]|['"]$/g, "");
}

function parseFrontmatter(source: string): { meta: GuideMeta; markdown: string } {
  if (!source.startsWith("---\n")) return { meta: {}, markdown: source };
  const end = source.indexOf("\n---\n", 4);
  if (end < 0) return { meta: {}, markdown: source };

  const meta: GuideMeta = {};
  let listKey = "";
  for (const line of source.slice(4, end).split("\n")) {
    const pair = line.match(/^([\w-]+):\s*(.*)$/);
    if (pair) {
      listKey = pair[1];
      meta[listKey] = pair[2] ? scalar(pair[2]) : [];
      continue;
    }
    const item = line.match(/^\s+-\s+(.+)$/);
    if (item && listKey) {
      const current = meta[listKey];
      meta[listKey] = [...(Array.isArray(current) ? current : []), String(scalar(item[1]))];
    }
  }
  return { meta, markdown: source.slice(end + 5).trim() };
}

function plainText(markdown: string): string {
  return markdown
    .replace(/!?\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, "$2$1")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .trim();
}

function parseDocument(sourcePath: string, source: string): GuideDocument {
  const { meta, markdown } = parseFrontmatter(source);
  const lines = markdown.split("\n");
  const titleIndex = lines.findIndex((line) => /^#\s+/.test(line));
  const title = titleIndex >= 0 ? lines[titleIndex].replace(/^#\s+/, "").trim() : sourcePath;
  const content = lines.slice(titleIndex + 1);
  const leadIndex = content.findIndex(
    (line) =>
      line.trim() && !line.startsWith(">") && !line.startsWith("![[") && !line.startsWith("##"),
  );
  const lead = plainText(leadIndex >= 0 ? content[leadIndex] : "");
  const conclusion = content.findIndex((line) => /^##\s+Concluir etapa/.test(line));
  const body = content
    .slice(0, conclusion >= 0 ? conclusion : undefined)
    .filter((_, index) => index !== leadIndex)
    .join("\n")
    .trim();
  return { sourcePath, meta, title, lead, body };
}

function stringMeta(meta: GuideMeta, key: string): string {
  const value = meta[key];
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

const parsed = Object.entries(noteSources).map(([path, source]) => parseDocument(path, source));

export const guideHome = parsed.find((doc) => doc.sourcePath.endsWith("/Início.md"))!;
export const guideCredits = parsed.find((doc) => doc.sourcePath.endsWith("/Fontes e créditos.md"))!;
const bddEntry = Object.entries(noteSources).find(([sourcePath]) =>
  sourcePath.toLowerCase().includes("bdd"),
);
export const guideBdd = parseDocument(
  bddEntry?.[0] ?? "BDD - Cenários de instalação.md",
  bddMarkdown,
);

export const guideSections: GuideSection[] = parsed
  .filter((doc) => /^\d{2}\s+-/.test(doc.sourcePath.split("/").at(-1) ?? ""))
  .map((doc) => {
    const step = Number(doc.meta.step);
    return {
      ...doc,
      id: stringMeta(doc.meta, "web-id") || `step-${step}`,
      number: String(step).padStart(2, "0"),
      navLabel: stringMeta(doc.meta, "nav-label") || doc.title.replace(/^\d{2}\s+—\s+/, ""),
    };
  })
  .sort((a, b) => Number(a.meta.step) - Number(b.meta.step));

export const guideGlossarySection = guideSections.find((section) => section.id === "glossary");

export const glossaryEntries: GlossaryEntry[] = guideGlossarySection
  ? guideGlossarySection.body
      .split(/^###\s+/m)
      .slice(1)
      .map((chunk) => {
        const newline = chunk.indexOf("\n");
        const term = (newline < 0 ? chunk : chunk.slice(0, newline)).trim();
        const content = newline < 0 ? "" : chunk.slice(newline + 1);
        return {
          id: slugify(term),
          term,
          definition: content.replace(/^>.*$/gm, "").replace(/\s+/g, " ").trim(),
        };
      })
      .map((entry) => ({
        id: entry.id,
        term: entry.term,
        definition: entry.definition,
      }))
      .filter((entry) => entry.definition)
  : [];

function parseScenarios(markdown: string): GuideScenario[] {
  return markdown
    .split(/^##\s+/m)
    .slice(1)
    .map((chunk): GuideScenario | null => {
      const newline = chunk.indexOf("\n");
      const heading = (newline < 0 ? chunk : chunk.slice(0, newline)).trim();
      const block = newline < 0 ? "" : chunk.slice(newline + 1);
      if (!heading.toLocaleLowerCase().startsWith("cenário:")) return null;
      const id = heading.replace(/^Cenário:\s*/i, "").trim();
      const label = block.match(/^nome:\s*(.+)$/m)?.[1]?.trim() ?? id;
      const summary = block.match(/^resumo:\s*(.+)$/m)?.[1]?.trim() ?? "";
      const tasks: GuideScenarioTask[] = [
        ...block.matchAll(/^-\s+\[\s*\]\s+\[([^\]]+)\]\s+(.+)$/gm),
      ].map(([, sectionId, taskLabel], index) => ({
        id: `${id}-${index + 1}`,
        label: taskLabel.trim(),
        sectionId: guideSections.find((section) => section.number === sectionId)?.id,
      }));
      return { id, label, summary, tasks };
    })
    .filter((scenario): scenario is GuideScenario =>
      Boolean(scenario && scenario.tasks.length > 0),
    );
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const guideScenarios = parseScenarios(bddMarkdown);

export function attachmentUrl(obsidianPath: string): string | undefined {
  const normalized = obsidianPath.replace(/^\.\//, "");
  const entry = Object.entries(attachmentUrls).find(([path]) =>
    path.endsWith(`/[Padawan a Gedi] Instalando o Linux Mint/${normalized}`),
  );
  return entry?.[1];
}

export function meta(meta: GuideMeta, key: string): string {
  return stringMeta(meta, key);
}
