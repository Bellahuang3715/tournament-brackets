import styles from "./Individuals/stylesheet.module.css";

const CIRCLED = { M: "Ⓜ", K: "Ⓚ", D: "Ⓓ", T: "Ⓣ" };

export function ScoreRowFillable({
  player,
  onScoreChange,
  onIDChange,
  playerIDStyle,
  showTooltip = false,
}) {
  // build display: first char circled, rest raw + spaced
  const score = player?.score || "";
  const displayScore = score
    ? [CIRCLED[score[0]], ...score.slice(1).split("")].join(" ")
    : "";

  return (
    <>
      <td
        rowSpan={2}
        className={styles.playerIDExpanded}
        style={{
          borderBottom: ".5pt solid black",
          height: "31.5pt",
          ...playerIDStyle,
        }}
      >
        <input
          type="text"
          className={styles.inlineInput}
          placeholder="ID"
          onChange={onIDChange}
        />
      </td>
      <td
        rowSpan="2"
        className={styles.borderTopRight}
        style={{ borderBottom: ".5pt solid black" }}
      >
        {showTooltip ? (
          <div className={styles.tooltipWrapper}>
            <input
              type="text"
              className={styles.inlineInput}
              placeholder="SCORE"
              value={displayScore}
              onChange={onScoreChange}
            />
            <div className={styles.tooltip}>Enter score, ex. M, K, D, ...</div>
          </div>
        ) : (
          <input
            type="text"
            className={styles.inlineInput}
            placeholder="SCORE"
            value={displayScore}
            onChange={onScoreChange}
          />
        )}
      </td>
    </>
  );
}
