import styles from "./Individuals/stylesheet.module.css";

export function ScoreRow({
  player,
  playerIDStyle,
  championLabel,
}) {
  const isNoShow = Boolean(player?.noShow);
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
          isNoShow ? ` ${styles.scoreStrikethrough}` : ""
        }`}
        style={{ borderBottom: ".5pt solid var(--bracket-ink)" }}
      >
        {championLabel ? (
          <span className={styles.championScoreLabel}>{championLabel}</span>
        ) : isNoShow ? (
          "—"
        ) : (
          "\u00a0"
        )}
      </td>
    </>
  );
}
