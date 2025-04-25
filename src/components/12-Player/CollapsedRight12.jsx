import React from 'react';
import styles from './stylesheet.module.css';

export default function CollapsedRight12({ players }) {
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={395} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '295pt'}}>
        <colgroup><col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} width={35} style={{height: '15.0pt', width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.borderBottom} width={57} style={{width: '43pt'}}>&nbsp;</td>
            <td className={styles.borderBottom} width={163} style={{width: '122pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[0].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>1</td>
            <td colSpan={2} className={styles.playerName}>{`${players[0].name} (${players[0].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[1].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>5</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[1].name} (${players[1].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[2].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[2].name} (${players[2].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>9</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[3].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>2</td>
            <td colSpan={2} className={styles.playerName}>{`${players[3].name} (${players[3].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[4].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>6</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[4].name} (${players[4].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[5].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRightBottom} style={{height: '15.0pt'}}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>11</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[5].name} (${players[5].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[6].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>3</td>
            <td colSpan={2} className={styles.playerName}>{`${players[6].name} (${players[6].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[7].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>7</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[7].name} (${players[7].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[8].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[8].name} (${players[8].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.0pt'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>10</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[9].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>4</td>
            <td colSpan={2} className={styles.playerName}>{`${players[9].name} (${players[9].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[10].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl01}>8</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerName}>{`${players[10].name} (${players[10].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[11].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.0pt'}}>
            <td height={20} colSpan={5} style={{height: '15.0pt', msoIgnore: 'colspan'}} />
            <td colSpan={2} className={styles.playerName}>{`${players[11].name} (${players[11].club})`}</td>
          </tr>
          {/*[if supportMisalignedColumns]*/}
          <tr height={0} style={{display: 'none'}}>
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={57} style={{width: '43pt'}} />
            <td width={163} style={{width: '122pt'}} />
          </tr>
        </tbody></table>
    </>
  );
}
