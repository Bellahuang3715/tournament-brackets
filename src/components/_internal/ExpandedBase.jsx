import { useCallback, useMemo, useState } from "react";
import { sanitizeScore } from "../../scripts/scoreUtils";

export function ExpandedBase({
  initialPlayers = [],
  maxSlots,
  mode,                // "view" | "fillable"
  fontFamily = "Arial, sans-serif",
  playerIDFontSize,
  playerNameFontSize,
  divisionID = 'x',
  groupID = 'x',
  courtID = 'x',
}) {
  // State
  const [players, setPlayers] = useState(() =>
    Array.from({ length: maxSlots }, (_, i) =>
      initialPlayers[i] ? { ...initialPlayers[i] } : { id: "", name: "", club: "", score: "" }
    )
  );

  const updatePlayer = useCallback((index, patch) => {
    setPlayers((ps) => {
      const copy = [...ps];
      copy[index] = { ...copy[index], ...patch };
      return copy;
    });
  }, []);

  // Styles
  const playerIDStyle = useMemo(
    () => ({ fontSize: `${playerIDFontSize}pt`, fontFamily }),
    [playerIDFontSize, fontFamily]
  );
  const playerNameStyle = useMemo(
    () => ({ fontSize: `${playerNameFontSize}pt`, fontFamily }),
    [playerNameFontSize, fontFamily]
  );

  // Handlers (index-aware)
  const handleScoreChange = useCallback(
    (i) => (e) => updatePlayer(i, { score: sanitizeScore(e.target.value) }),
    [updatePlayer]
  );
  const handleIDChange = useCallback(
    (i) => (e) => updatePlayer(i, { id: e.target.value.toUpperCase() }),
    [updatePlayer]
  );
  const handleNameChange = useCallback(
    (i) => (e) => updatePlayer(i, { name: e.target.value }),
    [updatePlayer]
  );

  return {
    players,
    mode,
    playerIDStyle,
    playerNameStyle,
    divisionID,
    groupID,
    courtID,
    handleScoreChange,
    handleIDChange,
    handleNameChange,
  };
}
