/** @typedef {{ to: number, from: [number, number] }} AdvanceMatch */

/**
 * @param {AdvanceMatch[]} matches
 * @param {number} to
 * @returns {AdvanceMatch | undefined}
 */
export function getAdvanceMatchByTo(matches, to) {
  return matches.find((m) => m.to === to);
}

const clubEq = (x, y) => (x?.club || "") === (y?.club || "");

/**
 * Current select value for an advance slot ("0" | "1" | "noshow" | "").
 */
export function advanceValueFor(players, toIndex, fromPair) {
  const p = players[toIndex];
  if (!p) return "";
  if (p.noShow) return "noshow";
  if (!p.id && !p.name) return "";
  const a = players[fromPair[0]];
  const b = players[fromPair[1]];
  if (a && p.id === a.id && p.name === a.name && clubEq(p, a)) return "0";
  if (b && p.id === b.id && p.name === b.name && clubEq(p, b)) return "1";
  return "";
}

/** Options for the advance select (feeder slots + No Show). */
export function advanceOptionsFor(players, fromPair) {
  const opts = [];
  fromPair.forEach((src, idx) => {
    const p = players[src];
    if (p?.id || p?.name) {
      const id = (p.id || "").trim();
      const name = (p.name || "").trim();
      opts.push({
        value: String(idx),
        id: id || "—",
        name: name || "—",
        label: `${id || "—"} - ${name || "—"}`,
      });
    }
  });
  opts.push({ value: "noshow", label: "No Show" });
  return opts;
}

/** Advance slot still needs a pick (no id/name, and not No Show). */
export function pickPendingPlayer(p) {
  return !p?.name && !p?.noShow && !p?.id;
}
