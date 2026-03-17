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
      <table className={styles.bracketTable} border={0} cellPadding={0} cellSpacing={0} width={360}>
        <colgroup><col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
        </colgroup><tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <ScoreRow
              player={players[0]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTRL} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>1</td>
            <NameRow
              player={players[0]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <ScoreRow
              player={players[1]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>3</td>
            <td className={styles.xl01} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <NameRow
              player={players[1]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <ScoreRow
              player={players[4]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td rowSpan={2} className={styles.borderLeft}>4</td>
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <NameRow
              player={players[4]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <ScoreRow
              player={players[2]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTRL}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>2</td>
            <NameRow
              player={players[2]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL}>&nbsp;</td>
            <ScoreRow
              player={players[3]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <NameRow
              player={players[3]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
        </tbody></table>      
    </>
  );
}
