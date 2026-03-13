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
    maxSlots: 13,
    mode: "view",
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
      <table border={0} cellPadding={0} cellSpacing={0} width={1918} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '1440pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={101} span={8} style={{width: '76pt'}} />
        </colgroup><tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(0)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl68" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(0)}
            <td rowSpan={2} className="xl65">1</td>
            <td className="xl71">&nbsp;</td>
            {scoreRow(1)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl72" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl73">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(2)}
            <td className="xl74">&nbsp;</td>
            <td className="xl66" />
            {nameRow(1)}
            <td className="xl75">&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl76" style={{height: '15.75pt', borderLeft: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl75">&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(2)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td rowSpan={2} className="xl65">4</td>
            <td className="xl71">&nbsp;</td>
            {scoreRow(3)}
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl72" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl78">&nbsp;</td>
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td />
            <td className="xl69">&nbsp;</td>
            {nameRow(3)}
            <td />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(4)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl68" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(4)}
            <td rowSpan={2} className="xl65">2</td>
            <td className="xl71">&nbsp;</td>
            {scoreRow(5)}
            <td className="xl80">&nbsp;</td>
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl72" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(6)}
            <td className="xl81">&nbsp;</td>
            <td className="xl66" />
            {nameRow(5)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl68" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(6)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td rowSpan={2} className="xl65">6</td>
            <td className="xl71">&nbsp;</td>
            {scoreRow(7)}
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl72" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(8)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl75">&nbsp;</td>
            <td />
            {nameRow(7)}
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl68" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl75">&nbsp;</td>
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(8)}
            <td rowSpan={2} className="xl65">3</td>
            <td className="xl71">&nbsp;</td>
            {scoreRow(9)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl75">&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl72" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl73">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {scoreRow(10)}
            <td className="xl75">&nbsp;</td>
            <td />
            {nameRow(9)}
            <td className="xl75">&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl68" style={{height: '15.75pt'}}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className="xl75">&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {nameRow(10)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl75">&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td rowSpan={2} className="xl65">5</td>
            <td className="xl71">&nbsp;</td>
            {scoreRow(11)}
            <td className="xl66" />
            <td className="xl69">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl72" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl78">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl81">&nbsp;</td>
            <td />
            {nameRow(11)}
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl81">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            {scoreRow(12)}
            <td className="xl74">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl65" />
            <td className="xl66" />
            {nameRow(12)}
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className="xl77" style={{height: '15.75pt'}} />
            <td colSpan={8} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td colSpan={2} height={20} className="xl82" style={{height: '15.75pt'}} />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl65" />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={12} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={11} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={11} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={11} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={7} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl65" />
            <td className="xl65" />
            <td className="xl65" />
            <td className="xl65" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
        </tbody></table>      
    </>
  );
}
