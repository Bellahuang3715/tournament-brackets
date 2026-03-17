import { Team } from '../../Team';
import styles from '../stylesheet.module.css';

export default function CollapsedLeft({
  teams,
  teamIDFontFamily,
  teamIDColor,
  teamIDFontSize,
}) {
  const teamIDStyle = {
    fontFamily: teamIDFontFamily,
    color:      teamIDColor,
    fontSize:   teamIDFontSize ? `${teamIDFontSize}pt` : undefined,
  };
  return (
    <>
      <table className={styles.bracketTable} border={0} cellPadding={0} cellSpacing={0} width={944}>
        <colgroup><col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
        </colgroup><tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[0]}
              teamIDStyle={teamIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>1</td>
            <td className={styles.borderBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[1]}
              teamIDStyle={teamIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>8</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[2]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>2</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[3]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>12</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[4]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>3</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[5]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>9</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[6]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>4</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[7]}
              teamIDStyle={teamIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td rowSpan={2} className={styles.borderRight}>14</td>
            <td className={styles.borderBottomLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[8]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>5</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[9]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>10</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[10]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>6</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[11]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>13</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[12]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderRight}>7</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[13]}
              teamIDStyle={teamIDStyle}
            />
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
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>11</td>
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[14]}
              teamIDStyle={teamIDStyle}
            />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
        </tbody></table>      
    </>
  );
}
