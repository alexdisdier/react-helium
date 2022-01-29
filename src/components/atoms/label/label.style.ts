import { createUseStyles, Styles } from 'react-jss';

export default createUseStyles((theme: Styles) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    backgroundColor: 'inherent',
  },
  label: {
    color: theme.grey1,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    paddingBottom: 8,
    '[data-input-is-required="true"] > &::before': {
      content: '"* "',
      color: theme.warningRed,
    },
  },
}));
