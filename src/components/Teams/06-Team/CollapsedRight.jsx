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
      <table border={0} cellPadding={0} cellSpacing={0} width={1015} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '762pt'}}>
        <colgroup><col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={168} style={{msoWidthSource: 'userset', msoWidthAlt: 5376, width: '126pt'}} />
          <col width={101} span={7} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} width={35} style={{height: '15.75pt', width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={168} style={{width: '126pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
            <td className="xl66" width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl108">&nbsp;</td>
            <Team
              team={teams[0]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl66" />
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
            <td className="xl84" />
            <td className="xl104" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
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
            <td className="xl84" />
            <td rowSpan={2} className="xl94">1</td>
            <td className="xl68" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
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
            <td className="xl100">&nbsp;</td>
            <td className="xl109">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl94">&nbsp;</td>
            <td className="xl103">&nbsp;</td>
            <Team
              team={teams[1]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td rowSpan={2} className="xl94">3</td>
            <td className="xl84" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl116">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl94">&nbsp;</td>
            <td className="xl84" />
            <td className="xl109">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl105">&nbsp;</td>
            <td className="xl108">&nbsp;</td>
            <Team
              team={teams[2]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
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
            <td height={21} className="xl117" style={{height: '16.0pt'}}>&nbsp;</td>
            <td rowSpan={2} className="xl94">5</td>
            <td className="xl84" />
            <td className="xl84" />
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
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl108">&nbsp;</td>
            <Team
              team={teams[3]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl104" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td rowSpan={2} className="xl94">2</td>
            <td className="xl118" style={{borderTop: 'none'}}>&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl100">&nbsp;</td>
            <td className="xl112">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl94">&nbsp;</td>
            <td className="xl103">&nbsp;</td>
            <Team
              team={teams[4]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl107">&nbsp;</td>
            <td rowSpan={2} className="xl94">4</td>
            <td className="xl84" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={24} style={{height: '18.0pt'}}>
            <td height={24} className="xl85" style={{height: '18.0pt'}} />
            <td className="xl88" />
            <td className="xl94">&nbsp;</td>
            <td className="xl115" />
            <td className="xl114" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl105">&nbsp;</td>
            <td className="xl84" />
            <Team
              team={teams[5]}
              teamIDStyle={teamIDStyle}
            />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl86">&nbsp;</td>
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{msoHeightSource: 'userset', height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} className="xl85" style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl88" />
            <td />
            <td className="xl66" />
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
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl95" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl85" />
            <td className="xl88" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl65" />
            <td />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl77" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl85" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl85" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
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
            <td className="xl85" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
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
            <td className="xl85" />
            <td className="xl65" />
            <td className="xl83" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className="xl88" style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl88" />
            <td className="xl77" />
            <td className="xl66" />
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
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl83" />
            <td className="xl66" />
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
            <td className="xl85" />
            <td className="xl84" />
            <td className="xl83" />
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
