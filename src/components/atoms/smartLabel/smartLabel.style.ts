import { createUseStyles, Styles } from 'react-jss';

type Theme = {
  [key: string]: string;
};

export default createUseStyles(
  (theme: Theme) =>
    ({
      root: {
        display: 'flex',
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        backgroundColor: theme.white1,
        borderRadius: 2,
        '&[data-is-max-width="true"]': {
          maxWidth: 300,
        },
      },
      label: {
        boxSizing: 'border-box',
        position: 'absolute',
        zIndex: 2,
        top: -6,
        left: 4,
        height: 13,
        lineHeight: `13px`,
        paddingLeft: 3,
        paddingRight: 3,
        fontSize: 10,
        fontWeight: 400,
        color: theme.grey3,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        transition: 'color 150ms linear 0ms',
        '& > span': {
          opacity: 0,
          transition: 'opacity 150ms linear 0ms',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 6,
          height: 1,
          left: 0,
          right: 0,
          backgroundColor: theme.white1,
          zIndex: -1,
          opacity: 0,
          transform: `scaleX(0)`,
          transition: 'opacity 0ms linear 200ms, transform 50ms linear 150ms',
        },
        '[data-input-has-value="true"] > &': {
          '&::after': {
            opacity: 1,
            transform: `scaleX(1)`,
            transitionDelay: '0ms, 0ms',
          },
          '& > span': {
            opacity: 1,
            transitionDelay: '100ms',
          },
        },
        '[data-input-has-focus="true"]:not([data-input-is-invalid="true"]):not([data-input-is-caution="true"]):not([data-input-is-valid="true"]):not([data-input-is-modified="true"]) > &':
          {
            color: theme.indigo3,
          },
        '[data-input-is-required="true"] > &::before': {
          content: '"* "',
        },
        '[data-input-is-invalid="true"] > &': {
          color: theme.warningRed,
        },
        '[data-input-is-caution="true"] > &': {
          color: theme.cautionOrange,
        },
        '[data-input-is-valid="true"] > &': {
          color: theme.validGreen,
        },
        '[data-input-is-modified="true"] > &': {
          color: theme.teal1,
        },
      },
    } as Styles)
);
