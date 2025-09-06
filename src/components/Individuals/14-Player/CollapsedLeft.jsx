import { ScoreRow } from '../../ScoreRow';
import { NameRow } from '../../NameRow';
import styles from '../stylesheet.module.css';

export default function CollapsedLeft({
  players,
  fontFamily = 'Arial, sans-serif',
  playerIDFontSize = 11,
  playerNameFontSize = 11,
}) {
  const playerIDStyle = {
    fontSize:  `${playerIDFontSize}pt`,
    fontFamily,
  };
  const playerNameStyle = {
    fontSize:  `${playerNameFontSize}pt`,
    fontFamily,
  };
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={1001} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: 'fit-content', maxWidth: '100%'}}>
        <colgroup>
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
        </colgroup>
        <tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 1 Top Player | Index 0 */}
            <ScoreRow
              player={players[0]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[0]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>1</td>
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 1 Bottom Player | Index  */}
            <ScoreRow
              player={players[1]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[1]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>7</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderTopRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 2 Top Player | Index  */}
            <ScoreRow
              player={players[2]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[2]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>2</td>
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 2 Bottom Player | Index  */}
            <ScoreRow
              player={players[3]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[3]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>11</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTopRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 3 Top Player | Index  */}
            <ScoreRow
              player={players[4]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[4]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>3</td>
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 3 Bottom Player | Index  */}
            <ScoreRow
              player={players[5]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>8</td>
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[5]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 8 Bottom Player | Index  */}
            <ScoreRow
              player={players[12]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.borderRightBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[12]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.xl01}>13</td>
            <td className={styles.borderBottomLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 4 Top Player | Index  */}
            <ScoreRow
              player={players[6]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[6]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>4</td>
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 4 Bottom Player | Index  */}
            <ScoreRow
              player={players[7]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[7]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>9</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderTopRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 5 Top Player | Index  */}
            <ScoreRow
              player={players[8]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[8]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>5</td>
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 5 Bottom Player | Index  */}
            <ScoreRow
              player={players[9]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[9]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>12</td>
            <td className={styles.borderRightBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 6 Top Player | Index  */}
            <ScoreRow
              player={players[10]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[10]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>6</td>
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td className={styles.borderBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 6 Bottom Player | Index  */}
            <ScoreRow
              player={players[11]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>10</td>
            <td className={styles.borderRightBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[11]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {/* Round 10 Bottom Player | Index  */}
            <ScoreRow
              player={players[13]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.borderRightBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <NameRow
              player={players[13]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
        </tbody></table>
    </>
  );
}
