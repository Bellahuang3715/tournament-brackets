import { ScoreRow } from '../../ScoreRow';
import { NameRow } from '../../NameRow';
import styles from '../stylesheet.module.css';

export default function CollapsedLeft({
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
      <table border={0} cellPadding={0} cellSpacing={0} width={360} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '269pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
        </colgroup><tbody><tr height={20} style={{height: '15.75pt'}}>
            <td height={20} width={57} style={{height: '15.75pt', width: '43pt'}} />
            <td width={163} style={{width: '122pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td className="xl66" />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl84" />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[0]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl88" />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl88" />
            <td />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <NameRow
              player={players[0]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className="xl89">1</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl88" />
            <td />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl80" style={{height: '16.0pt'}}>&nbsp;</td>
            <td className="xl112">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl88" />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[1]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">3</td>
            <td className="xl98">&nbsp;</td>
            <td />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <NameRow
              player={players[1]}
              playerNameStyle={playerNameStyle}
            />
            <td className="xl84" />
            <td className="xl93">&nbsp;</td>
            <td />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl113" style={{height: '18.0pt'}} />
            <td className="xl114" />
            <td className="xl115" />
            <td className="xl89">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[2]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl84" />
            <td className="xl92">&nbsp;</td>
            <td className="xl75">&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl86" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td rowSpan={2} className="xl89">4</td>
            <td className="xl98">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[2]}
              playerNameStyle={playerNameStyle}
            />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl75">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[3]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[3]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className="xl89">2</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl92">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl80" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl112">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[4]}
              playerIDStyle={playerIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[4]}
              playerNameStyle={playerNameStyle}
            />
            <td />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          {/*[if supportMisalignedColumns]*/}
          <tr height={0} style={{display: 'none'}}>
            <td width={57} style={{width: '43pt'}} />
            <td width={163} style={{width: '122pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
          </tr>
          {/*[endif]*/}
        </tbody></table>
      
    </>
  );
}
