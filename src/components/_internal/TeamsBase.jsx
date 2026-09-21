import { useCallback, useMemo, useState } from "react";
import { normalizeTeamSlot } from "./advanceTeamSlotHelpers";

export function TeamsBase({
  initialTeams = [],
  maxSlots,
  mode, // "view" | "fillable"
  teamIDFontFamily = "Arial, sans-serif",
  teamIDColor,
  teamIDFontSize = 12,
  divisionID = "x",
  groupID = "x",
  courtID = "x",
}) {
  const [teams, setTeams] = useState(() =>
    Array.from({ length: maxSlots }, (_, i) =>
      normalizeTeamSlot(initialTeams[i]),
    ),
  );

  const teamIDStyle = useMemo(
    () => ({
      fontFamily: teamIDFontFamily,
      color: teamIDColor,
      fontSize: teamIDFontSize ? `${teamIDFontSize}pt` : undefined,
    }),
    [teamIDFontFamily, teamIDColor, teamIDFontSize],
  );

  const updateTeam = useCallback((index, id) => {
    setTeams((ps) => {
      const copy = [...ps];
      copy[index] = { id: String(id ?? "") };
      return copy;
    });
  }, []);

  const handleTeamChange = useCallback(
    (i) => (e) => updateTeam(i, e.target.value),
    [updateTeam],
  );

  /**
   * Set who advances into a slot: copy from one of two feeder slots, no-show, or clear.
   * `source`: "0" | "1" | "noshow" | "" (clear).
   */
  const setAdvanceSlot = useCallback((toIndex, source, pairFrom = [0, 1]) => {
    setTeams((ps) => {
      const next = [...ps];
      if (source === "" || source == null) {
        next[toIndex] = { id: "" };
        return next;
      }
      if (source === "noshow") {
        next[toIndex] = { id: "", noShow: true };
        return next;
      }
      const si = Number(source);
      if (si === 0 || si === 1) {
        const src = ps[pairFrom[si]];
        next[toIndex] = { id: src?.id ?? "" };
      }
      return next;
    });
  }, []);

  const clearTeamSlot = useCallback((toIndex) => {
    setTeams((ps) => {
      const next = [...ps];
      next[toIndex] = { id: "" };
      return next;
    });
  }, []);

  return {
    teams,
    mode,
    teamIDStyle,
    divisionID,
    groupID,
    courtID,
    handleTeamChange,
    setAdvanceSlot,
    clearTeamSlot,
  };
}
