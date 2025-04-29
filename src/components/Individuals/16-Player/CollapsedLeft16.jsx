import React from 'react';
import styles from '../stylesheet.module.css';

export default function CollapsedLeft16({ players }) {
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={1001} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '751pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={101} span={6} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} width={57} style={{height: '15.75pt', width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl01} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[0].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[0].name} (${players[0].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>1</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[1].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[1].name} (${players[1].club})`}</td>
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>9</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[2].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[2].name} (${players[2].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>2</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[3].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[3].name} (${players[3].club})`}</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>13</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[4].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[4].name} (${players[4].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>3</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[5].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[5].name} (${players[5].club})`}</td>
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>10</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[6].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[6].name} (${players[6].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>4</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[7].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[7].name} (${players[7].club})`}</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td rowSpan={2} className={styles.borderRight}>15</td>
            <td className={styles.borderBottomLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={5} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[8].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[8].name} (${players[8].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>5</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[9].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[9].name} (${players[9].club})`}</td>
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>11</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[10].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[10].name} (${players[10].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>6</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[11].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[11].name} (${players[11].club})`}</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>14</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[12].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[12].name} (${players[12].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>7</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[13].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[13].name} (${players[13].club})`}</td>
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>12</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[14].id}</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[14].name} (${players[14].club})`}</td>
            <td rowSpan={2} className={styles.borderRight}>8</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.playerID} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[15].id}</td>
            <td rowSpan={2} className={styles.borderRight} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.playerName} style={{height: '15.75pt'}}>{`${players[15].name} (${players[15].club})`}</td>
          </tr>
        </tbody></table>
    </>
  );
}
