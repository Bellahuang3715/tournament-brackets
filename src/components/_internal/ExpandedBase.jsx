import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function passthroughScoreInput(value) {
  return String(value ?? "");
}

export const TEXT_STYLES = {
  playerId:   { fontFamily: "Arial, sans-serif", fontSize: 14 },
  playerText: { fontFamily: "Arial, sans-serif", fontSize: 12 },
};

export function ExpandedBase({
  initialPlayers = [],
  maxSlots,
  mode, // "view" | "fillable"
  textStyles, // { playerId, playerText }
  /** Optional: map raw SCORE input string → stored `player.score`. Omit to store text as-is. */
  scoreInputTransform,
  /** Optional: called whenever the full slot array changes (edits, advances, clears). */
  onPlayersChange,
}) {
  const [players, setPlayers] = useState(() =>
    Array.from({ length: maxSlots }, (_, i) =>
      initialPlayers[i]
        ? { ...initialPlayers[i] }
        : { id: "", name: "", club: "", score: "" },
    ),
  );

  const onPlayersChangeRef = useRef(onPlayersChange);
  onPlayersChangeRef.current = onPlayersChange;
  useEffect(() => {
    onPlayersChangeRef.current?.(players);
  }, [players]);

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
  const toStoredScore = scoreInputTransform ?? passthroughScoreInput;
  const handleScoreChange = useCallback(
    (i) => (e) => updatePlayer(i, { score: toStoredScore(e.target.value) }),
    [updatePlayer, toStoredScore],
  );
  const handleIDChange = useCallback(
    (i) => (e) => updatePlayer(i, { id: e.target.value.toUpperCase() }),
    [updatePlayer],
  );
  const handleNameChange = useCallback(
    (i) => (e) => updatePlayer(i, { name: e.target.value }),
    [updatePlayer],
  );

  /**
   * Set who advances into a slot: copy from one of two feeder slots, no-show, or clear.
   * `source`: "0" | "1" (first/second in `pairFrom`) | "noshow" | "" (clear).
   * `pairFrom`: global player indices for the feeder match (default [0, 1]).
   */
  const setAdvanceSlot = useCallback((toIndex, source, pairFrom = [0, 1]) => {
    setPlayers((ps) => {
      const next = [...ps];
      const cur = { ...next[toIndex] };
      if (source === "" || source == null) {
        next[toIndex] = { id: "", name: "", club: "", score: "" };
        delete next[toIndex].noShow;
        return next;
      }
      if (source === "noshow") {
        next[toIndex] = {
          ...cur,
          id: "",
          name: "",
          club: "",
          score: "",
          noShow: true,
        };
        return next;
      }
      const si = Number(source);
      if (si === 0 || si === 1) {
        const idx = pairFrom[si];
        const src = ps[idx];
        next[toIndex] = {
          ...cur,
          id: src.id,
          name: src.name,
          club: src.club,
          score: "",
        };
        delete next[toIndex].noShow;
      }
      return next;
    });
  }, []);

  /** Clear a bracket slot (id/name/club/score) to allow repicking. */
  const clearPlayerSlot = useCallback((toIndex) => {
    setPlayers((ps) => {
      const next = [...ps];
      next[toIndex] = {
        ...next[toIndex],
        id: "",
        name: "",
        club: "",
        score: "",
      };
      delete next[toIndex].noShow;
      return next;
    });
  }, []);

  return {
    players,
    mode,
    playerIDStyle,
    playerNameStyle,
    handleScoreChange,
    handleIDChange,
    handleNameChange,
    setAdvanceSlot,
    clearPlayerSlot,
  };
}
