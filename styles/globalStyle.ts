import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },
  ':root': {
    '--app-height': '100vh',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: 'var(--app-height)',

  },
  '#__next': {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  'body, input, textarea, select, legend, button': {
    fontFamily: '$rubik',
  },
});