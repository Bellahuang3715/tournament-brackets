import React from "react";
import styles from "./Individuals/stylesheet.module.css";

export function NameRow({ player, playerNameStyle }) {
  return (
    <>
      <td
        colSpan={2}
        height={20}
        className={styles.playerName}
        style={{
          height: "15.75pt",
          ...playerNameStyle,
        }}
      >
        {`${player.name} (${player.club})`}
      </td>
    </>
  );
}
