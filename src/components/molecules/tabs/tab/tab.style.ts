// Used to set the first tab width
import { TAB_MARGIN_RIGHT } from '../../../../constant';

export default theme => ({
  root: {
    display: 'inline-block',
    marginRight: TAB_MARGIN_RIGHT,
    paddingBottom: 10,
    fontSize: 12,
    color: theme.grey1,
    '&:hover': {
      cursor: 'pointer'
    },
    '&:first-letter': {
      textTransform: 'uppercase'
    }
  }
});
