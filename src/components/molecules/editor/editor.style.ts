export default theme => ({
  root: {
    minHeight: 84,
    maxHeight: 152,
    backgroundColor: 'transparent',
    fontSize: 14,
    border: `1px solid ${theme.grey5}`,
    overflow: 'scroll',
    fontWeight: 400,
    color: theme.grey1,
    padding: '8px 11px 9px 11px',
    transition: 'border-color 150ms linear 0ms',
    '&::placeholder': {
      color: theme.grey4
    },
    '&[data-is-disabled="true"]': {
      opacity: 0.3
    },
    '&[data-has-focus="true"]': {
      borderColor: theme.teal3
    }
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  unorderedList: {
    position: 'relative',
    paddingLeft: 22,
    '&::before': {
      position: 'absolute',
      content: '"•"',
      color: '#5246f7',
      fontWeight: 'bold',
      width: '1em',
      marginLeft: '-1em'
    }
  }
});
