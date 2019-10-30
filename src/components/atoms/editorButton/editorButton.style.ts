import { MIN_TARGET_SIZE, FOCUS_OUTLINE_WIDTH } from '../../../constant';

export default theme => ({
  root: {
    height: MIN_TARGET_SIZE,
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box',
    borderWidth: 1,
    borderStyle: 'solid',
    appearance: 'none',
    flexShrink: 0,
    cursor: 'default',
    outline: 'none',
    paddingLeft: 7,
    paddingRight: 7,
    boxShadow: `0 0 0 0 ${theme.teal2light}`,
    transition: `box-shadow 150ms linear, background-color 150ms linear, border-color 150ms linear`,
    color: theme.grey2,
    borderColor: 'currentColor',
    backgroundColor: 'transparent',
    '&:not([disabled]):hover': {
      color: theme.grey1,
      cursor: 'pointer'
    },
    '&[disabled]': {
      opacity: 0.3
    },
    '&:focus': {
      boxShadow: `0 0 0 ${FOCUS_OUTLINE_WIDTH}px ${theme.teal2light}`
    },
    '&[data-is-selected="true"]': {
      color: theme.white,
      borderColor: theme.teal3,
      backgroundColor: theme.teal3,
      '&:not([disabled]):hover': {
        color: theme.white,
        backgroundColor: theme.teal2,
        borderColor: theme.teal2
      }
    }
  },
  text: {
    color: 'currentColor',
    lineHeight: `${MIN_TARGET_SIZE - 2}px`,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  }
});
