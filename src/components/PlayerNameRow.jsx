import React from "react";
import styles from "./Individuals/stylesheet.module.css";

export function PlayerNameRow({ player, onNameChange, playerNameStyle }) {
  return (
    <>
      {player.name ? (
        <td
          colSpan={2}
          height={20}
          className={styles.playerNameExpanded}
          style={{
            height: "15.75pt",
            ...playerNameStyle,
          }}
        >
          {`${player.name} (${player.club})`}
        </td>
      ) : (
        <td colSpan={2} className={styles.playerNameExpanded}>
          <input
            type="text"
            className={styles.winnerNameInput}
            placeholder="Name (CLUB)"
            onChange={onNameChange}
          />
        </td>
      )}
    </>
  );
}
