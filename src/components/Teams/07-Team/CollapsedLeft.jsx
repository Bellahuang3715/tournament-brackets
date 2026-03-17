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
      <table className={styles.bracketTable} border={0} cellPadding={0} cellSpacing={0}>
        <colgroup>
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={6} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
        </colgroup><tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[0]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td rowSpan={2} className={styles.borderRight}>1</td>
            <td className={styles.borderBottomLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl00} style={{height: '16.0pt'}} />
            <td className={styles.borderTopRight} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[1]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderLeft} style={{height: '15.75pt', borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>4</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl00} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[2]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTopRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td rowSpan={2} className={styles.borderRight}>2</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl00} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[3]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.xl01}>6</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl00} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[4]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTopRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td rowSpan={2} className={styles.borderRight}>3</td>
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl00} style={{height: '16.0pt'}} />
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[5]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.borderRight}>5</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} colSpan={2} style={{height: '16.0pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[6]}
              teamStyle={teamIDStyle}
            />
            <td className={styles.xl01} />
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderTop} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td />
          </tr>
        </tbody></table>      
    </>
  );
}
