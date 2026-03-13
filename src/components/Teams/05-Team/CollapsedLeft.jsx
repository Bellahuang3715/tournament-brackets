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
      <table border={0} cellPadding={0} cellSpacing={0} width={303} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '226pt'}}>
        <colgroup><col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
        </colgroup><tbody><tr height={20} style={{height: '15.75pt'}}>
            <td height={20} width={163} style={{height: '15.75pt', width: '122pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl66" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl84" />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[0]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl88" />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl88" />
            <td />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl111" style={{height: '16.0pt'}} />
            <td rowSpan={2} className="xl89">1</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl88" />
            <td />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl112" style={{height: '16.0pt'}}>&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td className="xl88" />
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[1]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl89">&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">3</td>
            <td className="xl98">&nbsp;</td>
            <td />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl84" style={{height: '16.0pt'}} />
            <td className="xl84" />
            <td className="xl93">&nbsp;</td>
            <td />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl114" style={{height: '18.0pt'}} />
            <td className="xl115" />
            <td className="xl89">&nbsp;</td>
            <td className="xl93">&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[2]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl84" />
            <td className="xl92">&nbsp;</td>
            <td className="xl75">&nbsp;</td>
            <td />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl86" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td rowSpan={2} className="xl89">4</td>
            <td className="xl98">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl75">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[3]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl108">&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl89" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl89">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl111" style={{height: '15.75pt'}} />
            <td rowSpan={2} className="xl89">2</td>
            <td className="xl108">&nbsp;</td>
            <td className="xl92">&nbsp;</td>
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl112" style={{height: '15.75pt'}}>&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <Team
              team={teams[4]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl92">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl84" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={2} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl85" />
          </tr>
          {/*[if supportMisalignedColumns]*/}
          <tr height={0} style={{display: 'none'}}>
            <td width={163} style={{width: '122pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
          </tr>
          {/*[endif]*/}
        </tbody></table>
      
    </>
  );
}
