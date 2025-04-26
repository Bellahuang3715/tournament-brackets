import React from 'react';
import styles from './stylesheet.module.css';

export default function CollapsedRight11({ players }) {
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={1001} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '751pt'}}>
        <colgroup><col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={101} span={6} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} width={35} style={{height: '15.75pt', width: '26pt'}} />
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
            <td className={styles.xl66} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black'}}>{players[0].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td className={styles.xl101} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl102}>1</td>
            <td colSpan={2} className={styles.xl120}>{`${players[0].name} (${players[0].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl82} />
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl86}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl102}>&nbsp;</td>
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[1].id}</td>
            <td rowSpan={2} className={styles.xl122} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td rowSpan={2} className={styles.xl102}>4</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl106}>&nbsp;</td>
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl120}>{`${players[1].name} (${players[1].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl102}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl86}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[2].id}</td>
            <td rowSpan={2} className={styles.xl122} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl120}>{`${players[2].name} (${players[2].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td rowSpan={2} className={styles.xl102}>8</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl109}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black'}}>{players[3].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl101} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl102}>2</td>
            <td colSpan={2} className={styles.xl120}>{`${players[3].name} (${players[3].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl71}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl102}>&nbsp;</td>
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[4].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl111}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl102}>5</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl120}>{`${players[4].name} (${players[4].club})`}</td>
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className={styles.xl66} style={{height: '18.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl102}>&nbsp;</td>
          </tr>
          <tr height={21} style={{msoHeightSource: 'userset', height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black'}}>{players[5].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl97}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl71} style={{height: '16.0pt'}}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl102}>10</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl120}>{`${players[5].name} (${players[5].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
          </tr>
          <tr height={21} style={{msoHeightSource: 'userset', height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl84}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black'}}>{players[6].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl101} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl102}>3</td>
            <td colSpan={2} className={styles.xl120}>{`${players[6].name} (${players[6].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl103}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl71}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td className={styles.xl112}>&nbsp;</td>
            <td className={styles.xl87}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[7].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl88} />
            <td rowSpan={2} className={styles.xl102}>6</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl106}>&nbsp;</td>
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl120}>{`${players[7].name} (${players[7].club})`}</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl104}>&nbsp;</td>
            <td className={styles.xl102}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl110}>&nbsp;</td>
            <td className={styles.xl104}>&nbsp;</td>
            <td className={styles.xl108}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black'}}>{players[8].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl113}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl102}>9</td>
            <td className={styles.xl82} />
            <td className={styles.xl97}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td colSpan={2} className={styles.xl120}>{`${players[8].name} (${players[8].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black'}}>{players[9].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl107}>&nbsp;</td>
            <td className={styles.xl82} />
            <td className={styles.xl101}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl111}>&nbsp;</td>
            <td className={styles.xl82} />
            <td rowSpan={2} className={styles.xl102}>7</td>
            <td colSpan={2} className={styles.xl120}>{`${players[9].name} (${players[9].club})`}</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl97}>&nbsp;</td>
            <td className={styles.xl68}>&nbsp;</td>
            <td className={styles.xl71}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl105}>&nbsp;</td>
            <td rowSpan={2} className={styles.xl118} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>{players[10].id}</td>
            <td rowSpan={2} className={styles.xl116} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl66} style={{height: '15.75pt'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl66} style={{height: '16.0pt'}} />
            <td className={styles.xl83} />
            <td className={styles.xl88} />
            <td className={styles.xl82} />
            <td className={styles.xl82} />
            <td colSpan={2} className={styles.xl120}>{`${players[10].name} (${players[10].club})`}</td>
          </tr>
        </tbody></table>
    </>
  );
}
