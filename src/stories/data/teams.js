// Letter labels: 0 -> A, 1 -> B, ... 25 -> Z, 26 -> AA, ...
function alphaLabel(idx) {
  let n = idx + 1; // 1-based for Excel-style
  let s = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    s = String.fromCharCode(65 + rem) + s; // 65 = 'A'
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

export function generateTeams(prefix, count) {
  const teams = [];
  for (let i = 0; i < count; i++) {
    teams.push(`${prefix} ${alphaLabel(i)}`);
  }
  return teams;
}

// Prebuilt sets, alphabetical order
export const sampleTeams8  = generateTeams("TKC", 8);
export const sampleTeams9  = generateTeams("TKC", 9);
export const sampleTeams10 = generateTeams("TKC", 10);
export const sampleTeams11 = generateTeams("TKC", 11);
export const sampleTeams12 = generateTeams("TKC", 12);
export const sampleTeams13 = generateTeams("TKC", 13);
export const sampleTeams14 = generateTeams("TKC", 14);
export const sampleTeams16 = generateTeams("TKC", 16);

// Usage:
// const teams = generateTeams("TKC", 32); // ["TKC A", "TKC B", ..., "TKC AF"]
