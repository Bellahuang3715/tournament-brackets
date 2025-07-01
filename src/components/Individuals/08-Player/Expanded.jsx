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
  const maxSlots = 15;

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
      <table border={0} cellPadding={0} cellSpacing={0} width={1892} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '1420pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={47} style={{msoWidthSource: 'userset', msoWidthAlt: 1493, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={101} span={8} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} width={57} style={{height: '15.75pt', width: '43pt'}} />
            <td className={styles.xl00} width={168} style={{width: '126pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={49} style={{width: '37pt'}} />
            <td className={styles.groupTitle} colSpan={5} width={455} style={{msoIgnore: 'colspan', width: '341pt'}}>GROUP
              x-x | COURT x</td>
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={47} style={{width: '35pt'}} />
            <td className={styles.xl00} width={168} style={{width: '126pt'}} />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable 
              player={players[0]}
              onScoreChange={handleScoreChange(0)}
              onIDChange={handleIDChange(0)}
              playerIDStyle={playerIDStyle}
              showTooltip={true}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRowFillable
              player={players[0]}
              onNameChange={handleNameChange(0)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.xl00}>1</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable
              player={players[8]}
              onScoreChange={handleScoreChange(8)}
              onIDChange={handleIDChange(8)}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable 
              player={players[1]}
              onScoreChange={handleScoreChange(1)}
              onIDChange={handleIDChange(1)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className="xl00" />
            <NameRowFillable
              player={players[8]}
              onNameChange={handleNameChange(8)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderLeft} style={{height: '15.75pt', borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[1]}
              onNameChange={handleNameChange(1)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>5</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable
              player={players[9]}
              onScoreChange={handleScoreChange(9)}
              onIDChange={handleIDChange(9)}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
            <NameRowFillable
              player={players[12]}
              onNameChange={handleNameChange(12)}
              playerNameStyle={playerNameStyle}
            />
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable 
              player={players[2]}
              onScoreChange={handleScoreChange(2)}
              onIDChange={handleIDChange(2)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[2]}
              onNameChange={handleNameChange(2)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.xl00}>2</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable 
              player={players[10]}
              onScoreChange={handleScoreChange(10)}
              onIDChange={handleIDChange(10)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable
              player={players[3]}
              onScoreChange={handleScoreChange(3)}
              onIDChange={handleIDChange(3)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <NameRowFillable
              player={players[9]}
              onNameChange={handleNameChange(9)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[3]}
              onNameChange={handleNameChange(3)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>7</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable 
              player={players[11]}
              onScoreChange={handleScoreChange(11)}
              onIDChange={handleIDChange(11)}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable
              player={players[4]}
              onScoreChange={handleScoreChange(4)}
              onIDChange={handleIDChange(4)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <NameRowFillable
              player={players[14]}
              onNameChange={handleNameChange(14)}
              playerNameStyle={playerNameStyle}
            />
            </tr>
            <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[4]}
              onNameChange={handleNameChange(4)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.xl00}>3</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable 
              player={players[12]}
              onScoreChange={handleScoreChange(12)}
              onIDChange={handleIDChange(12)}
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable
              player={players[5]}
              onScoreChange={handleScoreChange(5)}
              onIDChange={handleIDChange(5)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <NameRowFillable
              player={players[10]}
              onNameChange={handleNameChange(10)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[5]}
              onNameChange={handleNameChange(5)}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>6</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable
              player={players[13]}
              onScoreChange={handleScoreChange(13)}
              onIDChange={handleIDChange(13)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable
              player={players[6]}
              onScoreChange={handleScoreChange(6)}
              onIDChange={handleIDChange(6)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <NameRowFillable
              player={players[13]}
              onNameChange={handleNameChange(13)}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[6]}
              onNameChange={handleNameChange(6)}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.xl00}>4</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <ScoreRowFillable
              player={players[14]}
              onScoreChange={handleScoreChange(14)}
              onIDChange={handleIDChange(14)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRowFillable
              player={players[7]}
              onScoreChange={handleScoreChange(7)}
              onIDChange={handleIDChange(7)}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <NameRowFillable
              player={players[11]}
              onNameChange={handleNameChange(11)}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRowFillable
              player={players[7]}
              onNameChange={handleNameChange(7)}
              playerNameStyle={playerNameStyle}
            />
            <td colSpan={8} style={{msoIgnore: 'colspan'}} />
          </tr>
        </tbody></table>
    </>
  );
}
