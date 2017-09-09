import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // -------------------------------------*	HINT.css - A CSS tooltip library
\*-------------------------------------
  // *
 * HINT.css is a tooltip library made in pure CSS.
 *
 * Source: https://github.com/chinchang/hint.css
 * Demo: http://kushagragour.in/lab/hint/
 *
 * Release under The MIT License
 *
  // *
 * source: hint-core.scss
 *
 * Defines the basic styling for the tooltip.
 * Each tooltip is made of 2 parts:
 * 	1) body (:after)
 * 	2) arrow (:before)
 *
 * Classes added:
 * 	1) hint
  '[data-hint]': {
    'position': 'relative',
    'display': 'inline-block',
    // *
	 * tooltip arrow
    // *
	 * tooltip body
  },
  '[data-hint]:before': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  '[data-hint]:after': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  '[data-hint]:hover:before': {
    'visibility': 'visible',
    'opacity': '1'
  },
  '[data-hint]:hover:after': {
    'visibility': 'visible',
    'opacity': '1'
  },
  '[data-hint]:hover:before': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  '[data-hint]:hover:after': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  '[data-hint]:before': {
    'content': '''',
    'position': 'absolute',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'zIndex': '1000001'
  },
  '[data-hint]:after': {
    'content': 'attr(data-hint)',
    'background': '#383838',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontFamily': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'whiteSpace': 'nowrap'
  },
  '[data-hint='']:before': {
    'display': 'none !important'
  },
  '[data-hint='']:after': {
    'display': 'none !important'
  },
  // *
 * source: hint-position.scss
 *
 * Defines the positoning logic for the tooltips.
 *
 * Classes added:
 * 	1) hint--top
 * 	2) hint--bottom
 * 	3) hint--left
 * 	4) hint--right
  // *
 * set default color for tooltip arrows
  'hint--top-left:before': {
    'borderTopColor': '#383838'
  },
  'hint--top-right:before': {
    'borderTopColor': '#383838'
  },
  'hint--top:before': {
    'borderTopColor': '#383838'
  },
  'hint--bottom-left:before': {
    'borderBottomColor': '#383838'
  },
  'hint--bottom-right:before': {
    'borderBottomColor': '#383838'
  },
  'hint--bottom:before': {
    'borderBottomColor': '#383838'
  },
  'hint--left:before': {
    'borderLeftColor': '#383838'
  },
  'hint--right:before': {
    'borderRightColor': '#383838'
  },
  // *
 * top tooltip
  'hint--top:before': {
    'marginBottom': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top:before': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top:after': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top:after': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top:hover:after': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:hover:before': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:focus:after': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:focus:before': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  // *
 * bottom tooltip
  'hint--bottom:before': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom:before': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom:after': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom:after': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom:hover:after': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:hover:before': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:focus:after': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:focus:before': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  // *
 * right tooltip
  'hint--right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--right:after': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--right:before': {
    'left': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--right:after': {
    'left': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--right:hover:after': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:hover:before': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:focus:after': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:focus:before': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // *
 * left tooltip
  'hint--left:before': {
    'marginRight': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--left:after': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--left:before': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--left:after': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--left:hover:after': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:hover:before': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:focus:after': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:focus:before': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  // *
 * top-left tooltip
  'hint--top-left:before': {
    'marginBottom': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top-left:before': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-left:after': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-left:after': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left:after': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--top-left:hover:after': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:hover:before': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:focus:after': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:focus:before': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  // *
 * top-right tooltip
  'hint--top-right:before': {
    'marginBottom': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top-right:before': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-right:after': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-right:after': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right:after': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--top-right:hover:after': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:hover:before': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:focus:after': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:focus:before': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  // *
 * bottom-left tooltip
  'hint--bottom-left:before': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom-left:before': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-left:after': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-left:after': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left:after': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--bottom-left:hover:after': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:hover:before': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:focus:after': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:focus:before': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  // *
 * bottom-right tooltip
  'hint--bottom-right:before': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom-right:before': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-right:after': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-right:after': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right:after': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--bottom-right:hover:after': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:hover:before': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:focus:after': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:focus:before': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  // *
 * source: hint-sizes.scss
 *
 * Defines width restricted tooltips that can span
 * across multiple lines.
 *
 * Classes added:
 * 	1) hint--small
 * 	2) hint--medium
 * 	3) hint--large
 *
  'hint--small:after': {
    'whiteSpace': 'normal',
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'hint--medium:after': {
    'whiteSpace': 'normal',
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'hint--large:after': {
    'whiteSpace': 'normal',
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'hint--small:after': {
    'width': [{ 'unit': 'px', 'value': 80 }]
  },
  'hint--medium:after': {
    'width': [{ 'unit': 'px', 'value': 150 }]
  },
  'hint--large:after': {
    'width': [{ 'unit': 'px', 'value': 300 }]
  },
  // *
 * source: hint-theme.scss
 *
 * Defines basic theme for tooltips.
 *
  '[data-hint]': {
    // *
	 * tooltip body
  },
  '[data-hint]:after': {
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'black' }],
    'boxShadow': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  // *
 * source: hint-color-types.scss
 *
 * Contains tooltips of various types based on color differences.
 *
 * Classes added:
 * 	1) hint--error
 * 	2) hint--warning
 * 	3) hint--info
 * 	4) hint--success
 *
  // *
 * Error
  'hint--error:after': {
    'backgroundColor': '#b34e4d',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#592726' }]
  },
  'hint--errorhint--top-left:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top-right:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--bottom-left:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom-right:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--left:before': {
    'borderLeftColor': '#b34e4d'
  },
  'hint--errorhint--right:before': {
    'borderRightColor': '#b34e4d'
  },
  // *
 * Warning
  'hint--warning:after': {
    'backgroundColor': '#c09854',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#6c5328' }]
  },
  'hint--warninghint--top-left:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top-right:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--bottom-left:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom-right:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--left:before': {
    'borderLeftColor': '#c09854'
  },
  'hint--warninghint--right:before': {
    'borderRightColor': '#c09854'
  },
  // *
 * Info
  'hint--info:after': {
    'backgroundColor': '#3986ac',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#1a3c4d' }]
  },
  'hint--infohint--top-left:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top-right:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--bottom-left:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom-right:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--left:before': {
    'borderLeftColor': '#3986ac'
  },
  'hint--infohint--right:before': {
    'borderRightColor': '#3986ac'
  },
  // *
 * Success
  'hint--success:after': {
    'backgroundColor': '#458746',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#1a321a' }]
  },
  'hint--successhint--top-left:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top-right:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--bottom-left:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom-right:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--left:before': {
    'borderLeftColor': '#458746'
  },
  'hint--successhint--right:before': {
    'borderRightColor': '#458746'
  },
  // *
 * source: hint-always.scss
 *
 * Defines a persisted tooltip which shows always.
 *
 * Classes added:
 * 	1) hint--always
 *
  'hint--always:after': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--always:before': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--alwayshint--top:after': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--alwayshint--top:before': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--alwayshint--top-left:after': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--alwayshint--top-left:before': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--alwayshint--top-right:after': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--alwayshint--top-right:before': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--alwayshint--bottom:after': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--alwayshint--bottom:before': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--alwayshint--bottom-left:after': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--alwayshint--bottom-left:before': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--alwayshint--bottom-right:after': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--alwayshint--bottom-right:before': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--alwayshint--left:after': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--alwayshint--left:before': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--alwayshint--right:after': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--alwayshint--right:before': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // *
 * source: hint-rounded.scss
 *
 * Defines rounded corner tooltips.
 *
 * Classes added:
 * 	1) hint--rounded
 *
  'hint--rounded:after': {
    'borderRadius': '4px'
  },
  // *
 * source: hint-effects.scss
 *
 * Defines various transition effects for the tooltips.
 *
 * Classes added:
 * 	1) hint--no-animate
 * 	2) hint--bounce
 *
  'hint--no-animate:before': {
    'WebkitTransitionDuration': '0ms',
    'MozTransitionDuration': '0ms',
    'transitionDuration': '0ms'
  },
  'hint--no-animate:after': {
    'WebkitTransitionDuration': '0ms',
    'MozTransitionDuration': '0ms',
    'transitionDuration': '0ms'
  },
  'hint--bounce:before': {
    'WebkitTransition': 'opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'MozTransition': 'opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'transition': 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)'
  },
  'hint--bounce:after': {
    'WebkitTransition': 'opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'MozTransition': 'opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'transition': 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)'
  },
  // *
 * based on hint.css with html content support
  'hint--htmlhint:after': {
    'display': 'none',
    'opacity': '0'
  },
  'hint__content': {
    'background': '#383838',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'pointerEvents': 'none'
  },
  'hint--hoverable hint__content': {
    'pointerEvents': 'auto'
  },
  'hint--html': {
    'position': 'relative',
    'display': 'inline-block',
    // *
   * tooltip arrow
  },
  'hint--html:before': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  'hint--html:after': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  'hint--html:hover:before': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:hover:after': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:hover:before': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  'hint--html:hover:after': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  'hint--html:before': {
    'content': '''',
    'position': 'absolute',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'zIndex': '1000001'
  },
  'hint--html hint__content': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  'hint--html:hover hint__content': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:focus hint__content': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:hover hint__content': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  'hint--htmlhint--notrans:before': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'transition': 'none'
  },
  'hint--htmlhint--notrans:after': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'transition': 'none'
  },
  'hint--htmlhint--notrans hint__content': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'transition': 'none'
  },
  // *
 * top tooltip
  'hint--top hint__content': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top hint__content': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--top:hover hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:focus hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top-left hint__content': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left hint__content': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left:before': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--top-left hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }]
  },
  'hint--top-left hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--top-left:hover hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:focus hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-right hint__content': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right hint__content': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--top-right hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top-right hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--top-right:hover hint__content': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:focus hint__content': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  // *
 * bottom tooltip
  'hint--bottom hint__content': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom hint__content': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--bottom:hover hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:focus hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom-left hint__content': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left hint__content': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left:before': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--bottom-left hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }]
  },
  'hint--bottom-left hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--bottom-left:hover hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:focus hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-right hint__content': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right hint__content': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--bottom-right hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom-right hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--bottom-right:hover hint__content': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:focus hint__content': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  // *
 * right tooltip
  'hint--right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--right hint__content': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--right hint__content': {
    'left': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--right hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -12 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--right:hover hint__content': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:focus hint__content': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // *
 * left tooltip
  'hint--left:before': {
    'marginRight': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--left hint__content': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--left hint__content': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--left hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--left:hover hint__content': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:focus hint__content': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  // *
 * Error
  'hint--error hint__content': {
    'backgroundColor': '#b34e4d'
  },
  'hint--errorhint--top-left:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top-right:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--bottom-left:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom-right:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--left:before': {
    'borderLeftColor': '#b34e4d'
  },
  'hint--errorhint--right:before': {
    'borderRightColor': '#b34e4d'
  },
  // *
 * Warning
  'hint--warning hint__content': {
    'backgroundColor': '#c09854'
  },
  'hint--warninghint--top-left:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top-right:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--bottom-left:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom-right:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--left:before': {
    'borderLeftColor': '#c09854'
  },
  'hint--warninghint--right:before': {
    'borderRightColor': '#c09854'
  },
  // *
 * Info
  'hint--info hint__content': {
    'backgroundColor': '#3986ac'
  },
  'hint--infohint--top-left:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top-right:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--bottom-left:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom-right:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--left:before': {
    'borderLeftColor': '#3986ac'
  },
  'hint--infohint--right:before': {
    'borderRightColor': '#3986ac'
  },
  // *
 * Success
  'hint--success hint__content': {
    'backgroundColor': '#458746'
  },
  'hint--successhint--top-left:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top-right:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--bottom-left:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom-right:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--left:before': {
    'borderLeftColor': '#458746'
  },
  'hint--successhint--right:before': {
    'borderRightColor': '#458746'
  },
  'hint--htmlhint--hidden:hover:after': {
    'opacity': '0',
    'visibility': 'hidden'
  },
  'hint--htmlhint--hidden:hover:before': {
    'opacity': '0',
    'visibility': 'hidden'
  },
  'hint--htmlhint--hidden:hover hint__content': {
    'opacity': '0',
    'visibility': 'hidden'
  },
  'hint--always:after': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--always:before': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--always hint__content': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--alwayshint--top hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--alwayshint--top-left hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--alwayshint--top-right hint__content': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--alwayshint--bottom hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--alwayshint--bottom-left hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--alwayshint--bottom-right hint__content': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--alwayshint--left hint__content': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--alwayshint--right hint__content': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // -------------------------------------*	HINT.css - A CSS tooltip library
\*-------------------------------------
  // *
 * HINT.css is a tooltip library made in pure CSS.
 *
 * Source: https://github.com/chinchang/hint.css
 * Demo: http://kushagragour.in/lab/hint/
 *
 * Release under The MIT License
 *
  // *
 * source: hint-core.scss
 *
 * Defines the basic styling for the tooltip.
 * Each tooltip is made of 2 parts:
 * 	1) body (:after)
 * 	2) arrow (:before)
 *
 * Classes added:
 * 	1) hint
  '[data-hint]': {
    'position': 'relative',
    'display': 'inline-block',
    // *
	 * tooltip arrow
    // *
	 * tooltip body
  },
  '[data-hint]:before': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  '[data-hint]:after': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  '[data-hint]:hover:before': {
    'visibility': 'visible',
    'opacity': '1'
  },
  '[data-hint]:hover:after': {
    'visibility': 'visible',
    'opacity': '1'
  },
  '[data-hint]:hover:before': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  '[data-hint]:hover:after': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  '[data-hint]:before': {
    'content': '''',
    'position': 'absolute',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'zIndex': '1000001'
  },
  '[data-hint]:after': {
    'content': 'attr(data-hint)',
    'background': '#383838',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontFamily': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'whiteSpace': 'nowrap'
  },
  '[data-hint='']:before': {
    'display': 'none !important'
  },
  '[data-hint='']:after': {
    'display': 'none !important'
  },
  // *
 * source: hint-position.scss
 *
 * Defines the positoning logic for the tooltips.
 *
 * Classes added:
 * 	1) hint--top
 * 	2) hint--bottom
 * 	3) hint--left
 * 	4) hint--right
  // *
 * set default color for tooltip arrows
  'hint--top-left:before': {
    'borderTopColor': '#383838'
  },
  'hint--top-right:before': {
    'borderTopColor': '#383838'
  },
  'hint--top:before': {
    'borderTopColor': '#383838'
  },
  'hint--bottom-left:before': {
    'borderBottomColor': '#383838'
  },
  'hint--bottom-right:before': {
    'borderBottomColor': '#383838'
  },
  'hint--bottom:before': {
    'borderBottomColor': '#383838'
  },
  'hint--left:before': {
    'borderLeftColor': '#383838'
  },
  'hint--right:before': {
    'borderRightColor': '#383838'
  },
  // *
 * top tooltip
  'hint--top:before': {
    'marginBottom': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top:before': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top:after': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top:after': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top:hover:after': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:hover:before': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:focus:after': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:focus:before': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  // *
 * bottom tooltip
  'hint--bottom:before': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom:before': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom:after': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom:after': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom:hover:after': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:hover:before': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:focus:after': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:focus:before': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  // *
 * right tooltip
  'hint--right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--right:after': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--right:before': {
    'left': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--right:after': {
    'left': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--right:hover:after': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:hover:before': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:focus:after': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:focus:before': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // *
 * left tooltip
  'hint--left:before': {
    'marginRight': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--left:after': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--left:before': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--left:after': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--left:hover:after': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:hover:before': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:focus:after': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:focus:before': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  // *
 * top-left tooltip
  'hint--top-left:before': {
    'marginBottom': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top-left:before': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-left:after': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-left:after': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left:after': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--top-left:hover:after': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:hover:before': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:focus:after': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:focus:before': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  // *
 * top-right tooltip
  'hint--top-right:before': {
    'marginBottom': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top-right:before': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-right:after': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-right:after': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right:after': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--top-right:hover:after': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:hover:before': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:focus:after': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:focus:before': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  // *
 * bottom-left tooltip
  'hint--bottom-left:before': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom-left:before': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-left:after': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-left:after': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left:after': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--bottom-left:hover:after': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:hover:before': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:focus:after': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:focus:before': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  // *
 * bottom-right tooltip
  'hint--bottom-right:before': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom-right:before': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-right:after': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-right:after': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right:after': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--bottom-right:hover:after': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:hover:before': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:focus:after': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:focus:before': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  // *
 * source: hint-sizes.scss
 *
 * Defines width restricted tooltips that can span
 * across multiple lines.
 *
 * Classes added:
 * 	1) hint--small
 * 	2) hint--medium
 * 	3) hint--large
 *
  'hint--small:after': {
    'whiteSpace': 'normal',
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'hint--medium:after': {
    'whiteSpace': 'normal',
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'hint--large:after': {
    'whiteSpace': 'normal',
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'hint--small:after': {
    'width': [{ 'unit': 'px', 'value': 80 }]
  },
  'hint--medium:after': {
    'width': [{ 'unit': 'px', 'value': 150 }]
  },
  'hint--large:after': {
    'width': [{ 'unit': 'px', 'value': 300 }]
  },
  // *
 * source: hint-theme.scss
 *
 * Defines basic theme for tooltips.
 *
  '[data-hint]': {
    // *
	 * tooltip body
  },
  '[data-hint]:after': {
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'black' }],
    'boxShadow': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  // *
 * source: hint-color-types.scss
 *
 * Contains tooltips of various types based on color differences.
 *
 * Classes added:
 * 	1) hint--error
 * 	2) hint--warning
 * 	3) hint--info
 * 	4) hint--success
 *
  // *
 * Error
  'hint--error:after': {
    'backgroundColor': '#b34e4d',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#592726' }]
  },
  'hint--errorhint--top-left:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top-right:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--bottom-left:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom-right:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--left:before': {
    'borderLeftColor': '#b34e4d'
  },
  'hint--errorhint--right:before': {
    'borderRightColor': '#b34e4d'
  },
  // *
 * Warning
  'hint--warning:after': {
    'backgroundColor': '#c09854',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#6c5328' }]
  },
  'hint--warninghint--top-left:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top-right:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--bottom-left:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom-right:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--left:before': {
    'borderLeftColor': '#c09854'
  },
  'hint--warninghint--right:before': {
    'borderRightColor': '#c09854'
  },
  // *
 * Info
  'hint--info:after': {
    'backgroundColor': '#3986ac',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#1a3c4d' }]
  },
  'hint--infohint--top-left:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top-right:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--bottom-left:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom-right:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--left:before': {
    'borderLeftColor': '#3986ac'
  },
  'hint--infohint--right:before': {
    'borderRightColor': '#3986ac'
  },
  // *
 * Success
  'hint--success:after': {
    'backgroundColor': '#458746',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#1a321a' }]
  },
  'hint--successhint--top-left:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top-right:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--bottom-left:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom-right:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--left:before': {
    'borderLeftColor': '#458746'
  },
  'hint--successhint--right:before': {
    'borderRightColor': '#458746'
  },
  // *
 * source: hint-always.scss
 *
 * Defines a persisted tooltip which shows always.
 *
 * Classes added:
 * 	1) hint--always
 *
  'hint--always:after': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--always:before': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--alwayshint--top:after': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--alwayshint--top:before': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--alwayshint--top-left:after': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--alwayshint--top-left:before': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--alwayshint--top-right:after': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--alwayshint--top-right:before': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--alwayshint--bottom:after': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--alwayshint--bottom:before': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--alwayshint--bottom-left:after': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--alwayshint--bottom-left:before': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--alwayshint--bottom-right:after': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--alwayshint--bottom-right:before': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--alwayshint--left:after': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--alwayshint--left:before': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--alwayshint--right:after': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--alwayshint--right:before': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // *
 * source: hint-rounded.scss
 *
 * Defines rounded corner tooltips.
 *
 * Classes added:
 * 	1) hint--rounded
 *
  'hint--rounded:after': {
    'borderRadius': '4px'
  },
  // *
 * source: hint-effects.scss
 *
 * Defines various transition effects for the tooltips.
 *
 * Classes added:
 * 	1) hint--no-animate
 * 	2) hint--bounce
 *
  'hint--no-animate:before': {
    'WebkitTransitionDuration': '0ms',
    'MozTransitionDuration': '0ms',
    'transitionDuration': '0ms'
  },
  'hint--no-animate:after': {
    'WebkitTransitionDuration': '0ms',
    'MozTransitionDuration': '0ms',
    'transitionDuration': '0ms'
  },
  'hint--bounce:before': {
    'WebkitTransition': 'opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'MozTransition': 'opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'transition': 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)'
  },
  'hint--bounce:after': {
    'WebkitTransition': 'opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'MozTransition': 'opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)',
    'transition': 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24)'
  },
  // *
 * based on hint.css with html content support
  'hint--htmlhint:after': {
    'display': 'none',
    'opacity': '0'
  },
  'hint__content': {
    'background': '#383838',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'pointerEvents': 'none'
  },
  'hint--hoverable hint__content': {
    'pointerEvents': 'auto'
  },
  'hint--html': {
    'position': 'relative',
    'display': 'inline-block',
    // *
   * tooltip arrow
  },
  'hint--html:before': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  'hint--html:after': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'pointerEvents': 'none',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  'hint--html:hover:before': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:hover:after': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:hover:before': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  'hint--html:hover:after': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  'hint--html:before': {
    'content': '''',
    'position': 'absolute',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'zIndex': '1000001'
  },
  'hint--html hint__content': {
    'position': 'absolute',
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    'visibility': 'hidden',
    'opacity': '0',
    'zIndex': '1000000',
    'WebkitTransition': '0.3s ease',
    'MozTransition': '0.3s ease',
    'transition': '0.3s ease',
    'WebkitTransitionDelay': '0ms',
    'MozTransitionDelay': '0ms',
    'transitionDelay': '0ms'
  },
  'hint--html:hover hint__content': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:focus hint__content': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'hint--html:hover hint__content': {
    'WebkitTransitionDelay': '100ms',
    'MozTransitionDelay': '100ms',
    'transitionDelay': '100ms'
  },
  'hint--htmlhint--notrans:before': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'transition': 'none'
  },
  'hint--htmlhint--notrans:after': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'transition': 'none'
  },
  'hint--htmlhint--notrans hint__content': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'transition': 'none'
  },
  // *
 * top tooltip
  'hint--top hint__content': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top hint__content': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--top hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--top:hover hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top:focus hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--top-left hint__content': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left hint__content': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--top-left:before': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--top-left hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }]
  },
  'hint--top-left hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--top-left:hover hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-left:focus hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--top-right hint__content': {
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--top-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right hint__content': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--top-right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--top-right hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--top-right hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--top-right:hover hint__content': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--top-right:focus hint__content': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  // *
 * bottom tooltip
  'hint--bottom hint__content': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom:before': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom hint__content': {
    'WebkitTransform': 'translateX(-50%)',
    'MozTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'hint--bottom hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--bottom:hover hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom:focus hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--bottom-left hint__content': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-left:before': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left hint__content': {
    'WebkitTransform': 'translateX(-100%)',
    'MozTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'hint--bottom-left:before': {
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'hint--bottom-left hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }]
  },
  'hint--bottom-left hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--bottom-left:hover hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-left:focus hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--bottom-right hint__content': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'hint--bottom-right:before': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right hint__content': {
    'WebkitTransform': 'translateX(0)',
    'MozTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'hint--bottom-right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--bottom-right hint__content': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }]
  },
  'hint--bottom-right hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--bottom-right:hover hint__content': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--bottom-right:focus hint__content': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  // *
 * right tooltip
  'hint--right:before': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--right hint__content': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--right hint__content': {
    'left': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--right hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -12 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--right:hover hint__content': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  'hint--right:focus hint__content': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // *
 * left tooltip
  'hint--left:before': {
    'marginRight': [{ 'unit': 'px', 'value': -12 }],
    'marginBottom': [{ 'unit': 'px', 'value': -6 }]
  },
  'hint--left hint__content': {
    'marginBottom': [{ 'unit': 'px', 'value': -14 }]
  },
  'hint--left hint__content': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'hint--left hint__content:after': {
    'content': '' '',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'opacity': '0',
    'backgroundColor': 'red'
  },
  'hint--left:hover hint__content': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--left:focus hint__content': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  // *
 * Error
  'hint--error hint__content': {
    'backgroundColor': '#b34e4d'
  },
  'hint--errorhint--top-left:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top-right:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--top:before': {
    'borderTopColor': '#b34e4d'
  },
  'hint--errorhint--bottom-left:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom-right:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--bottom:before': {
    'borderBottomColor': '#b34e4d'
  },
  'hint--errorhint--left:before': {
    'borderLeftColor': '#b34e4d'
  },
  'hint--errorhint--right:before': {
    'borderRightColor': '#b34e4d'
  },
  // *
 * Warning
  'hint--warning hint__content': {
    'backgroundColor': '#c09854'
  },
  'hint--warninghint--top-left:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top-right:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--top:before': {
    'borderTopColor': '#c09854'
  },
  'hint--warninghint--bottom-left:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom-right:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--bottom:before': {
    'borderBottomColor': '#c09854'
  },
  'hint--warninghint--left:before': {
    'borderLeftColor': '#c09854'
  },
  'hint--warninghint--right:before': {
    'borderRightColor': '#c09854'
  },
  // *
 * Info
  'hint--info hint__content': {
    'backgroundColor': '#3986ac'
  },
  'hint--infohint--top-left:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top-right:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--top:before': {
    'borderTopColor': '#3986ac'
  },
  'hint--infohint--bottom-left:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom-right:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--bottom:before': {
    'borderBottomColor': '#3986ac'
  },
  'hint--infohint--left:before': {
    'borderLeftColor': '#3986ac'
  },
  'hint--infohint--right:before': {
    'borderRightColor': '#3986ac'
  },
  // *
 * Success
  'hint--success hint__content': {
    'backgroundColor': '#458746'
  },
  'hint--successhint--top-left:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top-right:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--top:before': {
    'borderTopColor': '#458746'
  },
  'hint--successhint--bottom-left:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom-right:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--bottom:before': {
    'borderBottomColor': '#458746'
  },
  'hint--successhint--left:before': {
    'borderLeftColor': '#458746'
  },
  'hint--successhint--right:before': {
    'borderRightColor': '#458746'
  },
  'hint--htmlhint--hidden:hover:after': {
    'opacity': '0',
    'visibility': 'hidden'
  },
  'hint--htmlhint--hidden:hover:before': {
    'opacity': '0',
    'visibility': 'hidden'
  },
  'hint--htmlhint--hidden:hover hint__content': {
    'opacity': '0',
    'visibility': 'hidden'
  },
  'hint--always:after': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--always:before': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--always hint__content': {
    'opacity': '1',
    'visibility': 'visible'
  },
  'hint--alwayshint--top hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(-8px)',
    'MozTransform': 'translateX(-50%) translateY(-8px)',
    'transform': 'translateX(-50%) translateY(-8px)'
  },
  'hint--alwayshint--top-left hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(-8px)',
    'MozTransform': 'translateX(-100%) translateY(-8px)',
    'transform': 'translateX(-100%) translateY(-8px)'
  },
  'hint--alwayshint--top-right hint__content': {
    'WebkitTransform': 'translateY(-8px)',
    'MozTransform': 'translateY(-8px)',
    'transform': 'translateY(-8px)'
  },
  'hint--alwayshint--bottom hint__content': {
    'WebkitTransform': 'translateX(-50%) translateY(8px)',
    'MozTransform': 'translateX(-50%) translateY(8px)',
    'transform': 'translateX(-50%) translateY(8px)'
  },
  'hint--alwayshint--bottom-left hint__content': {
    'WebkitTransform': 'translateX(-100%) translateY(8px)',
    'MozTransform': 'translateX(-100%) translateY(8px)',
    'transform': 'translateX(-100%) translateY(8px)'
  },
  'hint--alwayshint--bottom-right hint__content': {
    'WebkitTransform': 'translateY(8px)',
    'MozTransform': 'translateY(8px)',
    'transform': 'translateY(8px)'
  },
  'hint--alwayshint--left hint__content': {
    'WebkitTransform': 'translateX(-8px)',
    'MozTransform': 'translateX(-8px)',
    'transform': 'translateX(-8px)'
  },
  'hint--alwayshint--right hint__content': {
    'WebkitTransform': 'translateX(8px)',
    'MozTransform': 'translateX(8px)',
    'transform': 'translateX(8px)'
  },
  // ! normalize.css v3.0.2 | MIT License | git.io/normalize
  // *
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
  'html': {
    'fontFamily': 'sans-serif',
    // 1
    'MsTextSizeAdjust': '100%',
    // 2
    'WebkitTextSizeAdjust': '100%',
    // 2
  },
  // *
 * Remove default margin.
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // HTML5 display definitions
   ==========================================================================
  // *
 * Correct `block` display not defined for any HTML5 element in IE 8/9.
 * Correct `block` display not defined for `details` or `summary` in IE 10/11
 * and Firefox.
 * Correct `block` display not defined for `main` in IE 11.
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'details': {
    'display': 'block'
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'hgroup': {
    'display': 'block'
  },
  'main': {
    'display': 'block'
  },
  'menu': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'summary': {
    'display': 'block'
  },
  // *
 * 1. Correct `inline-block` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
  'audio': {
    'display': 'inline-block',
    // 1
    'verticalAlign': 'baseline',
    // 2
  },
  'canvas': {
    'display': 'inline-block',
    // 1
    'verticalAlign': 'baseline',
    // 2
  },
  'progress': {
    'display': 'inline-block',
    // 1
    'verticalAlign': 'baseline',
    // 2
  },
  'video': {
    'display': 'inline-block',
    // 1
    'verticalAlign': 'baseline',
    // 2
  },
  // *
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  // *
 * Address `[hidden]` styling not present in IE 8/9/10.
 * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.
  '[hidden]': {
    'display': 'none'
  },
  'template': {
    'display': 'none'
  },
  // Links
   ==========================================================================
  // *
 * Remove the gray background color from active links in IE 10.
  'a': {
    'backgroundColor': 'transparent'
  },
  // *
 * Improve readability when focused and also mouse hovered in all browsers.
  'a:active': {
    'outline': '0'
  },
  'a:hover': {
    'outline': '0'
  },
  // Text-level semantics
   ==========================================================================
  // *
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }]
  },
  // *
 * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
  'b': {
    'fontWeight': 'bold'
  },
  'strong': {
    'fontWeight': 'bold'
  },
  // *
 * Address styling not present in Safari and Chrome.
  'dfn': {
    'fontStyle': 'italic'
  },
  // *
 * Address variable `h1` font-size and margin within `section` and `article`
 * contexts in Firefox 4+, Safari, and Chrome.
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'margin': [{ 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }]
  },
  // *
 * Address styling not present in IE 8/9.
  'mark': {
    'background': '#ff0',
    'color': '#000'
  },
  // *
 * Address inconsistent and variable font size in all browsers.
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  // *
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  // Embedded content
   ==========================================================================
  // *
 * Remove border when inside `a` element in IE 8/9/10.
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  // *
 * Correct overflow not hidden in IE 9/10/11.
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  // Grouping content
   ==========================================================================
  // *
 * Address margin not present in IE 8/9 and Safari.
  'figure': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }]
  },
  // *
 * Address differences between Firefox and other browsers.
  'hr': {
    'MozBoxSizing': 'content-box',
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  // *
 * Contain overflow in all browsers.
  'pre': {
    'overflow': 'auto'
  },
  // *
 * Address odd `em`-unit font size rendering in all browsers.
  'code': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  // Forms
   ==========================================================================
  // *
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of `select`, unless a `border` property is set.
  // *
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
  'button': {
    'color': 'inherit',
    // 1
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    // 2
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 3
  },
  'input': {
    'color': 'inherit',
    // 1
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    // 2
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 3
  },
  'optgroup': {
    'color': 'inherit',
    // 1
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    // 2
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 3
  },
  'select': {
    'color': 'inherit',
    // 1
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    // 2
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 3
  },
  'textarea': {
    'color': 'inherit',
    // 1
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    // 2
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 3
  },
  // *
 * Address `overflow` set to `hidden` in IE 8/9/10/11.
  'button': {
    'overflow': 'visible'
  },
  // *
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct `select` style inheritance in Firefox.
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  // *
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
  'button': {
    'WebkitAppearance': 'button',
    // 2
    'cursor': 'pointer',
    // 3
  },
  'html input[type="button"]': {
    'WebkitAppearance': 'button',
    // 2
    'cursor': 'pointer',
    // 3
  },
  'input[type="reset"]': {
    'WebkitAppearance': 'button',
    // 2
    'cursor': 'pointer',
    // 3
  },
  'input[type="submit"]': {
    'WebkitAppearance': 'button',
    // 2
    'cursor': 'pointer',
    // 3
  },
  // *
 * Re-set default cursor for disabled elements.
  'button[disabled]': {
    'cursor': 'default !important'
  },
  'html input[disabled]': {
    'cursor': 'default !important'
  },
  // *
 * Remove inner padding and border in Firefox 4+.
  'button::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // *
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
  'input': {
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  // *
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to `content-box` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
  'input[type="checkbox"]': {
    'boxSizing': 'border-box',
    // 1
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  'input[type="radio"]': {
    'boxSizing': 'border-box',
    // 1
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  // *
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * `font-size` values of the `input`, it causes the cursor style of the
 * decrement button to change from `default` to `text`.
  'input[type="number"]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'input[type="number"]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // *
 * 1. Address `appearance` set to `searchfield` in Safari and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari and Chrome
 *    (include `-moz` to future-proof).
  'input[type="search"]': {
    'WebkitAppearance': 'textfield',
    // 1
    'MozBoxSizing': 'content-box',
    'WebkitBoxSizing': 'content-box',
    // 2
    'boxSizing': 'content-box'
  },
  // *
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and `textfield` appearance).
  'input[type="search"]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  'input[type="search"]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  // *
 * Define consistent border, margin, and padding.
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c0c0c0' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }]
  },
  // *
 * 1. Correct `color` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
  'legend': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    // 1
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  // *
 * Remove default vertical scrollbar in IE 8/9/10/11.
  'textarea': {
    'overflow': 'auto'
  },
  // *
 * Don't inherit the `font-weight` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
  'optgroup': {
    'fontWeight': 'bold'
  },
  // Tables
   ==========================================================================
  // *
 * Remove most spacing between table cells.
  'table': {
    'borderCollapse': 'collapse',
    'borderSpacing': '0'
  },
  'td': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'th': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // ------------------------------------*
  RESET
*------------------------------------
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'div': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dl': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dt': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dd': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ol': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'pre': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'form': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'fieldset': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blockquote': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'th': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'td': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'table': {
    'borderCollapse': 'collapse',
    'borderSpacing': '0'
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'address': {
    'fontStyle': 'normal',
    'fontWeight': 'normal'
  },
  'caption': {
    'fontStyle': 'normal',
    'fontWeight': 'normal'
  },
  'cite': {
    'fontStyle': 'normal',
    'fontWeight': 'normal'
  },
  'dfn': {
    'fontStyle': 'normal',
    'fontWeight': 'normal'
  },
  'th': {
    'fontStyle': 'normal',
    'fontWeight': 'normal'
  },
  'var': {
    'fontStyle': 'normal',
    'fontWeight': 'normal'
  },
  'caption': {
    'textAlign': 'left'
  },
  'th': {
    'textAlign': 'left'
  },
  'h1': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'normal'
  },
  'h2': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'normal'
  },
  'h3': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'normal'
  },
  'h4': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'normal'
  },
  'h5': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'normal'
  },
  'h6': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'normal'
  },
  'q:before': {
    'content': ''''
  },
  'q:after': {
    'content': ''''
  },
  'abbr': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'acronym': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  '*': {
    'boxSizing': 'border-box',
    'WebkitTapHighlightColor': 'transparent'
  },
  '*:before': {
    'boxSizing': 'border-box'
  },
  '*:after': {
    'boxSizing': 'border-box'
  },
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'mui-text-full-black': {
    'color': 'black'
  },
  'mui-app-bar mui-app-bar-title': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'h3': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-headline': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'h4': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-title': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'h5': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-subhead-1': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-subhead-2': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-subheader': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'h6': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-body-2': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'p': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-body-1': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-card mui-card-toolbar': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-menu': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-flat-button': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-raised-button mui-raised-button-label': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-button': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-text-dark-black': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-font-style-display-4': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'mui-font-style-display-3': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'h1': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'mui-font-style-display-2': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'h2': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'mui-font-style-display-1': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'mui-font-style-caption': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'mui-text-light-black': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'mui-text-min-black': {
    'color': 'rgba(0, 0, 0, 0.26)'
  },
  'mui-text-full-white': {
    'color': 'white'
  },
  'mui-text-dark-white': {
    'color': 'rgba(255, 255, 255, 0.87)'
  },
  'mui-text-light-white': {
    'color': 'rgba(255, 255, 255, 0.54)'
  },
  'mui-font-style-display-4': {
    'fontWeight': '300'
  },
  'mui-menu-item mui-menu-item-data': {
    'fontWeight': '300'
  },
  'mui-font-weight-light': {
    'fontWeight': '300'
  },
  'mui-font-style-display-3': {
    'fontWeight': '400'
  },
  'h1': {
    'fontWeight': '400'
  },
  'mui-font-style-display-2': {
    'fontWeight': '400'
  },
  'h2': {
    'fontWeight': '400'
  },
  'mui-font-style-display-1': {
    'fontWeight': '400'
  },
  'mui-app-bar mui-app-bar-title': {
    'fontWeight': '400'
  },
  'h3': {
    'fontWeight': '400'
  },
  'mui-font-style-headline': {
    'fontWeight': '400'
  },
  'h5': {
    'fontWeight': '400'
  },
  'mui-font-style-subhead-1': {
    'fontWeight': '400'
  },
  'mui-font-style-subhead-2': {
    'fontWeight': '400'
  },
  'p': {
    'fontWeight': '400'
  },
  'mui-font-style-body-1': {
    'fontWeight': '400'
  },
  'mui-font-style-caption': {
    'fontWeight': '400'
  },
  'mui-font-weight-normal': {
    'fontWeight': '400'
  },
  'h4': {
    'fontWeight': '500'
  },
  'mui-font-style-title': {
    'fontWeight': '500'
  },
  'mui-subheader': {
    'fontWeight': '500'
  },
  'h6': {
    'fontWeight': '500'
  },
  'mui-font-style-body-2': {
    'fontWeight': '500'
  },
  'mui-card mui-card-toolbar': {
    'fontWeight': '500'
  },
  'mui-font-style-menu': {
    'fontWeight': '500'
  },
  'mui-flat-button': {
    'fontWeight': '500'
  },
  'mui-raised-button mui-raised-button-label': {
    'fontWeight': '500'
  },
  'mui-font-style-button': {
    'fontWeight': '500'
  },
  'mui-date-picker-calendar mui-date-picker-calendar-week-title': {
    'fontWeight': '500'
  },
  'mui-date-picker-calendar-toolbar mui-date-picker-calendar-toolbar-title': {
    'fontWeight': '500'
  },
  'mui-font-weight-medium': {
    'fontWeight': '500'
  },
  // Type Styles
  'mui-font-style-display-4': {
    'fontSize': [{ 'unit': 'px', 'value': 112 }],
    'lineHeight': [{ 'unit': 'px', 'value': 128 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -7 }],
    'paddingTop': [{ 'unit': 'px', 'value': 17 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'mui-font-style-display-3': {
    'fontSize': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 64 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -2 }],
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'marginBottom': [{ 'unit': 'px', 'value': 28 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 45 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'marginBottom': [{ 'unit': 'px', 'value': 11 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }]
  },
  'mui-font-style-display-2': {
    'fontSize': [{ 'unit': 'px', 'value': 45 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'marginBottom': [{ 'unit': 'px', 'value': 11 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 34 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }]
  },
  'mui-font-style-display-1': {
    'fontSize': [{ 'unit': 'px', 'value': 34 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }]
  },
  'mui-app-bar mui-app-bar-title': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'paddingTop': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'paddingTop': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-headline': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'paddingTop': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'paddingTop': [{ 'unit': 'px', 'value': 19 }],
    'marginBottom': [{ 'unit': 'px', 'value': 13 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-title': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'paddingTop': [{ 'unit': 'px', 'value': 19 }],
    'marginBottom': [{ 'unit': 'px', 'value': 13 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'paddingTop': [{ 'unit': 'px', 'value': 2 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-subhead-1': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'paddingTop': [{ 'unit': 'px', 'value': 2 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-subhead-2': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'paddingTop': [{ 'unit': 'px', 'value': 2 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'paddingTop': [{ 'unit': 'px', 'value': 3 }],
    'marginBottom': [{ 'unit': 'px', 'value': 13 }]
  },
  'mui-font-style-subhead-1': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'paddingTop': [{ 'unit': 'px', 'value': 3 }],
    'marginBottom': [{ 'unit': 'px', 'value': 13 }]
  },
  'mui-subheader': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'paddingTop': [{ 'unit': 'px', 'value': 4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'paddingTop': [{ 'unit': 'px', 'value': 4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-body-2': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'paddingTop': [{ 'unit': 'px', 'value': 4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'p': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'marginBottom': [{ 'unit': 'px', 'value': 14 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-body-1': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'marginBottom': [{ 'unit': 'px', 'value': 14 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-caption': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'marginBottom': [{ 'unit': 'px', 'value': 14 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-card mui-card-toolbar': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'marginBottom': [{ 'unit': 'px', 'value': 14 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-font-style-menu': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'marginBottom': [{ 'unit': 'px', 'value': 14 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-flat-button': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'mui-raised-button mui-raised-button-label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'mui-font-style-button': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'mui-predefined-layout-1 mui-app-content-canvas': {
    'paddingTop': [{ 'unit': 'px', 'value': 64 }]
  },
  'mui-predefined-layout-1 mui-app-bar': {
    'position': 'fixed',
    'height': [{ 'unit': 'px', 'value': 64 }]
  },
  'react-draggable': {
    'userSelect': 'none'
  },
  'react-draggable-dragging': {
    'userSelect': 'none'
  },
  'react-draggable': {
    'position': 'relative'
  },
  'mui-app-bar': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 64 }],
    'backgroundColor': '#00bcd4',
    'zIndex': '5'
  },
  'mui-app-bar mui-paper-container': {
    'paddingLeft': [{ 'unit': 'px', 'value': 24 }],
    'paddingRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-app-bar mui-icon-button': {
    'marginTop': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-app-bar mui-icon-button *': {
    'fill': 'rgba(255, 255, 255, 0.87)',
    'color': 'rgba(255, 255, 255, 0.87)'
  },
  'mui-app-bar mui-app-bar-title': {
    'color': 'rgba(255, 255, 255, 0.87)',
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 64 }],
    'float': 'left'
  },
  'mui-app-bar mui-app-bar-navigation-icon-button': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'marginLeft': [{ 'unit': 'px', 'value': -16 }]
  },
  'mui-card': {
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }]
  },
  'mui-card mui-card-toolbar': {
    'margin': [{ 'unit': 'px', 'value': -24 }, { 'unit': 'px', 'value': -24 }, { 'unit': 'px', 'value': -24 }, { 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'mui-checkbox mui-checkbox-icon': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'marginRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'mui-checkbox mui-checkbox-icon mui-checkbox-check': {
    'position': 'absolute',
    'opacity': '0',
    'transform': 'scale(0)',
    'transformOrigin': '50% 50%',
    'transition': 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms'
  },
  'mui-checkbox mui-checkbox-icon mui-checkbox-check *': {
    'fill': '#00bcd4'
  },
  'mui-checkbox mui-checkbox-icon mui-checkbox-box': {
    'position': 'absolute'
  },
  'mui-checkbox mui-checkbox-icon mui-checkbox-box *': {
    'fill': 'rgba(0, 0, 0, 0.87)',
    'transition': 'all 2s cubic-bezier(0.23, 1, 0.32, 1) 200ms'
  },
  'mui-checkboxmui-is-switched mui-checkbox-icon mui-checkbox-check': {
    'transition': 'all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0s',
    'opacity': '1',
    'transform': 'scale(1)',
    'transformOrigin': '50% 50%',
    'transition': 'opacity 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-checkboxmui-is-switched mui-checkbox-icon mui-checkbox-box': {
    'transition': 'all 100s cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-checkboxmui-is-switched mui-checkbox-icon mui-checkbox-box *': {
    'fill': '#00bcd4'
  },
  'mui-checkboxmui-is-disabled mui-checkbox-icon mui-checkbox-check *': {
    'fill': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-checkboxmui-is-disabled mui-checkbox-icon mui-checkbox-box *': {
    'fill': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-checkboxmui-is-required mui-checkbox-icon mui-checkbox-box *': {
    'fill': '#00bcd4'
  },
  'mui-date-picker-calendar': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'mui-date-picker-calendar mui-date-picker-calendar-week-title': {
    'color': 'rgba(128, 128, 128, 0.87)',
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }]
  },
  'mui-date-picker-calendar mui-date-picker-calendar-week-title:before': {
    'content': '" "',
    'display': 'table'
  },
  'mui-date-picker-calendar mui-date-picker-calendar-week-title:after': {
    'content': '" "',
    'display': 'table'
  },
  'mui-date-picker-calendar mui-date-picker-calendar-week-title:after': {
    'clear': 'both'
  },
  'mui-date-picker-calendar mui-date-picker-calendar-week-title-day': {
    'listStyle': 'none',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 32 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }]
  },
  'mui-date-picker-calendar mui-date-picker-calendar-container': {
    'transition': '"height" 150ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-date-picker-calendarmui-is-4week mui-date-picker-calendar-container': {
    'height': [{ 'unit': 'px', 'value': 228 }]
  },
  'mui-date-picker-calendarmui-is-5week mui-date-picker-calendar-container': {
    'height': [{ 'unit': 'px', 'value': 268 }]
  },
  'mui-date-picker-calendarmui-is-6week mui-date-picker-calendar-container': {
    'height': [{ 'unit': 'px', 'value': 308 }]
  },
  'mui-is-landscape mui-date-picker-calendar:before': {
    'content': '" "',
    'display': 'table'
  },
  'mui-is-landscape mui-date-picker-calendar:after': {
    'content': '" "',
    'display': 'table'
  },
  'mui-is-landscape mui-date-picker-calendar:after': {
    'clear': 'both'
  },
  'mui-is-landscape mui-date-picker-calendar-date-display': {
    'width': [{ 'unit': 'px', 'value': 280 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'float': 'left'
  },
  'mui-is-landscape mui-date-picker-calendar-container': {
    'width': [{ 'unit': 'px', 'value': 280 }],
    'float': 'right'
  },
  'mui-date-picker-calendar-month': {
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }],
    'backgroundColor': '#ffffff'
  },
  'mui-date-picker-calendar-month mui-date-picker-calendar-month-week:before': {
    'content': '" "',
    'display': 'table'
  },
  'mui-date-picker-calendar-month mui-date-picker-calendar-month-week:after': {
    'content': '" "',
    'display': 'table'
  },
  'mui-date-picker-calendar-month mui-date-picker-calendar-month-week:after': {
    'clear': 'both'
  },
  'mui-date-picker-calendar-toolbar': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'position': 'relative'
  },
  'mui-date-picker-calendar-toolbar mui-date-picker-calendar-toolbar-title': {
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'center'
  },
  'mui-date-picker-calendar-toolbar mui-date-picker-calendar-toolbar-button-left': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-date-picker-calendar-toolbar mui-date-picker-calendar-toolbar-button-right': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-date-picker-date-display': {
    'textAlign': 'center',
    'position': 'relative'
  },
  'mui-date-picker-date-display mui-date-picker-date-display-dow': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'backgroundColor': '#0097a7',
    'color': '#ffffff',
    'borderRadius': '2px 2px 0 0'
  },
  'mui-date-picker-date-display mui-date-picker-date-display-date': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#00bcd4',
    'color': '#ffffff'
  },
  'mui-date-picker-date-display mui-date-picker-date-display-month': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'textTransform': 'uppercase'
  },
  'mui-date-picker-date-display mui-date-picker-date-display-year': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'textTransform': 'uppercase'
  },
  'mui-date-picker-date-display mui-date-picker-date-display-day': {
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 58 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'fontSize': [{ 'unit': 'px', 'value': 58 }]
  },
  'mui-date-picker-date-display mui-date-picker-date-display-year': {
    'color': 'white'
  },
  'mui-is-landscape mui-date-picker-date-display *': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-is-landscape mui-date-picker-date-display-dow': {
    'borderRadius': '2px 0 0 0'
  },
  'mui-is-landscape mui-date-picker-date-display-date': {
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-is-landscape mui-date-picker-date-display-day': {
    'fontSize': [{ 'unit': 'px', 'value': 76 }],
    'lineHeight': [{ 'unit': 'px', 'value': 76 }],
    'height': [{ 'unit': 'px', 'value': 76 }]
  },
  'mui-is-landscape mui-date-picker-date-display-month': {
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'lineHeight': [{ 'unit': 'px', 'value': 26 }],
    'height': [{ 'unit': 'px', 'value': 26 }]
  },
  'mui-is-landscape mui-date-picker-date-display-year': {
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'lineHeight': [{ 'unit': 'px', 'value': 26 }],
    'height': [{ 'unit': 'px', 'value': 26 }]
  },
  'mui-is-landscape mui-is-5week mui-date-picker-date-display-date': {
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-is-landscape mui-is-5week mui-date-picker-date-display-day': {
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-is-landscape mui-is-6week mui-date-picker-date-display-date': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-is-landscape mui-is-6week mui-date-picker-date-display-day': {
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-date-picker-dialog': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-date-picker-dialog mui-date-picker-dialog-windowmui-dialog-window-contents': {
    'width': [{ 'unit': 'px', 'value': 280 }]
  },
  'mui-is-landscape mui-date-picker-dialog-windowmui-dialog-window-contents': {
    'width': [{ 'unit': 'px', 'value': 560 }]
  },
  'mui-date-picker-day-button': {
    'position': 'relative',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 36 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }]
  },
  'mui-date-picker-day-button mui-date-picker-day-button-select': {
    'position': 'absolute',
    'backgroundColor': '#0097a7',
    'height': [{ 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'opacity': '0',
    'borderRadius': '50%',
    'transform': 'scale(0)'
  },
  'mui-date-picker-day-button mui-date-picker-day-button-label': {
    'position': 'relative'
  },
  'mui-date-picker-day-buttonmui-is-selected mui-date-picker-day-button-label': {
    'color': '#ffffff'
  },
  'mui-date-picker-day-buttonmui-is-selected mui-date-picker-day-button-select': {
    'opacity': '1',
    'transform': 'scale(1)'
  },
  'mui-date-picker-day-buttonmui-is-disabled': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-date-picker-day-buttonmui-is-current-date': {
    'color': '#00bcd4'
  },
  'mui-dialog-window': {
    'position': 'fixed',
    'zIndex': '10',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -10000 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'transition': 'left 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms'
  },
  'mui-dialog-window mui-dialog-window-contents': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'maxWidth': [{ 'unit': 'px', 'value': 768 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'zIndex': '10',
    'background': '#ffffff',
    'opacity': '0'
  },
  'mui-dialog-window mui-dialog-window-actions': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'marginBottom': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'right'
  },
  'mui-dialog-window mui-dialog-window-actions mui-dialog-window-action': {
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-dialog-windowmui-is-shown': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-dialog-windowmui-is-shown mui-dialog-window-contents': {
    'opacity': '1',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'translate3d(0, 64px, 0)'
  },
  'mui-dialog mui-dialog-title': {
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-dialog mui-dialog-content': {
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }]
  },
  'mui-drop-down-icon': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 48 }, { 'unit': 'string', 'value': '!important' }],
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 56 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'cursor': 'pointer'
  },
  'mui-drop-down-iconmui-open mui-icon-highlight': {
    'backgroundColor': 'rgba(0, 0, 0, 0.1)'
  },
  'mui-drop-down-iconmui-open mui-menu-control mui-menu-control-bg': {
    'opacity': '0'
  },
  'mui-drop-down-iconmui-open mui-menu-control:hover mui-menu-control-bg': {
    'opacity': '0'
  },
  'mui-drop-down-iconmui-open mui-menu-control mui-menu-label': {
    'top': [{ 'unit': 'px', 'value': 28 }],
    'opacity': '0'
  },
  'mui-drop-down-iconmui-open mui-menu-control:hover mui-menu-label': {
    'top': [{ 'unit': 'px', 'value': 28 }],
    'opacity': '0'
  },
  'mui-drop-down-iconmui-open mui-menu': {
    'opacity': '1'
  },
  'mui-drop-down-icon mui-menu': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'right': [{ 'unit': 'px', 'value': -14 }, { 'unit': 'string', 'value': '!important' }],
    'top': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mui-drop-down-icon mui-menu mui-menu-item': {
    'paddingRight': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }]
  },
  'mui-drop-down-menu': {
    'position': 'relative',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 56 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'mui-drop-down-menu *': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-drop-down-menumui-open mui-menu-control mui-menu-control-bg': {
    'opacity': '0'
  },
  'mui-drop-down-menumui-open mui-menu-control:hover mui-menu-control-bg': {
    'opacity': '0'
  },
  'mui-drop-down-menumui-open mui-menu-control:focus mui-menu-control-bg': {
    'opacity': '0'
  },
  'mui-drop-down-menumui-open mui-menu-control mui-menu-label': {
    'top': [{ 'unit': 'px', 'value': 28 }],
    'opacity': '0'
  },
  'mui-drop-down-menumui-open mui-menu-control:hover mui-menu-label': {
    'top': [{ 'unit': 'px', 'value': 28 }],
    'opacity': '0'
  },
  'mui-drop-down-menumui-open mui-menu-control:focus mui-menu-label': {
    'top': [{ 'unit': 'px', 'value': 28 }],
    'opacity': '0'
  },
  'mui-drop-down-menumui-open mui-menu': {
    'opacity': '1'
  },
  'mui-drop-down-menu mui-menu-control': {
    'cursor': 'pointer',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'mui-drop-down-menu mui-menu-control:before': {
    'content': '" "',
    'display': 'table'
  },
  'mui-drop-down-menu mui-menu-control:after': {
    'content': '" "',
    'display': 'table'
  },
  'mui-drop-down-menu mui-menu-control:after': {
    'clear': 'both'
  },
  'mui-drop-down-menu mui-menu-control mui-menu-control-bg': {
    'backgroundColor': '#ffffff',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0'
  },
  'mui-drop-down-menu mui-menu-control:hover mui-menu-control-bg': {
    'opacity': '1'
  },
  'mui-drop-down-menu mui-menu-control:focus mui-menu-control-bg': {
    'opacity': '1'
  },
  'mui-drop-down-menu mui-menu-control mui-menu-label': {
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'position': 'absolute',
    'paddingLeft': [{ 'unit': 'px', 'value': 24 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '1'
  },
  'mui-drop-down-menu mui-menu-control mui-menu-drop-down-icon': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 16 }],
    'right': [{ 'unit': 'px', 'value': 16 }]
  },
  'mui-drop-down-menu mui-menu-control mui-menu-drop-down-icon *': {
    'fill': 'rgba(0, 0, 0, 0.26)'
  },
  'mui-drop-down-menu mui-menu-control mui-menu-control-underline': {
    'borderTop': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e0e0e0' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'mui-drop-down-menu mui-menu mui-menu-item': {
    'paddingRight': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'whiteSpace': 'nowrap'
  },
  'mui-enhanced-button': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': 'none'
  },
  'mui-enhanced-button:focus': {
    'outline': 'none'
  },
  'mui-enhanced-buttonmui-is-link-button': {
    'display': 'inline-block',
    'cursor': 'pointer',
    'textDecoration': 'none'
  },
  'mui-enhanced-buttonmui-is-link-button:hover': {
    'textDecoration': 'none'
  },
  'mui-enhanced-buttonmui-is-link-buttonmui-is-disabled': {
    'cursor': 'default'
  },
  'mui-enhanced-switch': {
    'position': 'relative',
    'cursor': 'pointer',
    'overflow': 'visible',
    'display': 'table',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'mui-enhanced-switch mui-enhanced-switch-input': {
    'position': 'absolute',
    'cursor': 'pointer',
    'pointerEvents': 'all',
    'opacity': '0',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '2',
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-enhanced-switch mui-enhanced-switch-wrap': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'float': 'left',
    'position': 'relative',
    'display': 'table-column'
  },
  'mui-enhanced-switch mui-enhanced-switch-wrap mui-touch-ripple': {
    'width': [{ 'unit': '%H', 'value': 2 }],
    'height': [{ 'unit': '%V', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': -12 }]
  },
  'mui-enhanced-switch mui-enhanced-switch-wrap mui-focus-ripple-inner': {
    'width': [{ 'unit': '%H', 'value': 2 }],
    'height': [{ 'unit': '%V', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': -12 }],
    'left': [{ 'unit': 'px', 'value': -12 }]
  },
  'mui-enhanced-switch mui-switch-label': {
    'float': 'left',
    'position': 'relative',
    'display': 'table-column',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-enhanced-switchmui-is-switched mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(0, 188, 212, 0.2)'
  },
  'mui-enhanced-switchmui-is-switched mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(0, 188, 212, 0.2)'
  },
  'mui-enhanced-textarea mui-enhanced-textarea-shadow': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'resize': 'none'
  },
  'mui-enhanced-textarea mui-enhanced-textarea-input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'resize': 'none'
  },
  'mui-enhanced-textarea mui-enhanced-textarea-input': {
    'overflow': 'hidden'
  },
  'mui-enhanced-textarea mui-enhanced-textarea-shadow': {
    'transform': 'scale(0)',
    'position': 'absolute'
  },
  'mui-flat-button': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'borderRadius': '2px',
    'userSelect': 'none',
    'position': 'relative',
    'overflow': 'hidden',
    'backgroundColor': '#ffffff',
    'color': '#00bcd4',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'minWidth': [{ 'unit': 'px', 'value': 88 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-flat-button mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(0, 0, 0, 0.1)'
  },
  'mui-flat-button mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(0, 0, 0, 0.07)'
  },
  'mui-flat-button mui-flat-button-label': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }]
  },
  'mui-flat-button:hover': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-flat-buttonmui-is-keyboard-focused': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-flat-buttonmui-is-disabled': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-flat-buttonmui-is-disabled:hover': {
    'backgroundColor': 'inherit'
  },
  'mui-flat-buttonmui-is-primary': {
    'color': '#ff4081'
  },
  'mui-flat-buttonmui-is-primary:hover': {
    'backgroundColor': '#ffe3ed'
  },
  'mui-flat-buttonmui-is-primarymui-is-keyboard-focused': {
    'backgroundColor': '#ffe3ed'
  },
  'mui-flat-buttonmui-is-primary mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(255, 64, 129, 0.2)'
  },
  'mui-flat-buttonmui-is-primary mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(255, 64, 129, 0.2)'
  },
  'mui-flat-buttonmui-is-secondary': {
    'color': '#00bcd4'
  },
  'mui-flat-buttonmui-is-secondary:hover': {
    'backgroundColor': '#defbff'
  },
  'mui-flat-buttonmui-is-secondarymui-is-keyboard-focused': {
    'backgroundColor': '#defbff'
  },
  'mui-flat-buttonmui-is-secondary mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(0, 188, 212, 0.2)'
  },
  'mui-flat-buttonmui-is-secondary mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(0, 188, 212, 0.2)'
  },
  'mui-floating-action-button': {
    'display': 'inline-block'
  },
  'mui-floating-action-button': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-floating-action-button *': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-floating-action-button mui-floating-action-button-container': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 56 }],
    'width': [{ 'unit': 'px', 'value': 56 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'backgroundColor': '#ff4081',
    'borderRadius': '50%',
    'textAlign': 'center',
    'verticalAlign': 'bottom',
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-floating-action-button mui-floating-action-button-containermui-is-disabled': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-floating-action-button mui-floating-action-button-containermui-is-disabled mui-floating-action-button-icon': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-floating-action-button mui-floating-action-button-containermui-is-disabled:hover': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-floating-action-button mui-floating-action-button-container:hover': {
    'backgroundColor': '#f30053'
  },
  'mui-floating-action-button mui-floating-action-button-containermui-is-keyboard-focused': {
    'backgroundColor': '#f30053'
  },
  'mui-floating-action-button mui-floating-action-button-icon': {
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'color': '#ffffff',
    'fill': '#ffffff'
  },
  'mui-floating-action-button mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-floating-action-button mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-floating-action-buttonmui-is-mini mui-floating-action-button-container': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }]
  },
  'mui-floating-action-buttonmui-is-mini mui-floating-action-button-icon': {
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'mui-floating-action-buttonmui-is-secondary mui-floating-action-button-container': {
    'backgroundColor': '#00bcd4'
  },
  'mui-floating-action-buttonmui-is-secondary mui-floating-action-button-container:hover': {
    'backgroundColor': '#00aac0'
  },
  'mui-floating-action-buttonmui-is-secondary mui-floating-action-button-containermui-is-keyboard-focused': {
    'backgroundColor': '#00aac0'
  },
  'mui-floating-action-buttonmui-is-secondary mui-floating-action-button-icon': {
    'color': '#ffffff'
  },
  'mui-floating-action-buttonmui-is-secondary mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-floating-action-buttonmui-is-secondary mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-font-icon': {
    'position': 'relative',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'display': 'inline-block',
    'userSelect': 'none'
  },
  'mui-icon-button': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 48 }]
  },
  'mui-icon-button *': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-icon-button mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(0, 0, 0, 0.1)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'transparent' }],
    'backgroundClip': 'padding-box',
    'animation': '"icon-button-focus-ripple-pulsate" 1.5s infinite'
  },
  'mui-icon-button mui-icon-button-tooltip': {
    'marginTop': [{ 'unit': 'px', 'value': 52 }]
  },
  'mui-icon-buttonmui-is-disabled *': {
    'color': 'rgba(191, 191, 191, 0.87)',
    'fill': 'rgba(191, 191, 191, 0.87)'
  },
  'mui-dark-theme mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.3)'
  },
  'mui-dark-theme mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.3)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.3)' }]
  },
  'mui-ink-bar': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'backgroundColor': 'yellow',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'marginTop': [{ 'unit': 'px', 'value': -2 }],
    'position': 'relative',
    'transition': 'left 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input': {
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 48 }]
  },
  'mui-input input': {
    'backgroundColor': 'transparent',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'outline': 'none',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightgray' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'paddingBottom': [{ 'unit': 'px', 'value': 14 }]
  },
  'mui-input textarea': {
    'backgroundColor': 'transparent',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'outline': 'none',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightgray' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'paddingBottom': [{ 'unit': 'px', 'value': 14 }]
  },
  'mui-input input[type="text"]': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input input[type="password"]': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input input[type="email"]': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input textarea[type="text"]': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input textarea[type="password"]': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input textarea[type="email"]': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input input:focus': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-input inputmui-is-not-empty': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-input input:disabled[value]:not([value=""])': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-input textarea:focus': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-input textareamui-is-not-empty': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-input textarea:disabled[value]:not([value=""])': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-input input:focus ~ mui-input-placeholder': {
    'color': 'blue',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '300',
    'top': [{ 'unit': 'px', 'value': -32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input inputmui-is-not-empty ~ mui-input-placeholder': {
    'color': 'blue',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '300',
    'top': [{ 'unit': 'px', 'value': -32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input input:disabled[value]:not([value=""]) ~ mui-input-placeholder': {
    'color': 'blue',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '300',
    'top': [{ 'unit': 'px', 'value': -32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textarea:focus ~ mui-input-placeholder': {
    'color': 'blue',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '300',
    'top': [{ 'unit': 'px', 'value': -32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textareamui-is-not-empty ~ mui-input-placeholder': {
    'color': 'blue',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '300',
    'top': [{ 'unit': 'px', 'value': -32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textarea:disabled[value]:not([value=""]) ~ mui-input-placeholder': {
    'color': 'blue',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '300',
    'top': [{ 'unit': 'px', 'value': -32 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input input:focus ~ mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'blue',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input inputmui-is-not-empty ~ mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'blue',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input input:disabled[value]:not([value=""]) ~ mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'blue',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textarea:focus ~ mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'blue',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textareamui-is-not-empty ~ mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'blue',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textarea:disabled[value]:not([value=""]) ~ mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'blue',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input input:focus ~ mui-input-bar::before': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input input:focus ~ mui-input-bar::after': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input inputmui-is-not-empty ~ mui-input-bar::before': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input inputmui-is-not-empty ~ mui-input-bar::after': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input input:disabled[value]:not([value=""]) ~ mui-input-bar::before': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input input:disabled[value]:not([value=""]) ~ mui-input-bar::after': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input textarea:focus ~ mui-input-bar::before': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input textarea:focus ~ mui-input-bar::after': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input textareamui-is-not-empty ~ mui-input-bar::before': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input textareamui-is-not-empty ~ mui-input-bar::after': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input textarea:disabled[value]:not([value=""]) ~ mui-input-bar::before': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input textarea:disabled[value]:not([value=""]) ~ mui-input-bar::after': {
    'backgroundColor': 'blue',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input input:focus ~ mui-input-description': {
    'display': 'block'
  },
  'mui-input inputmui-is-not-empty ~ mui-input-description': {
    'display': 'block'
  },
  'mui-input input:disabled[value]:not([value=""]) ~ mui-input-description': {
    'display': 'block'
  },
  'mui-input textarea:focus ~ mui-input-description': {
    'display': 'block'
  },
  'mui-input textareamui-is-not-empty ~ mui-input-description': {
    'display': 'block'
  },
  'mui-input textarea:disabled[value]:not([value=""]) ~ mui-input-description': {
    'display': 'block'
  },
  'mui-input input:not(:focus)mui-is-not-empty + mui-input-placeholder': {
    'color': 'gray'
  },
  'mui-input input:disabled[value]:not([value=""]) + mui-input-placeholder': {
    'color': 'gray'
  },
  'mui-input textarea:not(:focus)mui-is-not-empty + mui-input-placeholder': {
    'color': 'gray'
  },
  'mui-input textarea:disabled[value]:not([value=""]) + mui-input-placeholder': {
    'color': 'gray'
  },
  'mui-input input:not(:focus)mui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input input:not(:focus)mui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input input:disabled[value]:not([value=""]) + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input input:disabled[value]:not([value=""]) + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input textarea:not(:focus)mui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input textarea:not(:focus)mui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input textarea:disabled[value]:not([value=""]) + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input textarea:disabled[value]:not([value=""]) + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-input input:not(:focus)mui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-input input:disabled[value]:not([value=""]) + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-input textarea:not(:focus)mui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-input textarea:disabled[value]:not([value=""]) + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-input input + mui-input-placeholder': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': 'gray',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -4 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input textarea + mui-input-placeholder': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': 'gray',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -4 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input mui-input-highlight': {
    'content': '''',
    'position': 'absolute',
    'backgroundColor': 'transparent',
    'opacity': '0.25',
    'height': [{ 'unit': 'px', 'value': 19 }],
    'top': [{ 'unit': 'px', 'value': -3 }],
    'width': [{ 'unit': 'px', 'value': 160 }],
    'zIndex': '-1'
  },
  'mui-input mui-input-bar': {
    'position': 'relative',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 320 }]
  },
  'mui-input mui-input-bar::before': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': -2 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input mui-input-bar::after': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': -2 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-input mui-input-bar::before': {
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input mui-input-bar::after': {
    'right': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'mui-input mui-input-description': {
    'display': 'none',
    'color': 'blue',
    'position': 'absolute'
  },
  'mui-input mui-input-error': {
    'display': 'none',
    'color': 'red',
    'position': 'absolute'
  },
  'mui-inputmui-error input:focus + mui-input-placeholder': {
    'color': 'red'
  },
  'mui-inputmui-error inputmui-is-not-empty + mui-input-placeholder': {
    'color': 'red'
  },
  'mui-inputmui-error textarea:focus + mui-input-placeholder': {
    'color': 'red'
  },
  'mui-inputmui-error textareamui-is-not-empty + mui-input-placeholder': {
    'color': 'red'
  },
  'mui-inputmui-error input:focus + mui-input-placeholder + mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'red'
  },
  'mui-inputmui-error inputmui-is-not-empty + mui-input-placeholder + mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'red'
  },
  'mui-inputmui-error textarea:focus + mui-input-placeholder + mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'red'
  },
  'mui-inputmui-error textareamui-is-not-empty + mui-input-placeholder + mui-input-highlight': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'red'
  },
  'mui-inputmui-error input:focus + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error input:focus + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error inputmui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error inputmui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error textarea:focus + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error textarea:focus + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error textareamui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::before': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error textareamui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar::after': {
    'backgroundColor': 'red'
  },
  'mui-inputmui-error input:focus + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-inputmui-error inputmui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-inputmui-error textarea:focus + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-inputmui-error textareamui-is-not-empty + mui-input-placeholder + mui-input-highlight + mui-input-bar + mui-input-description': {
    'display': 'none'
  },
  'mui-inputmui-error mui-input-error': {
    'display': 'block'
  },
  'mui-inputmui-floating': {
    'marginTop': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-inputmui-floating input:focus + mui-input-placeholder': {
    'display': 'block',
    'color': 'gray',
    'fontSize': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '400',
    'top': [{ 'unit': 'px', 'value': -4 }]
  },
  'mui-inputmui-floating textarea:focus + mui-input-placeholder': {
    'display': 'block',
    'color': 'gray',
    'fontSize': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '400',
    'top': [{ 'unit': 'px', 'value': -4 }]
  },
  'mui-inputmui-floating input:focusmui-is-not-empty + mui-input-placeholder': {
    'display': 'none'
  },
  'mui-inputmui-floating textarea:focusmui-is-not-empty + mui-input-placeholder': {
    'display': 'none'
  },
  'mui-inputmui-floating inputmui-is-not-empty + mui-input-placeholder': {
    'display': 'none'
  },
  'mui-inputmui-floating textareamui-is-not-empty + mui-input-placeholder': {
    'display': 'none'
  },
  'mui-inputmui-disabled': {
    'opacity': '0.4'
  },
  '::-webkit-input-placeholder': {
    'position': 'absolute !important',
    'top': [{ 'unit': 'px', 'value': -20 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mui-left-nav mui-left-nav-menu': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'fixed',
    'width': [{ 'unit': 'px', 'value': 256 }],
    'backgroundColor': '#ffffff',
    'zIndex': '10',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-left-nav mui-left-nav-menu mui-menu mui-menu-item': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }]
  },
  'mui-left-nav mui-left-nav-menu mui-menu amui-menu-item': {
    'display': 'block',
    'textDecoration': 'none',
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-left-navmui-closed mui-left-nav-menu': {
    'transform': 'translate3d(-266px, 0, 0)'
  },
  'mui-menu': {
    'backgroundColor': '#ffffff'
  },
  'mui-menu *': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-menumui-menu-hideable': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1'
  },
  'mui-menumui-menu-hideable mui-paper-container': {
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-menumui-menu-hideablemui-visible > mui-paper-container': {
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-menu mui-paper-container': {
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-menu mui-subheader': {
    'paddingLeft': [{ 'unit': 'px', 'value': 24 }],
    'paddingRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-menu mui-nested-menu-item': {
    'position': 'relative'
  },
  'mui-menu mui-nested-menu-itemmui-is-disabled': {
    'color': 'rgba(0, 0, 0, 0.3)',
    'cursor': 'default'
  },
  'mui-menu mui-nested-menu-itemmui-open > mui-menu': {
    'opacity': '1'
  },
  'mui-menu-item': {
    'cursor': 'pointer',
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 24 }],
    'paddingRight': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'transparent'
  },
  'mui-menu-item *': {
    'userSelect': 'none'
  },
  'mui-menu-item:hover:not(mui-is-disabled)': {
    'backgroundColor': 'rgba(0, 0, 0, 0.035)'
  },
  'mui-menu-item mui-menu-item-number': {
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'textAlign': 'center'
  },
  'mui-menu-item mui-menu-item-attribute': {
    'float': 'right'
  },
  'mui-menu-item mui-menu-item-icon-right': {
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'float': 'right'
  },
  'mui-menu-item mui-menu-item-icon': {
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'marginRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-menu-item mui-menu-item-data': {
    'display': 'block',
    'paddingLeft': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'verticalAlign': 'top',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'position': 'relative'
  },
  'mui-menu-item muidocs-icon-custom-arrow-drop-right': {
    'marginRight': [{ 'unit': 'px', 'value': -8 }],
    'color': 'rgba(0, 0, 0, 0.26)'
  },
  'mui-menu-item mui-toggle': {
    'marginTop': [{ 'unit': 'px', 'value': 12 }],
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 42 }]
  },
  'mui-menu-itemmui-is-selected': {
    'color': '#ff4081'
  },
  'mui-menu-itemmui-is-disabled': {
    'color': 'rgba(0, 0, 0, 0.3) !important',
    'cursor': 'default'
  },
  'mui-overlay': {
    'position': 'fixed',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '9',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': -1 }],
    'backgroundColor': 'transparent',
    'transform': 'transition(left 0ms cubic-bezier(0.23, 1, 0.32, 1) 400ms, background-color 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms)'
  },
  'mui-overlaymui-is-shown': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'rgba(0, 0, 0, 0.54)',
    'transform': 'transition(left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, background-color 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms)'
  },
  'mui-papermui-rounded': {
    'borderRadius': '2px'
  },
  'mui-papermui-rounded > mui-paper-container': {
    'borderRadius': '2px'
  },
  'mui-papermui-circle': {
    'borderRadius': '50%'
  },
  'mui-papermui-circle > mui-paper-container': {
    'borderRadius': '50%'
  },
  'mui-paper > mui-paper-container': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'mui-papermui-z-depth-1': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.24)' }]
  },
  'mui-papermui-z-depth-1 > mui-z-depth-bottom': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }]
  },
  'mui-papermui-z-depth-2': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.23)' }]
  },
  'mui-papermui-z-depth-2 > mui-z-depth-bottom': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.16)' }]
  },
  'mui-papermui-z-depth-3': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.23)' }]
  },
  'mui-papermui-z-depth-3 > mui-z-depth-bottom': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19)' }]
  },
  'mui-papermui-z-depth-4': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.22)' }]
  },
  'mui-papermui-z-depth-4 > mui-z-depth-bottom': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.25)' }]
  },
  'mui-papermui-z-depth-5': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.22)' }]
  },
  'mui-papermui-z-depth-5 > mui-z-depth-bottom': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 19 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  'mui-radio-button mui-radio-button-icon': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'marginRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'mui-radio-button mui-radio-button-icon mui-radio-button-fill': {
    'position': 'absolute',
    'opacity': '0',
    'transform': 'scale(0)',
    'transformOrigin': '50% 50%',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-radio-button mui-radio-button-icon mui-radio-button-fill *': {
    'fill': '#00bcd4'
  },
  'mui-radio-button mui-radio-button-icon mui-radio-button-target': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'position': 'absolute',
    'opacity': '1',
    'transform': 'scale(1)'
  },
  'mui-radio-button mui-radio-button-icon mui-radio-button-target *': {
    'fill': 'rgba(0, 0, 0, 0.87)',
    'transition': 'all 2s cubic-bezier(0.23, 1, 0.32, 1) 200ms'
  },
  'mui-radio-buttonmui-is-switched mui-radio-button-icon mui-radio-button-fill': {
    'opacity': '1',
    'transform': 'scale(1)'
  },
  'mui-radio-buttonmui-is-switched mui-radio-button-icon mui-radio-button-target': {
    'opacity': '0',
    'transform': 'scale(0)'
  },
  'mui-radio-buttonmui-is-switched mui-radio-button-icon mui-radio-button-target *': {
    'fill': '#00bcd4',
    'transition': 'all 100s cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-radio-buttonmui-is-disabled mui-radio-button-icon mui-radio-button-fill *': {
    'fill': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-radio-buttonmui-is-disabled mui-radio-button-icon mui-radio-button-target *': {
    'fill': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-radio-buttonmui-is-required mui-radio-button-icon mui-radio-button-target *': {
    'fill': '#00bcd4'
  },
  'mui-raised-button': {
    'display': 'inline-block',
    'minWidth': [{ 'unit': 'px', 'value': 88 }],
    'height': [{ 'unit': 'px', 'value': 30 }]
  },
  'mui-raised-button': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-raised-button *': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-raised-button mui-raised-button-container': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'borderRadius': '2px',
    'backgroundColor': '#ffffff',
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-raised-button mui-raised-button-containermui-is-keyboard-focused': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-raised-button mui-raised-button-containermui-is-disabled': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-raised-button mui-raised-button-containermui-is-disabled mui-raised-button-label': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-raised-button mui-raised-button-containermui-is-disabled:hover': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-raised-button mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(0, 0, 0, 0.1)'
  },
  'mui-raised-button mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(0, 0, 0, 0.7)'
  },
  'mui-raised-button mui-raised-button-label': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'userSelect': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'color': '#00bcd4'
  },
  'mui-raised-button:hover mui-raised-button-container': {
    'backgroundColor': '#e6e6e6'
  },
  'mui-raised-buttonmui-is-primary mui-raised-button-container': {
    'backgroundColor': '#ff4081'
  },
  'mui-raised-buttonmui-is-primary mui-raised-button-containermui-is-keyboard-focused': {
    'backgroundColor': '#f30053'
  },
  'mui-raised-buttonmui-is-primary mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-raised-buttonmui-is-primary mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-raised-buttonmui-is-primary mui-raised-button-label': {
    'color': '#ffffff'
  },
  'mui-raised-buttonmui-is-primary:hover mui-raised-button-container': {
    'backgroundColor': '#f30053'
  },
  'mui-raised-buttonmui-is-secondary mui-raised-button-container': {
    'backgroundColor': '#00bcd4'
  },
  'mui-raised-buttonmui-is-secondary mui-raised-button-containermui-is-keyboard-focused': {
    'backgroundColor': '#00aac0'
  },
  'mui-raised-buttonmui-is-secondary mui-touch-ripple mui-ripple-circle-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-raised-buttonmui-is-secondary mui-focus-ripple mui-focus-ripple-inner': {
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'mui-raised-buttonmui-is-secondary mui-raised-button-label': {
    'color': '#ffffff'
  },
  'mui-raised-buttonmui-is-secondary:hover mui-raised-button-container': {
    'backgroundColor': '#00aac0'
  },
  'mui-focus-ripple': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'transform': 'scale(0)',
    'opacity': '0'
  },
  'mui-focus-ripple mui-focus-ripple-inner': {
    'animation': '"focus-ripple-pulsate" 1.5s infinite',
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '50%',
    'backgroundColor': 'rgba(0, 0, 0, 0.1)'
  },
  'mui-focus-ripplemui-is-shown': {
    'transform': 'scale(1)',
    'opacity': '1'
  },
  'mui-ripple-circle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0.7',
    'transition': 'opacity 2s cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-ripple-circle mui-ripple-circle-inner': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '50%',
    'transform': 'scale(0)',
    'backgroundColor': 'rgba(0, 0, 0, 0.2)',
    'transition': 'transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-ripple-circlemui-is-started': {
    'opacity': '1'
  },
  'mui-ripple-circlemui-is-started mui-ripple-circle-inner': {
    'transform': 'scale(1)'
  },
  'mui-ripple-circlemui-is-ending': {
    'opacity': '0'
  },
  'mui-touch-ripple': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'react-draggable-dragging': {
    'userSelect': 'none'
  },
  'mui-slider': {
    'WebkitTouchCallout': 'none',
    'cursor': 'default',
    'height': [{ 'unit': 'px', 'value': 24 }],
    'position': 'relative'
  },
  'mui-slider mui-slider-track': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 11 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 2 }]
  },
  'mui-slider mui-slider-selection': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'mui-slider mui-slider-selection mui-slider-selection-fill': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'transition': 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-slider mui-slider-selection-low': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-slider mui-slider-selection-low mui-slider-selection-fill': {
    'backgroundColor': '#b2ebf2',
    'marginRight': [{ 'unit': 'px', 'value': 6 }]
  },
  'mui-slider mui-slider-selection-high': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-slider mui-slider-selection-high mui-slider-selection-fill': {
    'backgroundColor': 'rgba(0, 0, 0, 0.26)',
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'mui-slider mui-slider-handle': {
    'cursor': 'pointer',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0 }],
    'zIndex': '1',
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundClip': 'padding-box',
    'borderRadius': '50%',
    'transform': 'translate(-50%, -50%)',
    'transition': 'border 450ms cubic-bezier(0.23, 1, 0.32, 1), width 450ms cubic-bezier(0.23, 1, 0.32, 1), height 450ms cubic-bezier(0.23, 1, 0.32, 1)',
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }]
  },
  'mui-slider mui-slider-handle:focus': {
    'outline': 'none'
  },
  'mui-slider:not(mui-disabled) mui-slider-handle': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'backgroundColor': '#b2ebf2'
  },
  'mui-slider:not(mui-disabled) mui-slider-handle:active': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-slider:not(mui-disabled):hover mui-slider-selection-high mui-slider-selection-fill': {
    'background': '#9e9e9e'
  },
  'mui-slider:not(mui-disabled):focus mui-slider-selection-high mui-slider-selection-fill': {
    'background': '#9e9e9e'
  },
  'mui-slider:not(mui-disabled):hover:not(mui-slider-zero) mui-slider-handle:not(:active)': {
    'border': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(178, 235, 242, 0.2)' }],
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }]
  },
  'mui-slider:not(mui-disabled):focus:not(mui-slider-zero) mui-slider-handle:not(:active)': {
    'border': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(178, 235, 242, 0.2)' }],
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }]
  },
  'mui-slider:not(mui-disabled)mui-slider-zero mui-slider-handle': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.26)' }],
    'backgroundColor': 'transparent',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'mui-slider:not(mui-disabled)mui-slider-zero mui-slider-handle:active': {
    'borderColor': '#9e9e9e',
    'width': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': '!important' }],
    'transition': 'background-color 450ms cubic-bezier(0.23, 1, 0.32, 1), width 450ms cubic-bezier(0.23, 1, 0.32, 1), height 450ms cubic-bezier(0.23, 1, 0.32, 1)'
  },
  'mui-slider:not(mui-disabled)mui-slider-zero mui-slider-handle:active ~ mui-slider-selection-high mui-slider-selection-fill': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'transition': 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-slider:not(mui-disabled)mui-slider-zero:hover mui-slider-handle': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bdbdbd' }],
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }]
  },
  'mui-slider:not(mui-disabled)mui-slider-zero:focus mui-slider-handle': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bdbdbd' }],
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }]
  },
  'mui-slidermui-disabled': {
    'cursor': 'not-allowed'
  },
  'mui-slidermui-disabled mui-slider-selection-fill': {
    'backgroundColor': 'rgba(0, 0, 0, 0.26)'
  },
  'mui-slidermui-disabled mui-slider-handle': {
    'cursor': 'not-allowed',
    'backgroundColor': 'rgba(0, 0, 0, 0.26)',
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-slidermui-disabledmui-slider-zero mui-slider-selection-low mui-slider-selection-fill': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'mui-slidermui-disabledmui-slider-zero mui-slider-selection-high mui-slider-selection-fill': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'mui-slidermui-disabledmui-slider-zero mui-slider-handle': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.26)' }],
    'backgroundColor': 'transparent'
  },
  'mui-snackbar': {
    'color': 'white',
    'backgroundColor': '#323232',
    'borderRadius': '2px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'minWidth': [{ 'unit': 'px', 'value': 288 }],
    'maxWidth': [{ 'unit': 'px', 'value': 568 }],
    'position': 'fixed',
    'zIndex': '10',
    'bottom': [{ 'unit': 'px', 'value': 24 }],
    'marginLeft': [{ 'unit': 'px', 'value': 24 }],
    'left': [{ 'unit': 'px', 'value': -10000 }],
    'opacity': '0',
    'transform': 'translate3d(0, 20px, 0)',
    'transition': 'left 0ms cubic-bezier(0.23, 1, 0.32, 1) 400ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-snackbar mui-snackbar-action': {
    'color': '#ff4081',
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    'marginRight': [{ 'unit': 'px', 'value': -16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'transparent'
  },
  'mui-snackbarmui-is-open': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '1',
    'transform': 'translate3d(0, 0, 0)',
    'transition': 'left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-subheader': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'color': '#00bcd4',
    'borderTop': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e0e0e0' }],
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'marginTop': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-subheader:first-child': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'borderTop': [{ 'unit': 'string', 'value': 'none' }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'mui-svg-icon': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'display': 'inline-block',
    'userSelect': 'none'
  },
  'mui-svg-icon *': {
    'fill': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-table': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'mui-table mui-table-header mui-table-header-column': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'width': [{ 'unit': 'px', 'value': 200 }]
  },
  'mui-table mui-table-header mui-table-header-pagify': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'float': 'right'
  },
  'mui-table mui-table-rows mui-table-rows-item': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'mui-table mui-table-rows mui-table-rows-actions': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'display': 'inline-block',
    'float': 'right'
  },
  'mui-tabs-container': {
    'position': 'relative'
  },
  'mui-tabs-container mui-tab-item-container': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'backgroundColor': '#00bcd4',
    'whiteSpace': 'nowrap',
    'display': 'block'
  },
  'mui-tabs-container mui-tab-item-container mui-tab-item': {
    'display': 'inline-block',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'cursor': 'pointer',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'color': '#fff',
    'opacity': '.6',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '500',
    'font': [{ 'unit': 'string', 'value': '"Roboto",' }, { 'unit': 'string', 'value': 'sans-serif' }]
  },
  'mui-tabs-container mui-tab-item-container mui-tab-itemmui-tab-is-active': {
    'color': '#fff',
    'opacity': '1',
    'font': [{ 'unit': 'string', 'value': '"Roboto",' }, { 'unit': 'string', 'value': 'sans-serif' }]
  },
  'mui-tabs-container mui-tab-item-container mui-tab-item mui-tab-template': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'textAlign': 'initial'
  },
  'mui-text-field': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 256 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'display': 'inline-block',
    'position': 'relative',
    'transition': 'height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-text-field mui-text-field-hint': {
    'position': 'absolute',
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'color': 'rgba(0, 0, 0, 0.3)',
    'opacity': '1',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-text-field mui-text-field-floating-label': {
    'position': 'absolute',
    'lineHeight': [{ 'unit': 'px', 'value': 48 }],
    'color': 'rgba(0, 0, 0, 0.3)',
    'opacity': '1',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-text-field mui-text-field-error': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': -10 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'color': '#f44336',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-text-field mui-text-field-input': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'backgroundColor': 'transparent',
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-text-field mui-text-field-textarea': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'backgroundColor': 'transparent',
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'mui-text-field mui-text-field-textarea': {
    'marginTop': [{ 'unit': 'px', 'value': 12 }]
  },
  'mui-text-field mui-text-field-underline': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-text-field mui-text-field-focus-underline': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mui-text-field mui-text-field-focus-underline': {
    'borderColor': '#00bcd4',
    'borderBottomWidth': [{ 'unit': 'px', 'value': 2 }],
    'transform': 'scaleX(0)',
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-text-fieldmui-has-error mui-text-field-focus-underline': {
    'borderColor': '#f44336',
    'transform': 'scaleX(1)'
  },
  'mui-text-fieldmui-has-value mui-text-field-hint': {
    'opacity': '0'
  },
  'mui-text-fieldmui-is-disabled mui-text-field-input': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-text-fieldmui-is-disabled mui-text-field-underline': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'overflow': 'hidden'
  },
  'mui-text-fieldmui-is-disabled mui-text-field-underline:after': {
    'content': ''..............................................................................................................................................................................................................................................................................................................................................................'',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 23 }],
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-text-fieldmui-is-focused mui-text-field-focus-underline': {
    'transform': 'scaleX(1)'
  },
  'mui-text-fieldmui-has-floating-labels': {
    'height': [{ 'unit': 'px', 'value': 72 }]
  },
  'mui-text-fieldmui-has-floating-labels mui-text-field-floating-label': {
    'top': [{ 'unit': 'px', 'value': 24 }],
    'transform': 'scale(1) translate3d(0, 0, 0)',
    'transformOrigin': 'left top'
  },
  'mui-text-fieldmui-has-floating-labels mui-text-field-hint': {
    'top': [{ 'unit': 'px', 'value': 24 }],
    'opacity': '0'
  },
  'mui-text-fieldmui-has-floating-labels mui-text-field-input': {
    'paddingTop': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-text-fieldmui-has-floating-labelsmui-has-value mui-text-field-floating-label': {
    'transform': 'scale(0.75) translate3d(0, -18px, 0)'
  },
  'mui-text-fieldmui-has-floating-labelsmui-is-focused mui-text-field-floating-label': {
    'transform': 'scale(0.75) translate3d(0, -18px, 0)'
  },
  'mui-text-fieldmui-has-floating-labelsmui-has-value mui-text-field-floating-label': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'mui-text-fieldmui-has-floating-labelsmui-is-disabled mui-text-field-hint': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'mui-text-fieldmui-has-floating-labelsmui-is-focused mui-text-field-hint': {
    'opacity': '1'
  },
  'mui-text-fieldmui-has-floating-labelsmui-is-focused mui-text-field-floating-label': {
    'transform': 'scale(0.75) translate3d(0, -18px, 0)',
    'color': '#00bcd4'
  },
  'mui-text-fieldmui-has-floating-labelsmui-is-focusedmui-has-error mui-text-field-floating-label': {
    'color': '#f44336'
  },
  'mui-text-fieldmui-has-floating-labelsmui-is-focusedmui-has-value mui-text-field-hint': {
    'opacity': '0'
  },
  'mui-toggle mui-toggle-icon': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 2 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'mui-toggle mui-toggle-icon mui-toggle-track': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'borderRadius': '30px',
    'backgroundColor': 'rgba(0, 0, 0, 0.26)'
  },
  'mui-toggle mui-toggle-icon mui-toggle-thumb': {
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '50%',
    'backgroundColor': '#fafafa'
  },
  'mui-toggle mui-toggle-icon mui-toggle-thumb mui-paper-container': {
    'borderRadius': '50%'
  },
  'mui-toggle mui-toggle-icon mui-toggle-thumb mui-touch-ripple': {
    'width': [{ 'unit': '%H', 'value': 2 }],
    'height': [{ 'unit': '%V', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': -10 }],
    'left': [{ 'unit': 'px', 'value': -10 }]
  },
  'mui-toggle mui-toggle-icon mui-toggle-thumb mui-focus-ripple-inner': {
    'width': [{ 'unit': '%H', 'value': 2 }],
    'height': [{ 'unit': '%V', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': -10 }],
    'left': [{ 'unit': 'px', 'value': -10 }]
  },
  'mui-togglemui-is-switched mui-toggle-icon mui-toggle-track': {
    'backgroundColor': 'rgba(0, 188, 212, 0.5)'
  },
  'mui-togglemui-is-switched mui-toggle-icon mui-toggle-thumb': {
    'left': [{ 'unit': 'px', 'value': 18 }],
    'backgroundColor': '#00bcd4'
  },
  'mui-togglemui-is-disabled mui-toggle-icon': {
    'cursor': 'default'
  },
  'mui-togglemui-is-disabled mui-toggle-icon mui-toggle-track': {
    'backgroundColor': 'rgba(0, 0, 0, 0.12)'
  },
  'mui-togglemui-is-disabled mui-toggle-icon mui-toggle-thumb': {
    'backgroundColor': '#bdbdbd'
  },
  'mui-togglemui-is-required mui-toggle-icon mui-toggle-track': {
    'backgroundColor': 'rgba(0, 188, 212, 0.5)'
  },
  'mui-togglemui-is-required mui-toggle-icon mui-toggle-thumb': {
    'backgroundColor': '#00bcd4'
  },
  'mui-toolbar': {
    'backgroundColor': '#e1e1e1',
    'height': [{ 'unit': 'px', 'value': 56 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'mui-toolbar mui-toolbar-group': {
    'position': 'relative'
  },
  'mui-toolbar mui-toolbar-group mui-toolbar-title': {
    'paddingRight': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }]
  },
  'mui-toolbar mui-toolbar-group mui-toolbar-separator': {
    'backgroundColor': 'rgba(0, 0, 0, 0.175)',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 32 }],
    'marginLeft': [{ 'unit': 'px', 'value': 24 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'mui-toolbar mui-toolbar-group mui-raised-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': 13 }],
    'position': 'relative'
  },
  'mui-toolbar mui-toolbar-group mui-flat-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': 13 }],
    'position': 'relative'
  },
  'mui-toolbar mui-toolbar-group mui-drop-down-menu': {
    'color': 'rgba(0, 0, 0, 0.54)',
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-toolbar mui-toolbar-group mui-drop-down-menu mui-menu-control-bg': {
    'backgroundColor': 'rgba(0, 0, 0, 0.1)',
    'borderRadius': '0'
  },
  'mui-toolbar mui-toolbar-group mui-drop-down-menu mui-menu-control mui-menu-control-underline': {
    'display': 'none'
  },
  'mui-toolbar mui-toolbar-group mui-drop-down-menu mui-font-icon:hover': {
    'color': 'rgba(0, 0, 0, 0.4)'
  },
  'mui-toolbar mui-toolbar-group mui-font-icon': {
    'color': 'rgba(0, 0, 0, 0.4)',
    'cursor': 'pointer',
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-toolbar mui-toolbar-group mui-font-icon:hover': {
    'color': 'rgba(0, 0, 0, 0.87)',
    'zIndex': '1'
  },
  'mui-toolbar mui-toolbar-groupmui-left': {
    'float': 'left'
  },
  'mui-toolbar mui-toolbar-groupmui-left mui-drop-down-menu': {
    'float': 'left'
  },
  'mui-toolbar mui-toolbar-groupmui-left mui-font-icon': {
    'float': 'left'
  },
  'mui-toolbar mui-toolbar-groupmui-left mui-toolbar-separator': {
    'float': 'left'
  },
  'mui-toolbar mui-toolbar-groupmui-left mui-drop-down-icon': {
    'float': 'left'
  },
  'mui-toolbar mui-toolbar-groupmui-left:first-child': {
    'marginLeft': [{ 'unit': 'px', 'value': -24 }]
  },
  'mui-toolbar mui-toolbar-groupmui-left:first-child mui-toolbar-title': {
    'marginLeft': [{ 'unit': 'px', 'value': 24 }]
  },
  'mui-toolbar mui-toolbar-groupmui-right': {
    'float': 'right'
  },
  'mui-toolbar mui-toolbar-groupmui-right *': {
    'verticalAlign': 'top'
  },
  'mui-toolbar mui-toolbar-groupmui-right:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': -24 }]
  },
  'mui-tooltip': {
    'position': 'absolute',
    'fontFamily': '"Roboto", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }],
    'color': '#ffffff',
    'overflow': 'hidden',
    'top': [{ 'unit': 'px', 'value': -10000 }],
    'borderRadius': '2px',
    'userSelect': 'none',
    'opacity': '0',
    'transition': 'top 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-tooltip mui-tooltip-label': {
    'position': 'relative',
    'whiteSpace': 'nowrap'
  },
  'mui-tooltip mui-tooltip-ripple': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'translate(-50%, -50%)',
    'borderRadius': '50%',
    'backgroundColor': 'transparent',
    'transition': 'width 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, height 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-tooltipmui-is-shown': {
    'top': [{ 'unit': 'px', 'value': -16 }],
    'opacity': '1',
    'transform': 'translate3d(0, 16px, 0)',
    'transition': 'top 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-tooltipmui-is-shown mui-tooltip-ripple': {
    'backgroundColor': '#757575',
    'transition': 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, height 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-tooltipmui-is-touch': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 44 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }]
  },
  'mui-tooltipmui-is-touchmui-is-shown mui-tooltip-ripple': {
    'height': [{ 'unit': 'px', 'value': 105 }],
    'width': [{ 'unit': 'px', 'value': 105 }]
  },
  'mui-transition-slide-in': {
    'position': 'relative',
    'overflow': 'hidden',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'mui-transition-slide-in mui-transition-slide-in-child': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  'mui-transition-slide-in mui-transition-slide-in-enter': {
    'opacity': '0'
  },
  'mui-transition-slide-in mui-transition-slide-in-enter-active': {
    'opacity': '1'
  },
  'mui-transition-slide-in mui-transition-slide-in-leave': {
    'opacity': '1'
  },
  'mui-transition-slide-in mui-transition-slide-in-leave-active': {
    'opacity': '0'
  },
  'mui-transition-slide-inmui-is-left mui-transition-slide-in-enter': {
    'transform': 'translate3d(100%, 0, 0)'
  },
  'mui-transition-slide-inmui-is-left mui-transition-slide-in-enter-active': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-left mui-transition-slide-in-leave': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-left mui-transition-slide-in-leave-active': {
    'transform': 'translate3d(-100%, 0, 0)'
  },
  'mui-transition-slide-inmui-is-right mui-transition-slide-in-enter': {
    'transform': 'translate3d(-100%, 0, 0)'
  },
  'mui-transition-slide-inmui-is-right mui-transition-slide-in-enter-active': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-right mui-transition-slide-in-leave': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-right mui-transition-slide-in-leave-active': {
    'transform': 'translate3d(100%, 0, 0)'
  },
  'mui-transition-slide-inmui-is-up mui-transition-slide-in-enter': {
    'transform': 'translate3d(0, 100%, 0)'
  },
  'mui-transition-slide-inmui-is-up mui-transition-slide-in-enter-active': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-up mui-transition-slide-in-leave': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-up mui-transition-slide-in-leave-active': {
    'transform': 'translate3d(0, -100%, 0)'
  },
  'mui-transition-slide-inmui-is-down mui-transition-slide-in-enter': {
    'transform': 'translate3d(0, -100%, 0)'
  },
  'mui-transition-slide-inmui-is-down mui-transition-slide-in-enter-active': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-down mui-transition-slide-in-leave': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'mui-transition-slide-inmui-is-down mui-transition-slide-in-leave-active': {
    'transform': 'translate3d(0, 100%, 0)'
  },
  'html': {
    'WebkitFontSmoothing': 'antialiased',
    'color': 'rgba(0, 0, 0, 0.87)',
    'fontFamily': '"Roboto", sans-serif',
    'backgroundColor': '#ffffff'
  },
  'body': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'hr': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e0e0e0' }]
  },
  'hr': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 18 }]
  },
  'html': {
    'boxSizing': 'border-box'
  },
  '*': {
    'boxSizing': 'inherit'
  },
  '*::after': {
    'boxSizing': 'inherit'
  },
  '*::before': {
    'boxSizing': 'inherit'
  },
  'header hr': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'header-grid': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'header-grid::after': {
    'clear': 'both',
    'content': '""',
    'display': 'block'
  },
  'header-grid header-grid__left': {
    'float': 'left',
    'display': 'block',
    'marginRight': [{ 'unit': '%H', 'value': 0.0059497 }],
    'width': [{ 'unit': '%H', 'value': 0.1617086 }]
  },
  'header-grid header-grid__left:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'header-grid header-grid__center': {
    'float': 'left',
    'display': 'block',
    'marginRight': [{ 'unit': '%H', 'value': 0.0059497 }],
    'width': [{ 'unit': '%H', 'value': 0.6646833999999999 }],
    'textAlign': 'center'
  },
  'header-grid header-grid__center:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'header-grid header-grid__center header-grid__center-title': {
    'display': 'inline-block',
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'header-grid header-grid__center header-grid__center-info': {
    'color': '#00bcd4',
    'cursor': 'pointer'
  },
  'header-grid header-grid__center header-grid__center-info-hint': {
    'width': [{ 'unit': 'px', 'value': 340 }]
  },
  'header-grid header-grid__right': {
    'float': 'left',
    'display': 'block',
    'marginRight': [{ 'unit': '%H', 'value': 0.0059497 }],
    'width': [{ 'unit': '%H', 'value': 0.1617086 }],
    'textAlign': 'right'
  },
  'header-grid header-grid__right:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'map-markermap-marker--hint-bottom-delta--0hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--0 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--1hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--1 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--2hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--2 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--3hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--3 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--4hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--4 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--5hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--5 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--6hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--6 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--7hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--7 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--8hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--8 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--9hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--9 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--10hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--10 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--11hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--11 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--12hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--12 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--13hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--13 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--14hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--14 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--15hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--15 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--16hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--16 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--17hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--17 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--18hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--18 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--19hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--19 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--20hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--20 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--21hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--21 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--22hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--22 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--23hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--23 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--24hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--24 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--25hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--25 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--26hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--26 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--27hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--27 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--28hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--28 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--29hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--29 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--30hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--30 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--31hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--31 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--32hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--32 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--33hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--33 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--34hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--34 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--35hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--35 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--36hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--36 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--37hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--37 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--38hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--38 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--39hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--39 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--40hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta--40 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-0hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-0 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-1hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-1 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-2hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-2 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-3hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-3 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-4hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-4 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-5hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-5 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-6hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-6 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-7hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-7 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-8hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-8 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-9hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-9 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-10hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-10 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-11hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-11 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-12hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-12 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-13hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-13 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-14hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-14 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-15hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-15 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-16hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-16 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-17hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-17 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-18hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-18 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-19hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-19 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-20hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-20 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-21hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-21 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-22hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-22 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-23hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-23 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-24hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-24 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-25hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-25 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-26hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-26 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-27hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-27 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-28hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-28 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-29hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-29 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-30hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-30 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-31hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-31 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-32hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-32 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-33hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-33 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-34hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-34 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-35hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-35 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-36hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-36 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-37hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-37 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-38hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-38 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-39hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-39 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-40hint--bottom:before': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-markermap-marker--hint-bottom-delta-40 hint--bottom:after': {
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'map-marker map-marker__markermap-marker__marker--ap': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_violet.svg")'
  },
  'map-marker map-marker__markermap-marker__marker--as': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_yellow.svg")'
  },
  'map-marker map-marker__markermap-marker__marker--big': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_text_red.svg")'
  },
  'map-marker map-marker__markermap_icon_text_red': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_text_red.svg")'
  },
  'map-marker map-marker__markermap_icon_text_indigo': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_text_indigo.svg")'
  },
  'map-marker map-marker__markermap_icon_flag_orange': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_flag_orange.svg")'
  },
  'map-marker map-marker__markermap_icon_std': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_std.svg")'
  },
  'map-marker map-marker__markermap_icon_std_orange': {
    'backgroundImage': 'url("../../../assets/icons/map_icons/map_icon_std_orange.svg")'
  },
  'map-marker map-marker-hint': {
    'cursor': 'default',
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'map-marker map-marker-hint__close-button': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 5 }],
    'top': [{ 'unit': 'px', 'value': 5 }],
    'color': 'red',
    'visibility': 'hidden',
    'cursor': 'pointer'
  },
  'map-marker map-marker-hint__close-button--visible': {
    'visibility': 'visible'
  },
  'map-marker map-marker-hint__title': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'map-marker map-marker-hint__address': {
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'color': 'rgba(0, 0, 0, 0.5)',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'map-marker map-marker-hint__ap-link': {
    'color': '#23546B',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontStyle': 'italic'
  },
  'map-marker map-marker-hint__ap-link--hidden': {
    'visibility': 'hidden'
  },
  'map-marker map-marker-hint__content': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'translate3d(0, 0, 0)',
    'overflow': 'hidden',
    'transition': 'height 0.35s cubic-bezier(0.485, 1.65, 0.545, 0.835)'
  },
  'map-marker map-marker-hint__content--visible': {
    'height': [{ 'unit': 'px', 'value': 61 }]
  }
});
