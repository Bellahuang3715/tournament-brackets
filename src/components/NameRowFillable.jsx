import styles from "./Individuals/stylesheet.module.css";

function formatPlayerLabel(player) {
  const name = player?.name ?? "";
  const club = player?.club?.trim();
  return club ? `${name} (${club})` : name;
}

/**
 * @param {boolean} [emptySlotName] — leave name (club) cell blank until ID cell picks a winner/no-show.
 * @param {string} [placeholderLabel] — non-editable label shown like a placeholder until a player is assigned.
 */
export function NameRowFillable({
  player,
  onNameChange,
  playerNameStyle,
  emptySlotName,
  placeholderLabel,
  onClearWinner,
}) {
  const showChange = Boolean(onClearWinner && (player?.name || player?.noShow));

  const nameCellStyle = {
    height: "15.75pt",
    ...(showChange ? { position: "relative", paddingRight: "3.25rem" } : {}),
    ...playerNameStyle,
  };

  const nameCellClass = showChange
    ? `${styles.playerNameExpanded} ${styles.winnerNameCell}`
    : styles.playerNameExpanded;

  if (player?.noShow) {
    return (
      <>
        <td
          colSpan={2}
          height={20}
          className={nameCellClass}
          style={nameCellStyle}
        >
          <span className={styles.winnerNameText}>No Show</span>
          {onClearWinner ? (
            <button
              type="button"
              className={styles.winnerChangeButton}
              onClick={onClearWinner}
              aria-label="Change no-show"
            >
              Change
            </button>
          ) : null}
        </td>
      </>
    );
  }

  if (player?.name) {
    return (
      <>
        <td
          colSpan={2}
          height={20}
          className={nameCellClass}
          style={nameCellStyle}
        >
          <span className={styles.winnerNameText}>
            {formatPlayerLabel(player)}
          </span>
          {onClearWinner ? (
            <button
              type="button"
              className={styles.winnerChangeButton}
              onClick={onClearWinner}
              aria-label="Change winner"
            >
              Change
            </button>
          ) : null}
        </td>
      </>
    );
  }

  if (emptySlotName) {
    return (
      <>
        <td
          colSpan={2}
          height={20}
          className={styles.playerNameExpanded}
          style={{ height: "15.75pt", ...playerNameStyle }}
        >
          {placeholderLabel ? (
            <span className={styles.slotPlaceholderLabel}>{placeholderLabel}</span>
          ) : (
            "\u00a0"
          )}
        </td>
      </>
    );
  }

  return (
    <>
      <td colSpan={2} className={styles.playerNameExpanded}>
        <input
          type="text"
          className={styles.winnerNameInput}
          placeholder="Name (CLUB)"
          onChange={onNameChange}
        />
      </td>
    </>
  );
}
