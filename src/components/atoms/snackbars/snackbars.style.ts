export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'baseline',
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(0)',
    backgroundColor: theme.grey1,
    borderRadius: '2px 2px 0 0',
    color: '#fff',
    boxShadow: `2px 3px 6px 0 rgba(52,50,58,0.20)`,
    padding: '7px 21px',
    fontSize: 14,
    lineHeight: '17px',
    transition: 'transform 150ms linear',
    opacity: 1,
    zIndex: 6,
    '&[data-is-ready=true]': {
      opacity: 0,
      transform: 'translateX(-50%) translateY(100%)'
    },
    '&[data-has-error=true]': {
      backgroundColor: theme.warningRed
    },
    '&[data-is-top=true]': {
      top: 0,
      bottom: 'initial',
      transform: 'translateX(-50%) translateY(0)',
      '&[data-is-ready=true]': {
        opacity: 0,
        transform: 'translateX(-50%) translateY(-50%)'
      }
    }
  },
  noSnackbar: {
    opacity: 0
  },
  undoClickBtn: {
    color: theme.white,
    fontSize: 11,
    fontWeight: 700,
    marginLeft: 21,
    textTransform: 'uppercase'
  }
});
