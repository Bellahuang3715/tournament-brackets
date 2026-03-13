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
      <table border={0} cellPadding={0} cellSpacing={0} width={944} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '708pt'}}>
        <colgroup><col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={5} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={101} span={6} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" width={163} style={{height: '15.75pt', width: '122pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl85" width={35} style={{width: '26pt'}} />
            <td className="xl126" width={35} style={{width: '26pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[0]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">1</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[1]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">8</td>
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl127">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[2]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl98">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl121">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">2</td>
            <td className="xl92">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[3]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl129">&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">12</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl127">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[4]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">3</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[5]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">9</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl96">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[6]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl98">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl121">&nbsp;</td>
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl130">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">4</td>
            <td className="xl92">&nbsp;</td>
            <td />
            <td className="xl75">&nbsp;</td>
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td />
            <td className="xl75">&nbsp;</td>
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[7]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl129">&nbsp;</td>
            <td className="xl84" />
            <td />
            <td className="xl75">&nbsp;</td>
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td />
            <td className="xl75">&nbsp;</td>
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td rowSpan={2} className="xl89">14</td>
            <td className="xl131" style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[8]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl130" style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">5</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl130" style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl130" style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[9]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl128">&nbsp;</td>
            <td className="xl130" style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">10</td>
            <td className="xl85" />
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl127">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[10]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl98">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl121">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">6</td>
            <td className="xl92">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[11]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl129">&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">13</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl96">&nbsp;</td>
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[12]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl65" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">7</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[13]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl89">&nbsp;</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">11</td>
            <td className="xl128">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl96">&nbsp;</td>
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[14]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl92">&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl66" style={{height: '18.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl126" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
        </tbody></table>      
    </>
  );
}
