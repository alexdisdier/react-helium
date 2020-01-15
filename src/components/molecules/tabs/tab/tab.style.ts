export default theme => ({
  input: {
    display: 'none'
  },
  li: {
    display: 'inline-block',
    marginRight: 20,
    paddingBottom: 10,
    marginBottom: -2,
    fontSize: 12,
    color: theme.grey1
    // '&[data-is-active=true]': {
    //   borderBottom: `4px solid ${theme.grey1}`
    // }
  },
  label: {
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:hover, &:focus, &:active': {
      opacity: 0.8
    }
  },
  slider: {
    position: 'relative',
    width: '25%',
    transition: ' all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07)'
  },
  indicator: {
    position: 'relative',
    width: 50,
    maxWidth: '100%',
    margin: '0 auto',
    height: 4,
    background: '#428BFF',
    borderRadius: 1
  }
});
