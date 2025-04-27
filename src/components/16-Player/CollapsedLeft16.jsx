import React from 'react';
import styles from './stylesheet.module.css';

export default function CollapsedLeft16({ players }) {
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={1001} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '751pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={101} span={6} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl65} width={57} style={{height: '15.75pt', width: '43pt'}} />
            <td className={styles.xl66} width={163} style={{width: '122pt'}} />
            <td className={styles.xl84} width={35} style={{width: '26pt'}} />
            <td className={styles.xl84} width={35} style={{width: '26pt'}} />
            <td className={styles.xl84} width={35} style={{width: '26pt'}} />
            <td className={styles.xl85} width={35} style={{width: '26pt'}} />
            <td className={styles.xl86} width={35} style={{width: '26pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[0].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl87}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl88} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[0].name} (${players[0].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>1</td>
            <td className={styles.xl87}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[1].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl84} style={{height: '15.75pt'}} />
            <td className={styles.xl88}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[1].name} (${players[1].club})`}</td>
            <td className={styles.xl84} />
            <td rowSpan={2} className={styles.xl88}>9</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl90}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[2].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl91}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl93}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[2].name} (${players[2].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>2</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl76} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[3].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl94}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[3].name} (${players[3].club})`}</td>
            <td className={styles.xl84} />
            <td className={styles.xl84} />
            <td rowSpan={2} className={styles.xl88}>13</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl65} style={{height: '15.75pt'}} />
            <td className={styles.xl66} />
            <td className={styles.xl84} />
            <td className={styles.xl84} />
            <td className={styles.xl90}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[4].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl88} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[4].name} (${players[4].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>3</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[5].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl84} style={{height: '15.75pt'}} />
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[5].name} (${players[5].club})`}</td>
            <td className={styles.xl84} />
            <td rowSpan={2} className={styles.xl88}>10</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl95}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[6].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl91}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl85} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl93}>&nbsp;</td>
            <td className={styles.xl85} />
            <td className={styles.xl84} />
            <td className={styles.xl96}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[6].name} (${players[6].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>4</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td />
            <td className={styles.xl73}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl76} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td />
            <td className={styles.xl73}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[7].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl94}>&nbsp;</td>
            <td className={styles.xl84} />
            <td />
            <td className={styles.xl73}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl84} />
            <td />
            <td className={styles.xl73}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[7].name} (${players[7].club})`}</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td rowSpan={2} className={styles.xl88}>15</td>
            <td className={styles.xl97} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={5} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[8].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl88} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl96} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[8].name} (${players[8].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>5</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl96} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl96} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[9].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl85} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl96} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl84} style={{height: '15.75pt'}} />
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl85} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[9].name} (${players[9].club})`}</td>
            <td className={styles.xl84} />
            <td rowSpan={2} className={styles.xl88}>11</td>
            <td className={styles.xl85} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl90}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[10].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl91}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl93}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[10].name} (${players[10].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>6</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl76} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[11].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl94}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[11].name} (${players[11].club})`}</td>
            <td className={styles.xl84} />
            <td className={styles.xl84} />
            <td rowSpan={2} className={styles.xl88}>14</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl65} style={{height: '15.75pt'}} />
            <td className={styles.xl66} />
            <td className={styles.xl84} />
            <td className={styles.xl84} />
            <td className={styles.xl95}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt'}}>{players[12].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl88}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl88} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[12].name} (${players[12].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>7</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[13].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl84} style={{height: '15.75pt'}} />
            <td className={styles.xl88}>&nbsp;</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[13].name} (${players[13].club})`}</td>
            <td className={styles.xl84} />
            <td rowSpan={2} className={styles.xl88}>12</td>
            <td className={styles.xl92}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl68} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td className={styles.xl95}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[14].id}</td>
            <td rowSpan={2} className={styles.xl112} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl91}>&nbsp;</td>
            <td className={styles.xl88}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl93}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[14].name} (${players[14].club})`}</td>
            <td rowSpan={2} className={styles.xl88}>8</td>
            <td className={styles.xl89}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl76} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl76}>&nbsp;</td>
            <td className={styles.xl84} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td rowSpan={2} height={40} className={styles.xl118} style={{borderBottom: '.5pt solid black', height: '31.5pt', borderTop: 'none'}}>{players[15].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
            <td className={styles.xl94}>&nbsp;</td>
            <td className={styles.xl84} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl85} style={{height: '15.75pt'}} />
            <td className={styles.xl84} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl121} style={{height: '15.75pt'}}>{`${players[15].name} (${players[15].club})`}</td>
          </tr>
        </tbody></table>
    </>
  );
}
