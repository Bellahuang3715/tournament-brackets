import styles from "./Individuals/stylesheet.module.css";

export function NameRow({ player, playerNameStyle }) {
  const club = player?.club?.trim();
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
        {player?.name}
        {club ? ` (${club})` : ""}
      </td>
    </>
  );
}
