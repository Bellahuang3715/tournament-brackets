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
      <table border={0} cellPadding={0} cellSpacing={0} width={360} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '269pt'}}>
        <colgroup><col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
        </colgroup><tbody><tr height={20} style={{height: '15.75pt'}}>
            <td height={20} width={35} style={{height: '15.75pt', width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={57} style={{width: '43pt'}} />
            <td width={163} style={{width: '122pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl65" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl108">&nbsp;</td>
            <ScoreRow
              player={players[0]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl104" style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td rowSpan={2} className="xl94">1</td>
            <NameRow
              player={players[0]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl100">&nbsp;</td>
            <td className="xl80">&nbsp;</td>
            <td className="xl112">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl121">&nbsp;</td>
            <td className="xl92">&nbsp;</td>
            <ScoreRow
              player={players[1]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td rowSpan={2} className="xl94">3</td>
            <td className="xl84" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl116">&nbsp;</td>
            <td className="xl84" />
            <NameRow
              player={players[1]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl101">&nbsp;</td>
            <td className="xl94">&nbsp;</td>
            <td className="xl115" />
            <td className="xl113" />
            <td className="xl114" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl101">&nbsp;</td>
            <td className="xl105">&nbsp;</td>
            <td className="xl84" />
            <ScoreRow
              player={players[2]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl109" style={{height: '15.75pt'}}>&nbsp;</td>
            <td rowSpan={2} className="xl94">4</td>
            <td className="xl84" />
            <td className="xl86">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <NameRow
              player={players[2]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <ScoreRow
              player={players[3]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl104">&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl107">&nbsp;</td>
            <td className="xl84" />
            <td rowSpan={2} className="xl94">2</td>
            <NameRow
              player={players[3]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl86">&nbsp;</td>
            <td className="xl80">&nbsp;</td>
            <td className="xl112">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl103">&nbsp;</td>
            <ScoreRow
              player={players[4]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl84" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl84" />
            <NameRow
              player={players[4]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          {/*[if supportMisalignedColumns]*/}
          <tr height={0} style={{display: 'none'}}>
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={57} style={{width: '43pt'}} />
            <td width={163} style={{width: '122pt'}} />
          </tr>
          {/*[endif]*/}
        </tbody></table>
      
    </>
  );
}
