import styles from "./Individuals/stylesheet.module.css";
import { AdvancePickMenu } from "./_internal/AdvancePickMenu";
import { SearchablePlayerMenu } from "./_internal/SearchablePlayerMenu";

const CIRCLED = { M: "Ⓜ", K: "Ⓚ", D: "Ⓓ", T: "Ⓣ" };
const RAW = {
  ...Object.fromEntries(Object.entries(CIRCLED).map(([k, v]) => [v, k])),
  "▲": "H",
  "—": "-",
  "–": "-",
};
const ALLOWED = ["M", "K", "D", "T", "H", "-"];

/** Optional: M/K/D/T → circled, H → ▲ — pass as `formatScoreDisplay={circledScoreDisplay}`. */
export function circledScoreDisplay(score) {
  const s = score || "";
  if (!s) return "";
  return Array.from(s)
    .map((ch, i) => {
      if (ch === "H") return "▲";
      if (ch === "-") return "—";
      if (i === 0 && CIRCLED[ch]) return CIRCLED[ch];
      return ch;
    })
    .join(" ");
}

/** Optional: allow M/K/D/T/H/`-` (circled + ▲ accepted) — `scoreInputTransform`. */
export function tournamentMkdtScoreInput(input = "") {
  const noSpaces = String(input).replace(/\s+/g, "");
  let first = "";
  if (noSpaces) {
    const c0 = noSpaces[0];
    first = RAW[c0] || (c0 === "-" ? "-" : c0.toUpperCase());
    if (!ALLOWED.includes(first)) first = "";
  }
  const rest = Array.from(noSpaces.slice(1))
    .map((ch) => RAW[ch] || (ch === "-" ? "-" : ch.toUpperCase()))
    .filter((ch) => ALLOWED.includes(ch))
    .join("");
  return first + rest;
}

export function ScoreRowFillable({
  player,
  onScoreChange,
  onIDChange,
  playerIDStyle,
  showTooltip = false,
  pendingAdvancePick,
  advanceSelect,
  rosterSelect,
  formatScoreDisplay,
  championLabel,
}) {
  const raw = player?.score ?? "";
  const displayScore = formatScoreDisplay ? formatScoreDisplay(raw) : raw;
  const isNoShow = Boolean(player?.noShow);
  const scoreStrikethrough = raw === "-" || isNoShow;

  const scoreInputClass = scoreStrikethrough
    ? `${styles.inlineInput} ${styles.scoreStrikethrough}`
    : styles.inlineInput;

  const idCell =
    isNoShow ? (
      <span className={styles.scoreStrikethrough}>—</span>
    ) : player?.id ? (
      player.id
    ) : pendingAdvancePick && advanceSelect ? (
      <AdvancePickMenu
        value={advanceSelect.value}
        onSelect={advanceSelect.onSelect}
        options={advanceSelect.options}
        placeholder={advanceSelect.placeholder ?? "Pick"}
        groupLabel={advanceSelect.groupLabel ?? "Pick winner"}
      />
    ) : rosterSelect ? (
      <SearchablePlayerMenu
        options={rosterSelect.options}
        onSelect={rosterSelect.onSelect}
        placeholder={rosterSelect.placeholder ?? "Pick"}
        groupLabel={rosterSelect.groupLabel ?? "Select player"}
      />
    ) : (
      <input
        type="text"
        className={styles.inlineInput}
        placeholder="ID"
        onChange={onIDChange}
      />
    );

  const scoreCell = championLabel ? (
    <span className={styles.championScoreLabel}>{championLabel}</span>
  ) : showTooltip ? (
    <div className={styles.tooltipWrapper}>
      <input
        type="text"
        className={scoreInputClass}
        placeholder="SCORE"
        value={isNoShow ? "—" : displayScore}
        readOnly={isNoShow}
        onChange={isNoShow ? undefined : onScoreChange}
      />
      <div className={styles.tooltip}>Enter score, ex. M, K, D, ...</div>
    </div>
  ) : (
    <input
      type="text"
      className={scoreInputClass}
      placeholder="SCORE"
      value={isNoShow ? "—" : displayScore}
      readOnly={isNoShow}
      onChange={isNoShow ? undefined : onScoreChange}
    />
  );

  return (
    <>
      <td
        rowSpan={2}
        className={styles.playerIDExpanded}
        style={{
          borderBottom: ".5pt solid var(--bracket-ink)",
          height: "31.5pt",
          ...playerIDStyle,
        }}
      >
        {idCell}
      </td>
      <td
        rowSpan="2"
        className={styles.borderTopRight}
        style={{ borderBottom: ".5pt solid var(--bracket-ink)" }}
      >
        {scoreCell}
      </td>
    </>
  );
}
