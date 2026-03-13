import { ScoreRow } from '../../ScoreRow';
import { NameRow } from '../../NameRow';
import styles from '../stylesheet.module.css';

export default function CollapsedRight({
  players,
  textStyles = {
    playerId:   { fontFamily: "Arial, sans-serif", fontSize: 11, color: "#000" },
    playerText: { fontFamily: "Arial, sans-serif", fontSize: 11, color: "#000" },
  },
}) {
  const playerIDStyle = {
    fontFamily: textStyles.playerId.fontFamily,
    fontSize: `${textStyles.playerId.fontSize}pt`,
    color: textStyles.playerId.color,
  };

  const playerNameStyle = {
    fontFamily: textStyles.playerText.fontFamily,
    fontSize: `${textStyles.playerText.fontSize}pt`,
    color: textStyles.playerText.color,
  };

  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={1072} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '805pt'}}>
        <colgroup><col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={101} span={7} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" width={35} style={{height: '15.75pt', width: '26pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl85" width={35} style={{width: '26pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl65" width={57} style={{width: '43pt'}} />
            <td className="xl83" width={168} style={{width: '126pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <ScoreRow
              player={players[0]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl100">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td rowSpan={2} className="xl94">1</td>
            <NameRow
              player={players[0]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl100">&nbsp;</td>
            <td className="xl80">&nbsp;</td>
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl102">&nbsp;</td>
            <td className="xl103">&nbsp;</td>
            <ScoreRow
              player={players[1]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td rowSpan={2} className="xl94">4</td>
            <td className="xl84" />
            <NameRow
              player={players[1]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl97">&nbsp;</td>
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl94">&nbsp;</td>
            <td className="xl84" />
            <ScoreRow
              player={players[2]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl94">&nbsp;</td>
            <td className="xl104">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl105">&nbsp;</td>
            <td rowSpan={2} className="xl94">2</td>
            <NameRow
              player={players[2]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl84" />
            <td className="xl80">&nbsp;</td>
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl84" />
            <td className="xl103">&nbsp;</td>
            <ScoreRow
              player={players[3]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl84" />
            <td className="xl86" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <NameRow
              player={players[3]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl98" style={{height: '16.0pt'}}>&nbsp;</td>
            <td rowSpan={2} className="xl94">6</td>
            <td className="xl84" />
            <td className="xl88" />
            <td />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl88" />
            <td />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <ScoreRow
              player={players[4]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl104">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl88" style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td rowSpan={2} className="xl94">3</td>
            <NameRow
              player={players[4]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl100">&nbsp;</td>
            <td className="xl80">&nbsp;</td>
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl102">&nbsp;</td>
            <td className="xl106">&nbsp;</td>
            <ScoreRow
              player={players[5]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl102">&nbsp;</td>
            <td className="xl86" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl87">&nbsp;</td>
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <NameRow
              player={players[5]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl90">&nbsp;</td>
            <td rowSpan={2} className="xl94">5</td>
            <td className="xl88" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl94">&nbsp;</td>
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl94">&nbsp;</td>
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl107">&nbsp;</td>
            <td className="xl88" />
            <ScoreRow
              player={players[6]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl86">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl65" />
            <NameRow
              player={players[6]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl65" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl77" />
            <td className="xl77" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl83" />
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
