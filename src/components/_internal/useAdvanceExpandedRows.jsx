import { NameRow } from "../NameRow";
import { ScoreRow } from "../ScoreRow";
import { NameRowFillable } from "../NameRowFillable";
import { ScoreRowFillable } from "../ScoreRowFillable";
import {
  getAdvanceMatchByTo,
  advanceValueFor,
  advanceOptionsFor,
  pickPendingPlayer,
} from "./advanceSlotHelpers";

/**
 * Shared nameRow / scoreRow renderers for expanded brackets that use advance picks
 * (feeder pair → next slot, ID select + empty name until pick).
 *
 * @param {object} params
 * @param {import("./advanceSlotHelpers").AdvanceMatch[]} params.advanceMatches
 * @param {Array<{ id?: string, name?: string, club?: string }>} [params.playerOptions]
 * @param {string[]} [params.openingSlotLabels] — placeholder labels for empty opening slots
 */
export function useAdvanceExpandedRows({
  players,
  mode,
  playerIDStyle,
  playerNameStyle,
  handleScoreChange,
  handleIDChange,
  handleNameChange,
  setAdvanceSlot,
  clearPlayerSlot,
  assignPlayerSlot,
  advanceMatches,
  formatScoreDisplay,
  playerOptions,
  openingSlotLabels,
  championLabel = "WINNER",
}) {
  const hasRoster = Array.isArray(playerOptions) && playerOptions.length > 0;
  const championSlotIndex =
    Array.isArray(advanceMatches) && advanceMatches.length > 0
      ? Math.max(...advanceMatches.map((m) => m.to))
      : null;


  const nameRow = (i) => {
    const m = getAdvanceMatchByTo(advanceMatches, i);
    const pending = mode !== "view" && m && pickPendingPlayer(players[i]);
    const rosterPending =
      mode !== "view" &&
      hasRoster &&
      !m &&
      pickPendingPlayer(players[i]);
    const emptySlotName = !!pending || rosterPending;
    const placeholderLabel =
      emptySlotName && !m && Array.isArray(openingSlotLabels)
        ? openingSlotLabels[i]
        : undefined;

    if (mode === "view") {
      return (
        <NameRow player={players[i]} playerNameStyle={playerNameStyle} />
      );
    }
    return (
      <NameRowFillable
        player={players[i]}
        onNameChange={handleNameChange(i)}
        playerNameStyle={playerNameStyle}
        emptySlotName={emptySlotName}
        placeholderLabel={placeholderLabel}
        onClearWinner={
          m || hasRoster ? () => clearPlayerSlot(i) : undefined
        }
      />
    );
  };

  const scoreRow = (i) => {
    const m = getAdvanceMatchByTo(advanceMatches, i);
    const pending = mode !== "view" && m && pickPendingPlayer(players[i]);
    const rosterPending =
      mode !== "view" &&
      hasRoster &&
      !m &&
      pickPendingPlayer(players[i]);

    const advanceSelect =
      m && pending
        ? {
            value: advanceValueFor(players, i, m.from),
            onSelect: (value) => setAdvanceSlot(i, value, m.from),
            options: advanceOptionsFor(players, m.from),
            placeholder: "Pick",
          }
        : undefined;

    const rosterSelect =
      rosterPending && assignPlayerSlot
        ? {
            options: playerOptions.filter((opt) => {
              const oid = (opt.id || "").trim();
              const oname = (opt.name || "").trim();
              return !players.some(
                (p, idx) =>
                  idx !== i &&
                  (p.id || "").trim() === oid &&
                  (p.name || "").trim() === oname &&
                  (oid !== "" || oname !== ""),
              );
            }),
            onSelect: (player) => assignPlayerSlot(i, player),
            placeholder: "Pick",
            groupLabel: "Select player",
          }
        : undefined;

    return mode === "view" ? (
      <ScoreRow
        player={players[i]}
        playerIDStyle={playerIDStyle}
        championLabel={
          i === championSlotIndex && championLabel
            ? championLabel
            : undefined
        }
      />
    ) : (
      <ScoreRowFillable
        player={players[i]}
        onScoreChange={handleScoreChange(i)}
        onIDChange={handleIDChange(i)}
        playerIDStyle={playerIDStyle}
        pendingAdvancePick={!!pending}
        advanceSelect={advanceSelect}
        rosterSelect={rosterSelect}
        formatScoreDisplay={formatScoreDisplay}
        championLabel={
          i === championSlotIndex && championLabel
            ? championLabel
            : undefined
        }
      />
    );
  };

  return { nameRow, scoreRow };
}
