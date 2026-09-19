import styles from "./Individuals/stylesheet.module.css";

export function ScoreRow({
  player,
  playerIDStyle,
  championLabel,
  formatScoreDisplay,
}) {
  const isNoShow = Boolean(player?.noShow);
  const raw = player?.score ?? "";
  const displayScore = formatScoreDisplay ? formatScoreDisplay(raw) : raw;
  const scoreStrikethrough = raw === "-" || isNoShow;

  let scoreCell;
  if (championLabel) {
    scoreCell = (
      <span className={styles.championScoreLabel}>{championLabel}</span>
    );
  } else if (isNoShow) {
    scoreCell = "—";
  } else if (displayScore) {
    scoreCell = displayScore;
  } else {
    scoreCell = "\u00a0";
  }

  return (
    <>
      <td
        rowSpan="2"
        className={styles.playerIDExpanded}
        style={{
          borderBottom: ".5pt solid var(--bracket-ink)",
          height: "31.5pt",
          ...playerIDStyle,
        }}
      >
        {isNoShow ? (
          <span className={styles.scoreStrikethrough}>—</span>
        ) : (
          player.id
        )}
      </td>
      <td
        rowSpan={2}
        className={`${styles.borderTopRight}${
          scoreStrikethrough ? ` ${styles.scoreStrikethrough}` : ""
        }`}
        style={{ borderBottom: ".5pt solid var(--bracket-ink)" }}
      >
        {scoreCell}
      </td>
    </>
  );
}
