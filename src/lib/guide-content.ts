type FrontmatterValue = string | number | string[];

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

const noteSources = import.meta.glob("../../docs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const attachmentUrls = import.meta.glob("../../docs/Anexos/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

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

export function attachmentUrl(obsidianPath: string): string | undefined {
  const normalized = obsidianPath.replace(/^\.\//, "");
  const entry = Object.entries(attachmentUrls).find(([path]) =>
    path.endsWith(`/docs/${normalized}`),
  );
  return entry?.[1];
}

export function meta(meta: GuideMeta, key: string): string {
  return stringMeta(meta, key);
}
