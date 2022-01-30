import { createUseStyles, Styles } from 'react-jss';

// Used to set the first tab width
import { TAB_MARGIN_RIGHT } from '../../../../constant';

type Theme = {
  [key: string]: string;
};

export default createUseStyles(
  (theme: Theme) =>
    ({
      root: {
        display: 'inline-block',
        marginRight: TAB_MARGIN_RIGHT,
        paddingBottom: 10,
        fontSize: 12,
        color: theme.grey1,
        '&:hover': {
          cursor: 'pointer',
        },
        '&:first-letter': {
          textTransform: 'uppercase',
        },
      },
    } as Styles)
);
