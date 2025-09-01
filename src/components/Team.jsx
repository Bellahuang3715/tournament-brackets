import styles from "./Teams/stylesheet.module.css";

export function Team({ team, teamStyle }) {
  return (
    <>
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
    </>
  );
}
