import React, { useState } from 'react';
import styles from '../stylesheet.module.css';

// map raw → circled
const CIRCLED = { M: 'Ⓜ', K: 'Ⓚ', D: 'Ⓓ', T: 'Ⓣ' };
const RAW = Object.fromEntries(Object.entries(CIRCLED).map(([k,v])=>[v,k]));
const ALLOWED = ['M','K','D','T'];

export default function Expanded({ players }) {
  const [scores, setScores] = useState([]);
  const [winnerID, setWinnerID] = useState([]);
  const [winnerName, setWinnerName] = useState([]);

  const handleScoreChange = i => e => {
    // 1) Remove all whitespace from what the user typed:
    const noSpaces = e.target.value.replace(/\s+/g, '')
  
    // 2) Take first char, map back to raw (in case it's already circled)
    let firstRaw = '';
    if (noSpaces.length > 0) {
      const c0 = noSpaces[0]
      firstRaw = RAW[c0] || c0.toUpperCase()
      if (!ALLOWED.includes(firstRaw)) firstRaw = ''
    }
  
    // 3) The rest, uppercase and filter
    const restRaw = Array.from(noSpaces.slice(1).toUpperCase())
      .filter(ch => ALLOWED.includes(ch))
      .join('')
  
    const raw = firstRaw + restRaw
  
    // 4) Store it
    setScores(ns => {
      const copy = [...ns]
      copy[i] = raw
      return copy
    })
  }

  const handleWinnerIDChange = i => e => {
    const v = e.target.value.toUpperCase() // or whatever filter you like
    setWinnerID(cs => {
      const c = [...cs]; c[i] = v; return c
    })
  }
  const handleWinnerNameChange = i => e => {
    setWinnerName(ls => {
      const l = [...ls]; l[i] = e.target.value; return l
    })
  }

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
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[0].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE (M, K, D, ...)"
                onChange={handleScoreChange(0)}
                value={
                  (scores[0] || '').length > 0
                    ? [
                      CIRCLED[scores[0][0]],
                      ...scores[0].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[0].name} (${players[0].club})`}</td>
            <td rowSpan={2} className={styles.xl00}>1</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[0]}
                onChange={handleWinnerIDChange(0)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="Ex. Ⓜ K"
                onChange={handleScoreChange(8)}
                value={
                  (scores[8] || '').length > 0
                    ? [
                      CIRCLED[scores[8][0]],
                      ...scores[8].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[1].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE (M, K, D, ...)"
                onChange={handleScoreChange(1)}
                value={
                  (scores[1] || '').length > 0
                    ? [
                      CIRCLED[scores[1][0]],
                      ...scores[1].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className="xl00" />
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Ex. John Doe (DOJO)"
                value={winnerName[0]}
                onChange={handleWinnerNameChange(0)}
              />
            </td>
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
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[1].name} (${players[1].club})`}</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>5</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[4]}
                onChange={handleWinnerIDChange(4)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(9)}
                value={
                  (scores[9] || '').length > 0
                    ? [
                      CIRCLED[scores[9][0]],
                      ...scores[9].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
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
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Name (Club)"
                value={winnerName[4]}
                onChange={handleWinnerNameChange(4)}
              />
            </td>
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[2].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(2)}
                value={
                  (scores[2] || '').length > 0
                    ? [
                      CIRCLED[scores[2][0]],
                      ...scores[2].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>            
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
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[2].name} (${players[2].club})`}</td>
            <td rowSpan={2} className={styles.xl00}>2</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[1]}
                onChange={handleWinnerIDChange(1)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(10)}
                value={
                  (scores[10] || '').length > 0
                    ? [
                      CIRCLED[scores[10][0]],
                      ...scores[10].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
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
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[3].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(3)}
                value={
                  (scores[3] || '').length > 0
                    ? [
                      CIRCLED[scores[3][0]],
                      ...scores[3].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>            
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Name (Club)"
                value={winnerName[1]}
                onChange={handleWinnerNameChange(1)}
              />
            </td>
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
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[3].name} (${players[3].club})`}</td>
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
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[6]}
                onChange={handleWinnerIDChange(6)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(11)}
                value={
                  (scores[11] || '').length > 0
                    ? [
                      CIRCLED[scores[11][0]],
                      ...scores[11].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
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
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[4].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(4)}
                value={
                  (scores[4] || '').length > 0
                    ? [
                      CIRCLED[scores[4][0]],
                      ...scores[4].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>            
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
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Name (Club)"
                value={winnerName[6]}
                onChange={handleWinnerNameChange(6)}
              />
            </td>
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
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[4].name} (${players[4].club})`}</td>
            <td rowSpan={2} className={styles.xl00}>3</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[2]}
                onChange={handleWinnerIDChange(2)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(12)}
                value={
                  (scores[12] || '').length > 0
                    ? [
                      CIRCLED[scores[12][0]],
                      ...scores[12].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
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
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[5].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(5)}
                value={
                  (scores[5] || '').length > 0
                    ? [
                      CIRCLED[scores[5][0]],
                      ...scores[5].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>            
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Name (Club)"
                value={winnerName[2]}
                onChange={handleWinnerNameChange(2)}
              />
            </td>
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
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[5].name} (${players[5].club})`}</td>
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
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[5]}
                onChange={handleWinnerIDChange(5)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(13)}
                value={
                  (scores[13] || '').length > 0
                    ? [
                      CIRCLED[scores[13][0]],
                      ...scores[13].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
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
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[6].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(6)}
                value={
                  (scores[6] || '').length > 0
                    ? [
                      CIRCLED[scores[6][0]],
                      ...scores[6].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Name (Club)"
                value={winnerName[5]}
                onChange={handleWinnerNameChange(5)}
              />
            </td>
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
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[6].name} (${players[6].club})`}</td>
            <td rowSpan={2} className={styles.xl00}>4</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td
              rowSpan={2}
              className={styles.playerID}
              style={{borderBottom:'.5pt solid black'}}
            >
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="ID"
                value={winnerID[3]}
                onChange={handleWinnerIDChange(3)}
              />
            </td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(14)}
                value={
                  (scores[14] || '').length > 0
                    ? [
                      CIRCLED[scores[14][0]],
                      ...scores[14].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[7].id}</td>
            <td rowSpan={2}
              className={styles.borderTopRight}
              style={{borderBottom: '.5pt solid black'}}>
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="SCORE"
                onChange={handleScoreChange(7)}
                value={
                  (scores[7] || '').length > 0
                    ? [
                      CIRCLED[scores[7][0]],
                      ...scores[7].slice(1).split('')
                    ].join(' ')
                  : ''
                }
              />
            </td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <td colSpan={2} className={styles.playerName}>
              <input
                type="text"
                className={styles.winnerNameInput}
                placeholder="Name (Club)"
                value={winnerName[3]}
                onChange={handleWinnerNameChange(3)}
              />
            </td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[7].name} (${players[7].club})`}</td>
            <td colSpan={8} style={{msoIgnore: 'colspan'}} />
          </tr>
        </tbody></table>
    </>
  );
}
