import { Team } from '../../Team';
import styles from '../stylesheet.module.css';

export default function CollapsedRight({
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
      <table border={0} cellPadding={0} cellSpacing={0} width={944} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: 'fit-content', maxWidth: '100%'}}>
        <colgroup>
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
        </colgroup>
        <tbody>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <Team
              team={teams[0]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td rowSpan={2} className={styles.xl01}>1</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderTRL} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft} />
            <td className={styles.borderRightBottom} />
            <Team
              team={teams[1]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <td rowSpan={2} className={styles.borderLeft}>9</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderBottom} />
            <Team
              team={teams[2]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL} />
            <td rowSpan={2} className={styles.xl01}>2</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRightBottom} />
            <Team
              team={teams[3]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightBottom} />
            <td rowSpan={2} className={styles.xl01}>13</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderTRL} style={{borderTop: 'none'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <Team
              team={teams[4]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <td rowSpan={2} className={styles.borderLeft}>3</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRBL} />
            <Team
              team={teams[5]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRightLeft} />
            <td />
            <td className={styles.borderTopRight} style={{borderTop: 'none'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRBL} />
            <td rowSpan={2} className={styles.xl01} align="right">10</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRightBottom} />
            <Team
              team={teams[6]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderTRL} style={{borderTop: 'none'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderBottomLeft} />
            <td rowSpan={2} className={styles.borderLeft}>4</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL} />
            <Team
              team={teams[7]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}} />
            <td rowSpan={2} className={styles.borderLeft}>15</td>
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td rowSpan={2} className={styles.xl01} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <Team
              team={teams[8]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td rowSpan={2} className={styles.xl01}>5</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderTRL} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft} />
            <td className={styles.borderRightBottom} />
            <Team
              team={teams[9]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderLeft} />
            <td className={styles.borderBottom} />
            <td rowSpan={2} className={styles.borderLeft}>11</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderBottom} />
            <Team
              team={teams[10]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL} />
            <td rowSpan={2} className={styles.xl01}>6</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRightBottom} />
            <Team
              team={teams[11]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRightLeft} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRBL} />
            <td rowSpan={2} className={styles.xl01}>14</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <Team
              team={teams[12]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.borderRight} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
            <td rowSpan={2} className={styles.borderLeft}>7</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRBL} />
            <Team
              team={teams[13]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRightLeft} />
            <td />
            <td className={styles.borderTopRight} style={{borderTop: 'none'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL} />
            <td rowSpan={2} className={styles.borderLeft} align="right">12</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderRightBottom} />
            <Team
              team={teams[14]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderLeft} />
            <td className={styles.borderTRL} style={{borderTop: 'none'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottomLeft} />
            <td rowSpan={2} className={styles.borderLeft}>8</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderBottom} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRBL} />
            <Team
              team={teams[15]}
              teamStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight} />
          </tr>
        </tbody></table>
    </>
  );
}
