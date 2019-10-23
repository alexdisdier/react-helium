export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.white
  },
  label: {
    color: theme.grey1,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    paddingBottom: 8,
    '[data-input-is-required="true"] > &::before': {
      content: '"* "',
      color: theme.red
    }
  }
});
