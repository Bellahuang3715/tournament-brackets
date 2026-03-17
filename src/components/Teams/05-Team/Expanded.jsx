import { TeamsBase } from '../../_internal/TeamsBase';
import { Team } from '../../Team';
import { TeamFillable } from '../../TeamFillable';
import styles from '../stylesheet.module.css';

export default function Expanded(props) {
  const {
    teams, mode,
    teamIDStyle, handleTeamChange,
  } = TeamsBase({
    initialTeams: props.teams,
    maxSlots: 9,
    mode: "view",
    teamIDFontFamily: props.teamIDFontFamily,
    teamIDColor: props.teamIDColor,
    teamIDFontSize: props.teamIDFontSize,
  });

  const team = (i) => mode === "view" ?
    <Team
      team={teams[i]}
      teamIDStyle={teamIDStyle}
    /> :
    <TeamFillable
      team={teams[i]}
      onTeamChange={handleTeamChange(i)}
      teamIDStyle={teamIDStyle}
    />;

  return (
    <>
      <table className={styles.bracketTable} border={0} cellPadding={0} cellSpacing={0} width={1690}>
        <colgroup><col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
        </colgroup><tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {team(0)}
            <td className={styles.borderBottom}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td rowSpan={2} className={styles.borderRight}>1</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            {team(1)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            {team(2)}
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.xl00}>3</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {team(3)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl01} style={{height: '16.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            {team(4)}
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className={styles.xl00} style={{height: '16.0pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>4</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {team(5)}
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            {team(6)}
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} colSpan={3} style={{height: '16.0pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.xl00}>2</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            {team(7)}
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td />
            <td className={styles.xl00} />
            {team(8)}
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
        </tbody></table>      
    </>
  );
}
