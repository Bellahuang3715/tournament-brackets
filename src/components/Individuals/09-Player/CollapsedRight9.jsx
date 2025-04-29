import React from 'react';
import styles from '../stylesheet.module.css';

export default function CollapsedRight9({ players }) {
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={1102} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '827pt'}}>
        <colgroup><col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={101} span={7} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} width={35} style={{height: '16.0pt', width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={57} style={{width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[0].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>2</td>
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[0].name} (${players[0].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRBL}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[1].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>6</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[1].name} (${players[1].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[2].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.borderLeft}>3</td>
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[2].name} (${players[2].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[3].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[3].name} (${players[3].club})`}</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td rowSpan={2} className={styles.borderLeft}>8</td>
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className={styles.xl01} style={{height: '18.0pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[4].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTopLeft}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>4</td>
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[4].name} (${players[4].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderTopLeft}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRBL}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[5].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className={styles.xl01} style={{height: '18.0pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[5].name} (${players[5].club})`}</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} className={styles.xl00} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.borderLeft}>7</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[6].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTRL} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderLeft}>1</td>
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[6].name} (${players[6].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderTopLeft}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.borderRBL}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[7].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.borderLeft}>5</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[7].name} (${players[7].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerID} style={{borderBottom: '.5pt solid black'}}>{players[8].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.playerName} colSpan={2} style={{msoIgnore: 'colspan'}}>{`${players[8].name} (${players[8].club})`}</td>
          </tr>
        </tbody></table>
    </>
  );
}
