import styles from "./Teams/stylesheet.module.css";

export function TeamFillable({ team, onTeamChange, teamStyle }) {
  return (
    <>
      {team ? (
        <td
          rowSpan={2}
          height={40}
          className={styles.teamID}
          style={{
            borderBottom: ".5pt solid black",
            height: "31.5pt",
            ...teamStyle,
          }}
        >
          {team}
        </td>
      ) : (
        <td 
          rowSpan={2}
          height={40}
          className={styles.teamIDExpanded}
          style={{
            borderBottom: ".5pt solid black",
            height: "31.5pt",
            ...teamStyle,
          }}>
          <input
            type="text"
            className={styles.inlineInput}
            placeholder="Team ID"
            onChange={(e) => onTeamChange?.(e.target.value)}
          />
        </td>
      )}
    </>
  );
}
