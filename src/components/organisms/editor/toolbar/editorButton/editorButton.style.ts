import { createUseStyles, Styles } from 'react-jss';
import { FOCUS_OUTLINE_WIDTH } from '../../../../../constant';

type Theme = {
  [key: string]: string;
};

export default createUseStyles(
  (theme: Theme) =>
    ({
      root: {
        width: 21,
        height: 21,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        cursor: 'default',
        outline: 'none',
        marginRight: 7,
        boxShadow: `0 0 0 0 ${theme.teal2light}`,
        transition: `box-shadow 150ms linear, background-color 150ms linear, border-color 150ms linear`,
        color: theme.teal3,
        borderColor: 'currentColor',
        backgroundColor: 'transparent',
        '&:not([disabled]):hover': {
          color: theme.white,
          backgroundColor: theme.teal2,
          borderColor: theme.teal2,
          cursor: 'pointer',
        },
        '&[disabled]': {
          opacity: 0.3,
        },
        '&:focus': {
          boxShadow: `0 0 0 ${FOCUS_OUTLINE_WIDTH}px ${theme.teal2light}`,
        },
        '&[data-is-active="true"]': {
          color: theme.white,
          backgroundColor: theme.teal2,
          borderColor: theme.teal2,
        },
      },
      text: {
        color: 'currentColor',
        fontSize: 12,
        fontWeight: 800,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      },
    } as Styles)
);
