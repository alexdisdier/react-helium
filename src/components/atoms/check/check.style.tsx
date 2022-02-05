import { createUseStyles, Styles } from 'react-jss';
import { MIN_TARGET_SIZE, FOCUS_OUTLINE_WIDTH } from '../../../constant';

type Theme = {
  [key: string]: string;
};

export default createUseStyles(
  (theme: Theme) =>
    ({
      root: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          height: MIN_TARGET_SIZE,
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
        },
        '&:not([data-is-disabled=true])': {
          cursor: 'pointer',
        },
        '&[data-is-disabled=true]': {
          opacity: 0.3,
          color: theme.grey3,
        },
      },
      checkbox: {
        order: 2,
        boxSizing: 'border-box',
        width: 18,
        height: 18,
        flexShrink: 0,
        color: theme.grey4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2,
        borderColor: 'currentColor',
        overflow: 'hidden',
        boxShadow: `0 0 0 0 ${theme.indigoPastel2}`,
        transition: `box-shadow 150ms linear 0ms, border-color 100ms linear 0ms`,
        position: 'relative',
        '&[data-is-dark=true]': {
          color: theme.grey2,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          borderRadius: 1,
          top: 1,
          left: 1,
          right: 1,
          bottom: 1,
          backgroundColor: theme.indigo3,
          opacity: 0,
          transformOrigin: 'center',
          transform: 'scaleX(0) scaleY(0)',
          transition: 'opacity 100ms linear 0ms, transform 0ms linear 100ms',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 4,
          left: 6,
          right: 5,
          bottom: 3,
          opacity: 0,
          transformOrigin: 'center',
          transform: 'rotate(45deg) translateY(-1px) translateX(-1px)',
          borderWidth: '0 2px 2px 0',
          borderStyle: 'solid',
          borderColor: theme.white1,
          boxSizing: 'border-box',
          transition: 'opacity 100ms linear 0ms',
        },
        '&[data-is-indeterminate=true]': {
          '&::before': {
            backgroundColor: theme.white1,
          },
          '&::after': {
            top: 7,
            left: 3,
            right: 3,
            bottom: 7,
            transform: 'unset',
            borderWidth: '0 0 2px 0',
            borderColor: theme.indigo3,
          },
        },
        '&[data-has-focus=true]': {
          boxShadow: `0 0 0 ${FOCUS_OUTLINE_WIDTH}px ${theme.indigoPastel2}`,
        },
        '&[data-is-checked=true]': {
          color: theme.indigo3,
          '&::before': {
            opacity: 1,
            transform: 'scaleX(1) scaleY(1)',
            transition: 'opacity 100ms linear 0ms, transform 50ms linear 0ms',
          },
          '&::after': {
            opacity: 1,
            transition: 'opacity 100ms linear 100ms',
          },
        },
      },
      label: {
        fontSize: 11,
        fontWeight: 400,
        lineHeight: '14px',
        color: theme.grey2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:not([data-is-inverted=true])': {
          order: 3,
          marginLeft: 7,
        },
        '&[data-is-inverted=true]': {
          order: 1,
          marginRight: 7,
        },
        '&[data-is-largelabel=true]': {
          fontSize: 14,
          lineHeight: 'unset',
        },
        '&[data-is-bold=true]': {
          fontWeight: 700,
        },
        '&[data-is-darklabel=true]': {
          color: theme.grey1,
        },
      },
      input: {
        position: 'absolute',
        zIndex: 0,
        transform: 'translateX(-200%)',
      },
    } as Styles)
);
