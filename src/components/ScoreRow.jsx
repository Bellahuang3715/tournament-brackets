import React from "react";
import styles from "./Individuals/stylesheet.module.css";

export function ScoreRow({
  player,
  playerIDStyle,
}) {
  return (
    <>
      <td
        rowSpan="2"
        className={styles.playerID}
        style={{
          borderBottom: ".5pt solid black",
          height: "31.5pt",
          ...playerIDStyle,
        }}
      >
        {player.id}
      </td>
      <td
        rowSpan={2}
        className={styles.borderTopRight}
        style={{ borderBottom: ".5pt solid black" }}
      >
        &nbsp;
      </td>
    </>
  );
}
