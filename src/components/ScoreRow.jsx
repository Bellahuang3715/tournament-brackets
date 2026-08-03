import styles from "./Individuals/stylesheet.module.css";

export function ScoreRow({
  player,
  playerIDStyle,
}) {
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
        {player?.noShow ? "—" : player.id}
      </td>
      <td
        rowSpan={2}
        className={styles.borderTopRight}
        style={{ borderBottom: ".5pt solid var(--bracket-ink)" }}
      >
        &nbsp;
      </td>
    </>
  );
}
