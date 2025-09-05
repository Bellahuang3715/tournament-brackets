import styles from "./Teams/stylesheet.module.css";

export function Team({ team, teamIDStyle }) {
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
        {team}
      </td>
    </>
  );
}
