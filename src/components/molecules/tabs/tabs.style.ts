import { createUseStyles } from 'react-jss';
// Used to set the tabs left position according to wrapper
import { WRAPPER_PADDING_LEFT } from '../../../constant';

export default createUseStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'inherit',
    paddingTop: 10,
    paddingLeft: WRAPPER_PADDING_LEFT
  },
  tabsWrapper: {
    display: 'flex'
  },
  slider: {
    top: 2,
    position: 'relative',
    borderBottom: `4px solid ${theme.grey1}`,
    transition: 'left 0.3s ease-out, width 0.3s ease-out'
  },
  contentWrapper: {
    padding: 14,
    minHeight: 240,
    '&[data-is-centered=true]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}));
