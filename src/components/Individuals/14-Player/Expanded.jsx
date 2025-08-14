import React, { useState } from 'react';
import { ScoreRowFillable } from '../../ScoreRowFillable';
import { NameRowFillable } from '../../NameRowFillable';

import styles from '../stylesheet.module.css';

// map raw → circled
const CIRCLED = { M: 'Ⓜ', K: 'Ⓚ', D: 'Ⓓ', T: 'Ⓣ' };
const RAW = Object.fromEntries(Object.entries(CIRCLED).map(([k,v])=>[v,k]));
const ALLOWED = ['M','K','D','T'];

export default function Expanded({
  players: initialPlayers,
  fontFamily = 'Arial, sans-serif',
  playerIDFontSize = 14,
  playerNameFontSize = 12,
}) {
  const maxSlots = 27;
  
  // create own state copy of players
  const [players, setPlayers] = useState(() => {
    return Array.from({ length: maxSlots }, (_, i) => {
      const p = initialPlayers[i];
      return p
        ? { ...p } 
        : { id: '', name: '', club: '', score: '' };
    });
  });

  // helper to merge partial updates into one player
  const updatePlayer = (index, patch) => {
    setPlayers(ps => {
      const copy = [...ps];
      copy[index] = { ...copy[index], ...patch };
      return copy;
    });
  };

  const playerIDStyle = { fontSize:  `${playerIDFontSize}pt`, fontFamily };
  const playerNameStyle = { fontSize:  `${playerNameFontSize}pt`, fontFamily };
  
  // helper to process score text
  function processRaw(input) {
    const noSpaces = input.replace(/\s+/g, '')
    let firstRaw = ''
    if (noSpaces) {
      const c0 = noSpaces[0]
      firstRaw = RAW[c0] || c0.toUpperCase()
      if (!ALLOWED.includes(firstRaw)) firstRaw = ''
    }
    const restRaw = Array.from(noSpaces.slice(1).toUpperCase())
      .filter(ch => ALLOWED.includes(ch))
      .join('')
    return firstRaw + restRaw
  }

  const handleScoreChange = i => e => {
    const raw = processRaw(e.target.value)
    updatePlayer(i, { score: raw });
  };

  const handleIDChange = i => e => {
    const id = e.target.value.toUpperCase()
    updatePlayer(i, { id });
  };

  const handleNameChange = i => e => {
    const name = e.target.value
    updatePlayer(i, { name });
  };

  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={2188} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '1641pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={101} span={8} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} width={57} style={{height: '15.75pt', width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={57} style={{width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.groupTitle} colSpan={6} width={382} style={{msoIgnore: 'colspan', width: '286pt'}}>GROUP
              x-x | COURT x</td>
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={57} style={{width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 1 Top Player | Index 0 */}
            <ScoreRowFillable 
              player={players[0]}
              onScoreChange={handleScoreChange(0)}
              onIDChange={handleIDChange(0)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 1 Top Player | Index 0 */}
            <NameRowFillable
              player={players[0]}
              onNameChange={handleNameChange(0)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>1</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {/* Round 7 Top Player | Index 14 */}
            <ScoreRowFillable 
              player={players[14]}
              onScoreChange={handleScoreChange(14)}
              onIDChange={handleIDChange(14)}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 1 Bottom Player | Index 1 */}
            <ScoreRowFillable 
              player={players[1]}
              onScoreChange={handleScoreChange(1)}
              onIDChange={handleIDChange(1)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            {/* Round 7 Top Player | Index 14 */}
            <NameRowFillable
              player={players[14]}
              onNameChange={handleNameChange(14)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 1 Bottom Player | Index 1 */}
            <NameRowFillable
              player={players[1]}
              onNameChange={handleNameChange(1)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.borderRightExpanded}>7</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            {/* Round 11 Top Player | Index 20 */}
            <ScoreRowFillable 
              player={players[20]}
              onScoreChange={handleScoreChange(20)}
              onIDChange={handleIDChange(20)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTop} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            {/* Round 11 Top Player | Index 20 */}
            <NameRowFillable
              player={players[20]}
              onNameChange={handleNameChange(20)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 2 Top Player | Index 2 */}
            <ScoreRowFillable 
              player={players[2]}
              onScoreChange={handleScoreChange(2)}
              onIDChange={handleIDChange(2)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 2 Top Player | Index 2 */}
            <NameRowFillable
              player={players[2]}
              onNameChange={handleNameChange(2)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>2</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {/* Round 7 Bottom Player | Index 15 */}
            <ScoreRowFillable 
              player={players[15]}
              onScoreChange={handleScoreChange(15)}
              onIDChange={handleIDChange(15)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 2 Bottom Player | Index 3 */}
            <ScoreRowFillable 
              player={players[3]}
              onScoreChange={handleScoreChange(3)}
              onIDChange={handleIDChange(3)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            {/* Round 7 Bottom Player | Index 15 */}
            <NameRowFillable
              player={players[15]}
              onNameChange={handleNameChange(15)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>11</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {/* Round 13 Top Player | Index 24 */}
            <ScoreRowFillable 
              player={players[24]}
              onScoreChange={handleScoreChange(24)}
              onIDChange={handleIDChange(24)}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 2 Bottom Player | Index 3 */}
            <NameRowFillable
              player={players[3]}
              onNameChange={handleNameChange(3)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            {/* Round 13 Top Player | Index 24 */}
            <NameRowFillable
              player={players[24]}
              onNameChange={handleNameChange(24)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 3 Top Player | Index 4 */}
            <ScoreRowFillable 
              player={players[4]}
              onScoreChange={handleScoreChange(4)}
              onIDChange={handleIDChange(4)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 3 Top Player | Index 4 */}
            <NameRowFillable
              player={players[4]}
              onNameChange={handleNameChange(4)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>3</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {/* Round 8 Top Player | Index 16 */}
            <ScoreRowFillable 
              player={players[16]}
              onScoreChange={handleScoreChange(16)}
              onIDChange={handleIDChange(16)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 3 Bottom Player | Index 5 */}
            <ScoreRowFillable 
              player={players[5]}
              onScoreChange={handleScoreChange(5)}
              onIDChange={handleIDChange(5)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            {/* Round 8 Top Player | Index 16 */}
            <NameRowFillable
              player={players[16]}
              onNameChange={handleNameChange(16)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>8</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            {/* Round 11 Bottom Player | Index 21 */}
            <ScoreRowFillable 
              player={players[21]}
              onScoreChange={handleScoreChange(21)}
              onIDChange={handleIDChange(21)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 3 Bottom Player | Index 5 */}
            <NameRowFillable
              player={players[5]}
              onNameChange={handleNameChange(5)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            {/* Round 8 Bottom Player | Index 12 */}
            <ScoreRowFillable 
              player={players[12]}
              onScoreChange={handleScoreChange(12)}
              onIDChange={handleIDChange(12)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td />
            {/* Round 11 Bottom Player | Index 21 */}
            <NameRowFillable
              player={players[21]}
              onNameChange={handleNameChange(21)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            {/* Round 8 Bottom Player | Index 12 */}
            <NameRowFillable
              player={players[12]}
              onNameChange={handleNameChange(12)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 4 Top Player | Index 6 */}
            <ScoreRowFillable 
              player={players[6]}
              onScoreChange={handleScoreChange(6)}
              onIDChange={handleIDChange(6)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td rowSpan={2} className={styles.borderRightExpanded}>13</td>
            <td className={styles.borderBottomLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            {/* Finalist | Index 26 */}
            <ScoreRowFillable 
              player={players[26]}
              onScoreChange={handleScoreChange(26)}
              onIDChange={handleIDChange(26)}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none', borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 4 Top Player | Index 6 */}
            <NameRowFillable
              player={players[6]}
              onNameChange={handleNameChange(6)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>4</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {/* Round 9 Top Player | Index 17 */}
            <ScoreRowFillable 
              player={players[17]}
              onScoreChange={handleScoreChange(17)}
              onIDChange={handleIDChange(17)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            {/* Finalist | Index 26 */}
            <NameRowFillable
              player={players[26]}
              onNameChange={handleNameChange(26)}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 4 Bottom Player | Index 7 */}
            <ScoreRowFillable 
              player={players[7]}
              onScoreChange={handleScoreChange(7)}
              onIDChange={handleIDChange(7)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            {/* Round 9 Top Player | Index 17 */}
            <NameRowFillable
              player={players[17]}
              onNameChange={handleNameChange(17)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 4 Bottom Player | Index 7 */}
            <NameRowFillable
              player={players[7]}
              onNameChange={handleNameChange(7)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.borderRightExpanded}>9</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            {/* Round 12 Top Player | Index 22 */}
            <ScoreRowFillable 
              player={players[22]}
              onScoreChange={handleScoreChange(22)}
              onIDChange={handleIDChange(22)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTop} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            {/* Round 12 Top Player | Index 22 */}
            <NameRowFillable
              player={players[22]}
              onNameChange={handleNameChange(22)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 5 Top Player | Index 8 */}
            <ScoreRowFillable 
              player={players[8]}
              onScoreChange={handleScoreChange(8)}
              onIDChange={handleIDChange(8)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 5 Top Player | Index 8 */}
            <NameRowFillable
              player={players[8]}
              onNameChange={handleNameChange(8)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>5</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {/* Round 9 Bottom Player | Index 18 */}
            <ScoreRowFillable 
              player={players[18]}
              onScoreChange={handleScoreChange(18)}
              onIDChange={handleIDChange(18)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 5 Bottom Player | Index 9 */}
            <ScoreRowFillable 
              player={players[9]}
              onScoreChange={handleScoreChange(9)}
              onIDChange={handleIDChange(9)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            {/* Round 9 Bottom Player | Index 18 */}
            <NameRowFillable
              player={players[18]}
              onNameChange={handleNameChange(18)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>12</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            {/* Round 13 Bottom Player | Index 25 */}
            <ScoreRowFillable 
              player={players[25]}
              onScoreChange={handleScoreChange(25)}
              onIDChange={handleIDChange(25)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 5 Bottom Player | Index 9 */}
            <NameRowFillable
              player={players[9]}
              onNameChange={handleNameChange(9)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            {/* Round 13 Bottom Player | Index 25 */}
            <NameRowFillable
              player={players[25]}
              onNameChange={handleNameChange(25)}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 6 Top Player | Index 10 */}
            <ScoreRowFillable 
              player={players[10]}
              onScoreChange={handleScoreChange(10)}
              onIDChange={handleIDChange(10)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 6 Top Player | Index 10 */}
            <NameRowFillable
              player={players[10]}
              onNameChange={handleNameChange(10)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>6</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {/* Round 10 Top Player | Index 19 */}
            <ScoreRowFillable 
              player={players[19]}
              onScoreChange={handleScoreChange(19)}
              onIDChange={handleIDChange(19)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 6 Bottom Player | Index 11 */}
            <ScoreRowFillable 
              player={players[11]}
              onScoreChange={handleScoreChange(11)}
              onIDChange={handleIDChange(11)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            {/* Round 10 Top Player | Index 19 */}
            <NameRowFillable
              player={players[19]}
              onNameChange={handleNameChange(19)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRightExpanded}>10</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            {/* Round 12 Bottom Player | Index 23 */}
            <ScoreRowFillable 
              player={players[23]}
              onScoreChange={handleScoreChange(23)}
              onIDChange={handleIDChange(23)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 6 Bottom Player | Index 11 */}
            <NameRowFillable
              player={players[11]}
              onNameChange={handleNameChange(11)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            {/* Round 10 Bottom Player | Index 13 */}
            <ScoreRowFillable 
              player={players[13]}
              onScoreChange={handleScoreChange(13)}
              onIDChange={handleIDChange(13)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td />
            {/* Round 12 Bottom Player | Index 23 */}
            <NameRowFillable
              player={players[23]}
              onNameChange={handleNameChange(23)}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            {/* Round 10 Bottom Player | Index 13 */}
            <NameRowFillable
              player={players[13]}
              onNameChange={handleNameChange(13)}
              playerNameStyle={playerNameStyle}
            />
          </tr>
        </tbody></table>
    </>
  );
}
