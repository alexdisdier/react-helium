export default theme => ({
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
    background: 'inherit'
  }
});
