import { Team } from "../Team";
import { TeamFillable } from "../TeamFillable";
import {
  getAdvanceMatchByTo,
  advanceValueForTeam,
  advanceOptionsForTeam,
  pickPendingTeam,
} from "./advanceTeamSlotHelpers";

/**
 * Shared team slot renderer for expanded team brackets (view + fillable advance picks).
 */
export function useAdvanceExpandedTeams({
  teams,
  mode,
  teamIDStyle,
  handleTeamChange,
  setAdvanceSlot,
  clearTeamSlot,
  advanceMatches = [],
}) {
  const team = (i) => {
    const m = getAdvanceMatchByTo(advanceMatches, i);
    const pending = mode !== "view" && m && pickPendingTeam(teams[i]);

    if (mode === "view") {
      return <Team team={teams[i]} teamIDStyle={teamIDStyle} />;
    }

    return (
      <TeamFillable
        team={teams[i]}
        onTeamChange={handleTeamChange(i)}
        teamIDStyle={teamIDStyle}
        pendingAdvancePick={!!pending}
        advanceSelect={
          m && pending
            ? {
                value: advanceValueForTeam(teams, i, m.from),
                onSelect: (value) => setAdvanceSlot(i, value, m.from),
                options: advanceOptionsForTeam(teams, m.from),
                placeholder: "Pick",
                groupLabel: "Pick winner",
              }
            : undefined
        }
        onClearWinner={m ? () => clearTeamSlot(i) : undefined}
      />
    );
  };

  return { team };
}
