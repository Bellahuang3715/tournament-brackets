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
      <table border={0} cellPadding={0} cellSpacing={0} width={1401} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '1051pt'}}>
        <colgroup><col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={35} span={6} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={101} style={{width: '76pt'}} />
          <col width={47} style={{msoWidthSource: 'userset', msoWidthAlt: 1493, width: '35pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={101} span={7} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl83" width={168} style={{height: '15.75pt', width: '126pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl85" width={35} style={{width: '26pt'}} />
            <td className="xl84" width={35} style={{width: '26pt'}} />
            <td className="xl85" width={35} style={{width: '26pt'}} />
            <td className="xl85" width={35} style={{width: '26pt'}} />
            <td className="xl66" width={35} style={{width: '26pt'}} />
            <td width={101} style={{width: '76pt'}} />
            <td className="xl66" width={47} style={{width: '35pt'}} />
            <td className="xl66" width={168} style={{width: '126pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
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
            <td className="xl85" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl88" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl65" style={{height: '16.0pt'}} />
            <td rowSpan={2} className="xl89">1</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl109" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">3</td>
            <td />
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl84" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl110">&nbsp;</td>
            <td className="xl85" />
            <td className="xl85" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl109" style={{height: '16.0pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl108">&nbsp;</td>
            <td className="xl92">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl93">&nbsp;</td>
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl66" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl93">&nbsp;</td>
            <td />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl66" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td rowSpan={2} className="xl89">5</td>
            <td className="xl98">&nbsp;</td>
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl93">&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl111" style={{height: '16.0pt'}} />
            <td rowSpan={2} className="xl89">2</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl112" style={{height: '16.0pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">4</td>
            <td className="xl99">&nbsp;</td>
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl84" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl88" />
            <td colSpan={6} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl114" style={{height: '18.0pt'}} />
            <td className="xl115" />
            <td className="xl89">&nbsp;</td>
            <td className="xl88" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
            <td className="xl84" />
            <td className="xl92">&nbsp;</td>
            <td className="xl88" />
            <td colSpan={6} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl86" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl88" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl83" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl88" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl83" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl88" />
            <td className="xl88" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl95" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl83" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl88" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl83" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl88" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl88" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl83" style={{height: '15.75pt'}} />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl77" style={{height: '15.75pt'}} />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl79" style={{height: '15.75pt'}} />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl83" style={{height: '15.75pt'}} />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl85" />
            <td className="xl66" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
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
