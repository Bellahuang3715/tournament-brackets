import { useCallback, useMemo, useState } from "react";
import { sanitizeScore } from "../../scripts/scoreUtils";

export const TEXT_STYLES = {
  playerId:   { fontFamily: "Arial, sans-serif", fontSize: 14, color: "#000000" },
  playerText: { fontFamily: "Arial, sans-serif", fontSize: 12, color: "#000000" },
};

export function ExpandedBase({
  initialPlayers = [],
  maxSlots,
  mode, // "view" | "fillable"
  textStyles, // { playerId, playerText }
}) {
  const [players, setPlayers] = useState(() =>
    Array.from({ length: maxSlots }, (_, i) =>
      initialPlayers[i]
        ? { ...initialPlayers[i] }
        : { id: "", name: "", club: "", score: "" },
    ),
  );

  const updatePlayer = useCallback((index, patch) => {
    setPlayers((ps) => {
      const copy = [...ps];
      copy[index] = { ...copy[index], ...patch };
      return copy;
    });
  }, []);

  // Build styles for DOM (React inline style object)
  const playerIDStyle = useMemo(() => {
    const s = textStyles?.playerId ?? {};
    return {
      fontFamily: s.fontFamily,
      fontSize: s.fontSize != null ? `${s.fontSize}pt` : undefined,
      color: s.color,
    };
  }, [textStyles?.playerId]);

  const playerNameStyle = useMemo(() => {
    const s = textStyles?.playerText ?? {};
    return {
      fontFamily: s.fontFamily,
      fontSize: s.fontSize != null ? `${s.fontSize}pt` : undefined,
      color: s.color,
    };
  }, [textStyles?.playerText]);

  // Handlers (index-aware)
  const handleScoreChange = useCallback(
    (i) => (e) => updatePlayer(i, { score: sanitizeScore(e.target.value) }),
    [updatePlayer],
  );
  const handleIDChange = useCallback(
    (i) => (e) => updatePlayer(i, { id: e.target.value.toUpperCase() }),
    [updatePlayer],
  );
  const handleNameChange = useCallback(
    (i) => (e) => updatePlayer(i, { name: e.target.value }),
    [updatePlayer],
  );

  return {
    players,
    mode,
    playerIDStyle,
    playerNameStyle,
    handleScoreChange,
    handleIDChange,
    handleNameChange,
  };
}
