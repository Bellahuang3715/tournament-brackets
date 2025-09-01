import React from 'react';

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
      <table border={0} cellPadding={0} cellSpacing={0} width={1001} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '751pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={101} span={6} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{height: '15.75pt'}}>
            <td height={20} width={57} style={{height: '15.75pt', width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[4]}
              playerIDStyle={playerIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTopRight} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[4]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>3</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[5]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderLeft} style={{height: '15.75pt', borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[5]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>7</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[0]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[0]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>1</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[1]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>4</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[1]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[6]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>9</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[6]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[7]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTopRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[7]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>5</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[8]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderLeft} style={{height: '15.75pt', borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[8]}
              playerNameStyle={playerNameStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>8</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[2]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[2]}
              playerNameStyle={playerNameStyle}
            />
            <td rowSpan={2} className={styles.borderRight}>2</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[3]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>6</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[3]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <ScoreRow
              player={players[9]}
              playerIDStyle={playerIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <NameRow
              player={players[9]}
              playerNameStyle={playerNameStyle}
            />
          </tr>
        </tbody></table>
    </>
  );
}
