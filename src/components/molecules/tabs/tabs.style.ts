export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'inherit',
    paddingTop: 10,
    paddingLeft: 14,
    '&[data-has-modal=true]': {
      paddingTop: 0
    }
  },
  slider: {
    position: 'relative',
    width: '30px',
    height: '5px',
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
});
