import styles from "./Teams/stylesheet.module.css";

export function TeamFillable({ team, onTeamChange, teamIDStyle }) {
  return (
    <>
      <td
        rowSpan={2}
        height={40}
        className={styles.teamIDExpanded}
        style={{
          borderBottom: ".5pt solid black",
          height: "31.5pt",
          ...teamIDStyle,
        }}
      >
        <input
          type="text"
          className={styles.inlineInput}
          placeholder="Team ID"
          onChange={onTeamChange}
        />
      </td>
    </>
  );
}
