import styles from "./Teams/stylesheet.module.css";
import { AdvancePickMenu } from "./_internal/AdvancePickMenu";
import { teamLabel } from "./_internal/advanceTeamSlotHelpers";

export function TeamFillable({
  team,
  onTeamChange,
  teamIDStyle,
  pendingAdvancePick,
  advanceSelect,
  onClearWinner,
}) {
  const id = typeof team === "string" ? team : (team?.id ?? "");
  const isNoShow = Boolean(team?.noShow);
  const showChange = Boolean(onClearWinner && (id || isNoShow));

  let content;
  if (isNoShow) {
    content = (
      <>
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
      </>
    );
  } else if (showChange && id) {
    content = (
      <>
        <span className={styles.winnerNameText}>{teamLabel(team)}</span>
        <button
          type="button"
          className={styles.winnerChangeButton}
          onClick={onClearWinner}
          aria-label="Change winner"
        >
          Change
        </button>
      </>
    );
  } else if (pendingAdvancePick && advanceSelect) {
    content = (
      <AdvancePickMenu
        value={advanceSelect.value}
        onSelect={advanceSelect.onSelect}
        options={advanceSelect.options}
        placeholder={advanceSelect.placeholder ?? "Pick"}
        groupLabel={advanceSelect.groupLabel ?? "Pick winner"}
      />
    );
  } else {
    content = (
      <input
        type="text"
        className={styles.inlineInput}
        placeholder="Team ID"
        value={id}
        onChange={onTeamChange}
      />
    );
  }

  const cellClass = showChange
    ? `${styles.teamIDExpanded} ${styles.winnerNameCell}`
    : styles.teamIDExpanded;

  return (
    <>
      <td
        rowSpan={2}
        height={40}
        className={cellClass}
        style={{
          borderBottom: ".5pt solid var(--bracket-ink)",
          height: "31.5pt",
          ...(showChange ? { position: "relative", paddingRight: "3.25rem" } : {}),
          ...teamIDStyle,
        }}
      >
        {content}
      </td>
    </>
  );
}
