import React, { useState } from 'react';

import { NameRow } from '../../NameRow';
import { ScoreRow } from '../../ScoreRow';
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
  mode = "view", // "view" | "fillable"
}) {
  const maxSlots = 15;

  const nameRow = (i) => mode === "view" ? 
    <NameRow
      player={players[i]}
      playerNameStyle={playerNameStyle}
    /> : 
    <NameRowFillable
      player={players[i]}
      onNameChange={handleNameChange(i)}
      playerNameStyle={playerNameStyle}
    />;

  const scoreRow = (i) => mode === "view" ? 
    <ScoreRow
      player={players[i]}
      playerNameStyle={playerNameStyle}
    /> : 
    <ScoreRowFillable
      player={players[i]}
      onScoreChange={handleScoreChange(i)}
      onIDChange={handleIDChange(i)}
      playerIDStyle={playerIDStyle}
    />;

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
            {scoreRow(0)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            {nameRow(0)}
            <td rowSpan={2} className={styles.xl00}>1</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {scoreRow(8)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(1)}
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className="xl00" />
            {nameRow(8)}
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
            {nameRow(1)}
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>5</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {scoreRow(9)}
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
            {nameRow(12)}
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(2)}
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
            {nameRow(2)}
            <td rowSpan={2} className={styles.xl00}>2</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {scoreRow(10)}
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
            {scoreRow(3)}
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            {nameRow(9)}
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
            {nameRow(3)}
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
            {scoreRow(11)}
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
            {scoreRow(4)}
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
            {nameRow(14)}
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
            {nameRow(4)}
            <td rowSpan={2} className={styles.xl00}>3</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {scoreRow(12)}
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
            {scoreRow(5)}
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            {nameRow(10)}
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
            {nameRow(5)}
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
            {scoreRow(13)}
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
            {scoreRow(6)}
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            {nameRow(13)}
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
            {nameRow(6)}
            <td rowSpan={2} className={styles.xl00}>4</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {scoreRow(14)}
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(7)}
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            {nameRow(11)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(7)}
            <td colSpan={8} style={{msoIgnore: 'colspan'}} />
          </tr>
        </tbody></table>
    </>
  );
}
