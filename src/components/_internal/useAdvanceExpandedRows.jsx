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
  advanceMatches,
  formatScoreDisplay,
}) {
  const nameRow = (i) => {
    const m = getAdvanceMatchByTo(advanceMatches, i);
    const pending = mode !== "view" && m && pickPendingPlayer(players[i]);

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
        emptySlotName={!!pending}
        onClearWinner={m ? () => clearPlayerSlot(i) : undefined}
      />
    );
  };

  const scoreRow = (i) => {
    const m = getAdvanceMatchByTo(advanceMatches, i);
    const pending = mode !== "view" && m && pickPendingPlayer(players[i]);
    const advanceSelect =
      m && pending
        ? {
            value: advanceValueFor(players, i, m.from),
            onSelect: (value) => setAdvanceSlot(i, value, m.from),
            options: advanceOptionsFor(players, m.from),
            placeholder: "Pick",
          }
        : undefined;

    return mode === "view" ? (
      <ScoreRow player={players[i]} playerIDStyle={playerIDStyle} />
    ) : (
      <ScoreRowFillable
        player={players[i]}
        onScoreChange={handleScoreChange(i)}
        onIDChange={handleIDChange(i)}
        playerIDStyle={playerIDStyle}
        pendingAdvancePick={!!pending}
        advanceSelect={advanceSelect}
        formatScoreDisplay={formatScoreDisplay}
      />
    );
  };

  return { nameRow, scoreRow };
}
