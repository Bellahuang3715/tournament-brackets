import { ExpandedBase, TEXT_STYLES } from '../../_internal/ExpandedBase';
import { NameRow } from '../../NameRow';
import { ScoreRow } from '../../ScoreRow';
import { ScoreRowFillable } from '../../ScoreRowFillable';
import { NameRowFillable } from '../../NameRowFillable';
import styles from '../stylesheet.module.css';

export default function Expanded(props) {
  const mergedTextStyles = {
    playerId:   { ...TEXT_STYLES.playerId,   ...(props.textStyles?.playerId ?? {}) },
    playerText: { ...TEXT_STYLES.playerText, ...(props.textStyles?.playerText ?? {}) },
  };

  const {
    players, mode,
    playerIDStyle, playerNameStyle,
    handleScoreChange, handleIDChange, handleNameChange
  } = ExpandedBase({
    initialPlayers: props.players,
    maxSlots: 3,
    mode: props.mode ?? "view",
    textStyles: mergedTextStyles,
  });

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
      playerIDStyle={playerIDStyle}
    /> :
    <ScoreRowFillable
      player={players[i]}
      onScoreChange={handleScoreChange(i)}
      onIDChange={handleIDChange(i)}
      playerIDStyle={playerIDStyle}
    />;

  return (
    <>
      <table className={styles.bracketTable} border={0} cellPadding={0} cellSpacing={0} width={1312}>
        <colgroup><col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '122pt'}} />
        </colgroup><tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(0)}
            <td className={styles.xl00} />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(0)}
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00} />
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {scoreRow(2)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            {nameRow(2)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(1)}
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(1)}
            <td />
          </tr>
        </tbody></table>      
    </>
  );
}
