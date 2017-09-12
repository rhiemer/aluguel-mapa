import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'public_Scrollbar_main': {
    'boxSizing': 'border-box',
    'outline': 'none',
    'overflow': 'hidden',
    'position': 'absolute',
    'WebkitTransitionDuration': '250ms',
    'transitionDuration': '250ms',
    'WebkitTransitionTimingFunction': 'ease',
    'transitionTimingFunction': 'ease',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'public_Scrollbar_mainVertical': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransitionProperty': 'background-color width',
    'transitionProperty': 'background-color width',
    'width': [{ 'unit': 'px', 'value': 15 }]
  },
  'public_Scrollbar_mainVerticalScrollbar_mainActive': {
    'backgroundColor': 'rgba(255, 255, 255, 0.8)',
    'width': [{ 'unit': 'px', 'value': 17 }]
  },
  'public_Scrollbar_mainVertical:hover': {
    'backgroundColor': 'rgba(255, 255, 255, 0.8)',
    'width': [{ 'unit': 'px', 'value': 17 }]
  },
  'public_Scrollbar_mainHorizontal': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 15 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransitionProperty': 'background-color height',
    'transitionProperty': 'background-color height'
  },
  'public_Scrollbar_mainHorizontalScrollbar_mainActive': {
    'backgroundColor': 'rgba(255, 255, 255, 0.8)',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'public_Scrollbar_mainHorizontal:hover': {
    'backgroundColor': 'rgba(255, 255, 255, 0.8)',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'Scrollbar_mainOpaque': {
    'backgroundColor': '#fff'
  },
  'Scrollbar_mainOpaqueScrollbar_mainActive': {
    'backgroundColor': '#fff'
  },
  'Scrollbar_mainOpaque:hover': {
    'backgroundColor': '#fff'
  },
  'Scrollbar_face': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'position': 'absolute',
    'zIndex': '1'
  },
  'Scrollbar_face:after': {
    'backgroundColor': '#c2c2c2',
    'borderRadius': '6px',
    'content': '''',
    'display': 'block',
    'position': 'absolute',
    'WebkitTransition': 'background-color 250ms ease',
    'transition': 'background-color 250ms ease'
  },
  'public_Scrollbar_main:hover Scrollbar_face:after': {
    'backgroundColor': '#7d7d7d'
  },
  'Scrollbar_mainActive Scrollbar_face:after': {
    'backgroundColor': '#7d7d7d'
  },
  'Scrollbar_faceActive:after': {
    'backgroundColor': '#7d7d7d'
  },
  'Scrollbar_faceHorizontal': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'Scrollbar_faceHorizontal:after': {
    'bottom': [{ 'unit': 'px', 'value': 4 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 4 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'Scrollbar_faceVertical': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'Scrollbar_faceVertical:after': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 4 }],
    'right': [{ 'unit': 'px', 'value': 4 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'public_fixedDataTable_main': {
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'overflow': 'hidden',
    'position': 'relative'
  },
  'public_fixedDataTable_header': {
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d3d3d3' }]
  },
  'fixedDataTable_hasBottomBorder': {
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d3d3d3' }]
  },
  'public_fixedDataTable_header public_fixedDataTableCell_main': {
    'fontWeight': 'bold'
  },
  'public_fixedDataTable_header': {
    'backgroundColor': '#f6f7f8',
    'backgroundImage': '-webkit-linear-gradient(#fff, #efefef)',
    'backgroundImage': 'linear-gradient(#fff, #efefef)'
  },
  'public_fixedDataTable_header public_fixedDataTableCell_main': {
    'backgroundColor': '#f6f7f8',
    'backgroundImage': '-webkit-linear-gradient(#fff, #efefef)',
    'backgroundImage': 'linear-gradient(#fff, #efefef)'
  },
  'public_fixedDataTable_footer public_fixedDataTableCell_main': {
    'backgroundColor': '#f6f7f8',
    'borderTop': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d3d3d3' }]
  },
  'fixedDataTable_shadow': {
    'background': '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x',
    'height': [{ 'unit': 'px', 'value': 4 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1'
  },
  'fixedDataTable_rowsContainer': {
    'overflow': 'hidden',
    'position': 'relative'
  },
  'fixedDataTable_horizontalScrollbar': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute'
  },
  'fixedDataTable_horizontalScrollbar public_Scrollbar_mainHorizontal': {
    'background': '#fff'
  },
  'public_fixedDataTableCell_main': {
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'borderWidth': '0 1px 0 0',
    'boxSizing': 'border-box',
    'display': 'block',
    'overflow': 'hidden',
    'position': 'relative',
    'whiteSpace': 'normal'
  },
  'public_fixedDataTableCell_lastChild': {
    'borderWidth': '0 1px 1px 0'
  },
  'public_fixedDataTableCell_highlighted': {
    'backgroundColor': '#f4f4f4'
  },
  'public_fixedDataTableCell_alignRight': {
    'textAlign': 'right'
  },
  'public_fixedDataTableCell_alignCenter': {
    'textAlign': 'center'
  },
  'public_fixedDataTableCell_wrap1': {
    'display': 'table',
    'overflow': 'hidden'
  },
  'public_fixedDataTableCell_wrap2': {
    'display': 'table-row'
  },
  'public_fixedDataTableCell_wrap3': {
    'display': 'table-cell',
    'verticalAlign': 'middle'
  },
  'public_fixedDataTableCell_cellContent': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  },
  'fixedDataTableCell_columnResizerContainer': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 6 }],
    'zIndex': '1'
  },
  'fixedDataTableCell_columnResizerContainer:hover': {
    'cursor': 'ew-resize'
  },
  'fixedDataTableCell_columnResizerContainer:hover fixedDataTableCell_columnResizerKnob': {
    'visibility': 'visible'
  },
  'fixedDataTableCell_columnResizerKnob': {
    'backgroundColor': '#0284ff',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'visibility': 'hidden',
    'width': [{ 'unit': 'px', 'value': 4 }]
  },
  'fixedDataTableCellGroup_cellGroup': {
    'WebkitBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'fixedDataTableCellGroup_cellGroup > public_fixedDataTableCell_main': {
    'display': 'inline-block',
    'verticalAlign': 'top',
    'whiteSpace': 'normal'
  },
  'fixedDataTableCellGroup_cellGroupWrapper': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'fixedDataTableColumnResizerLine_mouseArea': {
    'cursor': 'ew-resize',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -5 }],
    'width': [{ 'unit': 'px', 'value': 12 }]
  },
  'fixedDataTableColumnResizerLine_main': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0284ff' }],
    'boxSizing': 'border-box',
    'position': 'absolute',
    'zIndex': '10'
  },
  'fixedDataTableColumnResizerLine_hiddenElem': {
    'display': 'none !important'
  },
  'public_fixedDataTableRow_main': {
    'backgroundColor': '#fff',
    'boxSizing': 'border-box',
    'overflow': 'hidden',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'fixedDataTableRow_body': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'public_fixedDataTableRow_highlighted': {
    'backgroundColor': '#f6f7f8'
  },
  'public_fixedDataTableRow_highlighted public_fixedDataTableCell_main': {
    'backgroundColor': '#f6f7f8'
  },
  'fixedDataTableRow_fixedColumnsDivider': {
    'WebkitBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden',
    'borderLeft': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'fixedDataTableRow_columnsShadow': {
    'background': '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y',
    'width': [{ 'unit': 'px', 'value': 4 }]
  },
  'fixedDataTableRow_rowWrapper': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  }
});
