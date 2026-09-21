import { getAdvanceMatchByTo } from "./advanceSlotHelpers";

export { getAdvanceMatchByTo };

/** Normalize props/sample strings into slot objects. */
export function normalizeTeamSlot(t) {
  if (t == null || t === "") return { id: "" };
  if (typeof t === "string") return { id: t };
  return {
    id: t.id ?? "",
    ...(t.noShow ? { noShow: true } : {}),
  };
}

export function teamLabel(team) {
  if (!team) return "";
  if (typeof team === "string") return team;
  if (team.noShow) return "No Show";
  return team.id ?? "";
}

/**
 * Current select value for an advance slot ("0" | "1" | "noshow" | "").
 */
export function advanceValueForTeam(teams, toIndex, fromPair) {
  const t = teams[toIndex];
  if (!t) return "";
  if (t.noShow) return "noshow";
  if (!t.id) return "";
  const a = teams[fromPair[0]];
  const b = teams[fromPair[1]];
  if (a?.id && t.id === a.id) return "0";
  if (b?.id && t.id === b.id) return "1";
  return "";
}

/** Options for the advance select (feeder slots + No Show). */
export function advanceOptionsForTeam(teams, fromPair) {
  const opts = [];
  fromPair.forEach((src, idx) => {
    const t = teams[src];
    if (t?.id) {
      opts.push({
        value: String(idx),
        id: t.id,
        name: t.id,
        label: t.id,
      });
    }
  });
  opts.push({ value: "noshow", label: "No Show" });
  return opts;
}

/** Advance slot still needs a pick. */
export function pickPendingTeam(t) {
  return !t?.id && !t?.noShow;
}
