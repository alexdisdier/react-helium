import { createUseStyles, Styles } from 'react-jss';

type Theme = {
  [key: string]: string;
};

export default createUseStyles(
  (theme: Theme) =>
    ({
      content: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        color: theme.warningRed,
        fontSize: 12,
        letterSpacing: '0.24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        background: 'inherit',
      },
    } as Styles)
);
