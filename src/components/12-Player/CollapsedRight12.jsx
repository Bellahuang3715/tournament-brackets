import React from 'react';
import styles from './stylesheet.module.css';

export default function CollapsedRight12({ players }) {
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={900} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '675pt'}}>
        <colgroup><col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={101} span={5} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} width={35} style={{height: '15.75pt', width: '26pt'}} />
            <td className={styles.xl83} width={35} style={{width: '26pt'}} />
            <td className={styles.xl82} width={35} style={{width: '26pt'}} />
            <td className={styles.xl82} width={35} style={{width: '26pt'}} />
            <td className={styles.xl82} width={35} style={{width: '26pt'}} />
            <td className={styles.xl65} width={57} style={{width: '43pt'}} />
            <td className={styles.xl66} width={163} style={{width: '122pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>{players[0].id}</td>
            <td rowSpan={2} className={styles.xl113} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl102} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl103}>1</td>
            <td colSpan={2} className={styles.xl118}>{`${players[0].name} (${players[0].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl104}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl86}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[1].id}</td>
            <td rowSpan={2} className={styles.xl72} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td rowSpan={2} className={styles.xl103}>5</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl106}>&nbsp;</td>
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[1].name} (${players[1].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl86}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[2].id}</td>
            <td rowSpan={2} className={styles.xl72} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[2].name} (${players[2].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td rowSpan={2} className={styles.xl103}>9</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl109}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>{players[3].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl102} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl103}>2</td>
            <td colSpan={2} className={styles.xl118}>{`${players[3].name} (${players[3].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl104}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl71}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[4].id}</td>
            <td rowSpan={2} className={styles.xl73} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl110}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl103}>6</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[4].name} (${players[4].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl103}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>{players[5].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl97}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl101} style={{height: '15.75pt'}}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl82}>11</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[5].name} (${players[5].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>{players[6].id}</td>
            <td rowSpan={2} className={styles.xl113} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl102} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl103}>3</td>
            <td colSpan={2} className={styles.xl118}>{`${players[6].name} (${players[6].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl104}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl86}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[7].id}</td>
            <td rowSpan={2} className={styles.xl72} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td rowSpan={2} className={styles.xl103}>7</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl92} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl83} />
            <td className={styles.xl106}>&nbsp;</td>
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[7].name} (${players[7].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl86}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[8].id}</td>
            <td rowSpan={2} className={styles.xl72} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl98}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[8].name} (${players[8].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl99}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl103}>10</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>{players[9].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl102} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl103}>4</td>
            <td colSpan={2} className={styles.xl118}>{`${players[9].name} (${players[9].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl104}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl71}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[10].id}</td>
            <td rowSpan={2} className={styles.xl73} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl110}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl103}>8</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[10].name} (${players[10].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl103}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>{players[11].id}</td>
            <td rowSpan={2} className={styles.xl114} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl97}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl83} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl118}>{`${players[11].name} (${players[11].club})`}</td>
          </tr>
        </tbody></table>
    </>
  );
}
