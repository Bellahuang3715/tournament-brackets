import { ExpandedBase, TEXT_STYLES } from '../../_internal/ExpandedBase';
import { useAdvanceExpandedRows } from '../../_internal/useAdvanceExpandedRows';
import styles from '../stylesheet.module.css';

/** Feeder match → next-round slot (08-player expanded bracket). */
const ADVANCE_MATCHES = [
  { to: 8, from: [0, 1] },
  { to: 9, from: [2, 3] },
  { to: 10, from: [4, 5] },
  { to: 11, from: [6, 7] },
  { to: 12, from: [8, 9] },
  { to: 13, from: [10, 11] },
  { to: 14, from: [12, 13] },
];

export default function Expanded(props) {
  const mergedTextStyles = {
    playerId:   { ...TEXT_STYLES.playerId,   ...(props.textStyles?.playerId ?? {}) },
    playerText: { ...TEXT_STYLES.playerText, ...(props.textStyles?.playerText ?? {}) },
  };

  const {
    players, mode,
    playerIDStyle, playerNameStyle,
    handleScoreChange, handleIDChange, handleNameChange,
    setAdvanceSlot,
    clearPlayerSlot,
  } = ExpandedBase({
    initialPlayers: props.players,
    maxSlots: 15,
    mode: props.mode ?? "view", // "view" | "fillable"
    textStyles: mergedTextStyles,
    scoreInputTransform: props.scoreInputTransform,
    onPlayersChange: props.onPlayersChange,
  });

  const { nameRow, scoreRow } = useAdvanceExpandedRows({
    players,
    mode,
    playerIDStyle,
    playerNameStyle,
    handleScoreChange,
    handleIDChange,
    handleNameChange,
    setAdvanceSlot,
    clearPlayerSlot,
    advanceMatches: ADVANCE_MATCHES,
    formatScoreDisplay: props.formatScoreDisplay,
  });

  return (
    <>
      <table className={styles.bracketTable} border={0} cellPadding={0} cellSpacing={0} width={1892}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={47} style={{msoWidthSource: 'userset', msoWidthAlt: 1493, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '122pt'}} />
        </colgroup><tbody>
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
            <td className={styles.xl00} />
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
            {scoreRow(12)}
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
            {scoreRow(9)}
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
            {scoreRow(14)}
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
            {scoreRow(10)}
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
            {scoreRow(11)}
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
