import type { ColumnValuesHandler, ColumnValue, FileRef } from "betterfinder";

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;
const STEPS = [1 * MB, 3 * MB, 10 * MB, 30 * MB, 100 * MB, 300 * MB, 1 * GB, 3 * GB, 10 * GB, 30 * GB];
const WORDS = ["tiny", "small", "small", "medium", "medium", "large", "large", "big", "big", "huge", "huge"];

function bytesOf(item: FileRef): number | undefined {
  const raw = item.kind === "folder" ? item.totalSize : item.size;
  if (typeof raw !== "string" || raw.length === 0) return undefined;
  const value = Number(raw);
  return isFinite(value) && value >= 0 ? value : undefined;
}

function level(bytes: number): number {
  let reached = 0;
  for (const step of STEPS) if (bytes >= step) reached++;
  return reached;
}

function bar(reached: number): string {
  const full = Math.floor(reached / 2);
  const half = reached % 2;
  return "█".repeat(full) + (half ? "▌" : "") + "░".repeat(5 - full - half);
}

function pretty(bytes: number): string {
  if (bytes >= GB) return (bytes / GB).toFixed(bytes >= 10 * GB ? 0 : 1) + " GB";
  if (bytes >= MB) return (bytes / MB).toFixed(bytes >= 10 * MB ? 0 : 1) + " MB";
  if (bytes >= KB) return Math.round(bytes / KB) + " KB";
  return bytes + " bytes";
}

function pad(bytes: number): string {
  const digits = String(Math.floor(bytes));
  return "0".repeat(Math.max(0, 20 - digits.length)) + digits;
}

export const heat: ColumnValuesHandler = async (context, input) => {
  const out: ColumnValue[] = [];
  for (const item of input.items) {
    const bytes = bytesOf(item);
    if (bytes === undefined) {
      out.push({ handle: item.handle, text: "·····", sortKey: pad(0), label: "Not measured yet" });
      continue;
    }
    const reached = level(bytes);
    out.push({ handle: item.handle, text: bar(reached), sortKey: pad(bytes), label: (WORDS[reached] || "huge") + ", " + pretty(bytes) });
  }
  return out;
};
