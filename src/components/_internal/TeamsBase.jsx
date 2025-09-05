import { useCallback, useMemo, useState } from "react";

export function TeamsBase({
  initialTeams = [],
  maxSlots,
  mode, // "view" | "fillable"
  teamIDFontFamily = "Arial, sans-serif",
  teamIDColor,
  teamIDFontSize = 12,
}) {
  const [teams, setTeams] = useState(() =>
    Array.from({ length: maxSlots }, (_, i) => initialTeams[i] ?? "")
  );

  // Style object is memoized
  const teamIDStyle = useMemo(
    () => ({
      fontFamily: teamIDFontFamily,
      color: teamIDColor,
      fontSize: teamIDFontSize ? `${teamIDFontSize}pt` : undefined,
    }),
    [teamIDFontFamily, teamIDColor, teamIDFontSize]
  );

  // Update helpers
  const updateTeam = useCallback((index, patch) => {
    setTeams((ps) => {
      const copy = [...ps];
      copy[index] = { ...copy[index], ...patch };
      return copy;
    });
  }, []);

  const handleTeamChange = useCallback(
    (i) => (e) => updateTeam(i, e.target.value),
    [updateTeam]
  );

  return {
    teams,
    mode,
    teamIDStyle,
    handleTeamChange,
  };
}
