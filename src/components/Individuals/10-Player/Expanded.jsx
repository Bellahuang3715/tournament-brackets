import React from 'react';
import styles from '../stylesheet.module.css';

export default function Expanded({
  players,
  fontFamily = 'Arial, sans-serif',
  playerIDFontSize = 14,
  playerNameFontSize = 12,
}) {
  const playerIDStyle = {
    fontSize:  `${playerIDFontSize}pt`,
    fontFamily,
  };
  const playerNameStyle = {
    fontSize:  `${playerNameFontSize}pt`,
    fontFamily,
  };
  return (
    <>
      <table border={0} cellPadding={0} cellSpacing={0} width={2162} style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '1621pt'}}>
        <colgroup><col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={57} style={{msoWidthSource: 'userset', msoWidthAlt: 1834, width: '43pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '37pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={49} style={{msoWidthSource: 'userset', msoWidthAlt: 1578, width: '37pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={35} span={2} style={{msoWidthSource: 'userset', msoWidthAlt: 1109, width: '26pt'}} />
          <col width={47} style={{msoWidthSource: 'userset', msoWidthAlt: 1493, width: '35pt'}} />
          <col width={163} style={{msoWidthSource: 'userset', msoWidthAlt: 5205, width: '122pt'}} />
          <col width={101} span={8} style={{width: '76pt'}} />
        </colgroup><tbody><tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} width={57} style={{height: '15.75pt', width: '43pt'}}><span style={{msoSpacerun: 'yes'}}>&nbsp;</span></td>
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={57} style={{width: '43pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.groupTitle} colSpan={5} width={317} style={{msoIgnore: 'colspan', width: '237pt'}}>GROUP
              x-x | COURT x</td>
            <td className={styles.xl00} width={49} style={{width: '37pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={35} style={{width: '26pt'}} />
            <td className={styles.xl00} width={47} style={{width: '35pt'}} />
            <td className={styles.xl00} width={163} style={{width: '122pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
            <td className={styles.xl00} width={101} style={{width: '76pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={7} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td
              rowSpan={2}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                ...playerIDStyle
              }}
            >
                {players[0].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td
              colSpan={2}
              className={styles.playerNameExpanded}
              style={{
                ...playerNameStyle
              }}
            >
              {`${players[0].name} (${players[0].club})`}
            </td>
            <td rowSpan={2} className={styles.xl00}>3</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>3</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={4} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td
              rowSpan={2}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                borderTop: 'none',
                ...playerIDStyle
              }}
            >
                {players[1].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>Score</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerNameExpanded}>Name 3</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={3} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td
              colSpan={2}
              className={styles.playerNameExpanded}
              style={{
                ...playerNameStyle
              }}
            >
              {`${players[1].name} (${players[1].club})`}
            </td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={5} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>7</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>7</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td
              rowSpan={2}
              height={40}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                height: '31.5pt',
                ...playerIDStyle
              }}
            >
                {players[2].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} className={styles.playerNameExpanded}>Name 7</td>
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td
              colSpan={2}
              height={20}
              className={styles.playerNameExpanded}
              style={{
                height: '15.75pt',
                ...playerNameStyle
              }}
            >
              {`${players[2].name} (${players[2].club})`}
            </td>
            <td rowSpan={2} className={styles.borderRightExpanded}>1</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>1</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td
              rowSpan={2}
              height={40}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                height: '31.5pt',
                borderTop: 'none',
                ...playerIDStyle
              }}
            >
                {players[3].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>Score</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerNameExpanded}>Name 1</td>
            <td rowSpan={2} className={styles.xl00}>4</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>4</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td
              colSpan={2}
              height={20}
              className={styles.playerNameExpanded}
              style={{
                height: '15.75pt',
                ...playerNameStyle
              }}
            >
              {`${players[3].name} (${players[3].club})`}
            </td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td
              rowSpan={2}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                borderTop: 'none',
                ...playerIDStyle
              }}
            >
                {players[4].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>Score</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerNameExpanded}>Name 4</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td
              colSpan={2}
              className={styles.playerNameExpanded}
              style={{
                ...playerNameStyle
              }}
            >
              {`${players[4].name} (${players[4].club})`}
            </td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00}><span style={{msoSpacerun: 'yes'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style={{display: 'none'}}><span style={{msoSpacerun: 'yes'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></td>
            <td rowSpan={2} className={styles.xl00}>9</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>9</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} className={styles.playerNameExpanded}>Name 9</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td
              rowSpan={2}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                ...playerIDStyle
              }}
            >
                {players[5].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td
              colSpan={2}
              className={styles.playerNameExpanded}
              style={{
                ...playerNameStyle
              }}
            >
              {`${players[5].name} (${players[5].club})`}
            </td>
            <td rowSpan={2} className={styles.xl00}>5</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>5</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl01} />
            <td className={styles.xl01} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTopRight}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td colSpan={2} height={20} className={styles.xl01} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td
              rowSpan={2}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                borderTop: 'none',
                ...playerIDStyle
              }}
            >
                {players[6].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>Score</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <td colSpan={2} className={styles.playerNameExpanded}>Name 5</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTop}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td
              colSpan={2}
              className={styles.playerNameExpanded}
              style={{
                ...playerNameStyle
              }}
            >
              {`${players[6].name} (${players[6].club})`}
            </td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td
              rowSpan={2}
              height={40}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                height: '31.5pt',
                ...playerIDStyle
              }}
            >
                {players[7].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td rowSpan={2} className={styles.xl00}>8</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>8</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.xl00} />
            <td className={styles.borderLeft}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderRight} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td
              colSpan={2}
              height={20}
              className={styles.playerNameExpanded}
              style={{
                height: '15.75pt',
                ...playerNameStyle
              }}
            >
              {`${players[7].name} (${players[7].club})`}
            </td>
            <td rowSpan={2} className={styles.borderRightExpanded}>2</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>2</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
            <td />
            <td colSpan={2} className={styles.playerNameExpanded}>Name 8</td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.borderBottom} style={{height: '15.75pt'}}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderTop}>&nbsp;</td>
            <td className={styles.borderLeft}>&nbsp;</td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.borderRight}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td
              rowSpan={2}
              height={40}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                height: '31.5pt',
                borderTop: 'none',
                ...playerIDStyle
              }}
            >
                {players[8].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>Score</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
            <td className={styles.xl00} />
            <td colSpan={2} className={styles.playerNameExpanded}>Name 2</td>
            <td rowSpan={2} className={styles.xl00}>6</td>
            <td className={styles.borderBottomLeft}>&nbsp;</td>
            <td rowSpan={2} className={styles.playerIDExpanded} style={{borderBottom: '.5pt solid black'}}>6</td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black'}}>Score</td>
            <td className={styles.borderRightBottom}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} className={styles.xl00} style={{height: '15.75pt'}} />
            <td className={styles.xl00} />
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderBottom}>&nbsp;</td>
            <td className={styles.borderTopLeft} style={{borderTop: 'none'}}>&nbsp;</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td
              colSpan={2}
              height={20}
              className={styles.playerNameExpanded}
              style={{
                height: '15.75pt',
                ...playerNameStyle
              }}
            >
              {`${players[8].name} (${players[8].club})`}
            </td>
            <td colSpan={2} style={{msoIgnore: 'colspan'}} />
            <td
              rowSpan={2}
              className={styles.playerIDExpanded}
              style={{
                borderBottom: '.5pt solid black',
                borderTop: 'none',
                ...playerIDStyle
              }}
            >
                {players[9].id}
            </td>
            <td rowSpan={2} className={styles.borderTopRight} style={{borderBottom: '.5pt solid black', borderTop: 'none'}}>Score</td>
            <td className={styles.borderRight}>&nbsp;</td>
            <td className={styles.borderLeft} style={{borderLeft: 'none'}}>&nbsp;</td>
            <td colSpan={2} className={styles.playerNameExpanded}>Name 6</td>
          </tr>
          <tr height={20} style={{msoHeightSource: 'userset', height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td className={styles.borderTop}>&nbsp;</td>
          </tr>
          <tr height={20} style={{height: '15.75pt'}}>
            <td height={20} colSpan={4} style={{height: '15.75pt', msoIgnore: 'colspan'}} />
            <td
              colSpan={2}
              className={styles.playerNameExpanded}
              style={{
                ...playerNameStyle
              }}
            >
              {`${players[9].name} (${players[9].club})`}
            </td>
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td className={styles.xl00} />
            <td colSpan={3} style={{msoIgnore: 'colspan'}} />
          </tr>
        </tbody></table>
    </>
  );
}
