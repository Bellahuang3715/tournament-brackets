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
      <table border={0} cellPadding={0} cellSpacing={0} width={303} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '226pt'}}>
        <colgroup><col width={35} span={4} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
        </colgroup><tbody><tr height={20} style={{height: '15.75pt'}}>
            <td height={20} width={35} style={{height: '15.75pt', width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={163} style={{width: '122pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl66" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl108">&nbsp;</td>
            <Team
              team={teams[0]}
              teamIDStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl104" style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td rowSpan={2} className="xl94">1</td>
            <td className="xl111" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl100">&nbsp;</td>
            <td className="xl112">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl121">&nbsp;</td>
            <td className="xl92">&nbsp;</td>
            <Team
              team={teams[1]}
              teamIDStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td rowSpan={2} className="xl94">3</td>
            <td className="xl84" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl116">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl101">&nbsp;</td>
            <td className="xl94">&nbsp;</td>
            <td className="xl115" />
            <td className="xl114" />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl101">&nbsp;</td>
            <td className="xl105">&nbsp;</td>
            <td className="xl84" />
            <Team
              team={teams[2]}
              teamIDStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className="xl109" style={{height: '15.75pt'}}>&nbsp;</td>
            <td rowSpan={2} className="xl94">4</td>
            <td className="xl84" />
            <td className="xl86">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl102">&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl84" />
            <Team
              team={teams[3]}
              teamIDStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl102">&nbsp;</td>
            <td className="xl84" />
            <td className="xl104">&nbsp;</td>
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl107">&nbsp;</td>
            <td className="xl84" />
            <td rowSpan={2} className="xl94">2</td>
            <td className="xl84" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl86">&nbsp;</td>
            <td className="xl112">&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl103">&nbsp;</td>
            <Team
              team={teams[4]}
              teamIDStyle={teamIDStyle}
            />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} style={{height: '15.75pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl84" />
          </tr>
          <tr height={21} style={{height: '16.0pt'}}>
            <td height={21} style={{height: '16.0pt'}} />
            <td className="xl88" />
            <td className="xl84" />
            <td className="xl84" />
            <td className="xl66" />
          </tr>
          {/*[if supportMisalignedColumns]*/}
          <tr height={0} style={{display: 'none'}}>
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={35} style={{width: '26pt'}} />
            <td width={163} style={{width: '122pt'}} />
          </tr>
          {/*[endif]*/}
        </tbody></table>
      
    </>
  );
}
