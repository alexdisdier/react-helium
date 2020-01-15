export default () => ({
  root: {
    backgroundColor: 'inherit',
    paddingTop: 10,
    paddingLeft: 14,
    '&[data-has-modal=true]': {
      paddingTop: 0
    }
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
