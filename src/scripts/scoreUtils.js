export const CIRCLED = { M: "Ⓜ", K: "Ⓚ", D: "Ⓓ", T: "Ⓣ" };
export const RAW = Object.fromEntries(Object.entries(CIRCLED).map(([k, v]) => [v, k]));
export const ALLOWED = Object.keys(CIRCLED);

/** sanitize free-text → canonical raw string (e.g. " m k " -> "MK") */
export function sanitizeScore(input = "") {
  const noSpaces = String(input).replace(/\s+/g, "");
  let first = "";
  if (noSpaces) {
    const c0 = noSpaces[0];
    first = RAW[c0] || c0.toUpperCase();
    if (!ALLOWED.includes(first)) first = "";
  }
  const rest = Array.from(noSpaces.slice(1).toUpperCase())
    .filter((ch) => ALLOWED.includes(ch))
    .join("");
  return first + rest;
}

/** "MK" -> "Ⓜ K" (for display inputs) */
export function displayScore(raw = "") {
  if (!raw) return "";
  const head = CIRCLED[raw[0]] ?? raw[0];
  return [head, ...raw.slice(1)].join(" ");
}
