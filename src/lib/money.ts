export function parseMnt(input: string): number {
  if (!input) return 0;

  const digitsOnly = input
    .toString()
    .replace(/₮/gi, "")
    .replace(/mnt/gi, "")
    .replace(/[\s,.\u00A0]/g, "")
    .replace(/\D/g, "");

  if (!digitsOnly) return 0;

  const parsed = Number(digitsOnly);
  if (!Number.isFinite(parsed)) return 0;

  return Math.max(0, Math.trunc(parsed));
}

export function formatMnt(value: number): string {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.trunc(value)) : 0;
  const formatted = new Intl.NumberFormat("en-US").format(safeValue);
  return `${formatted}₮`;
}

