import styles from "./Teams/stylesheet.module.css";
import { teamLabel } from "./_internal/advanceTeamSlotHelpers";

export function Team({ team, teamIDStyle }) {
  const label = teamLabel(team);

  return (
    <>
      <td
        rowSpan={2}
        height={40}
        className={styles.teamIDExpanded}
        style={{
          borderBottom: ".5pt solid var(--bracket-ink)",
          height: "31.5pt",
          ...teamIDStyle,
        }}
      >
        {label}
      </td>
    </>
  );
}
