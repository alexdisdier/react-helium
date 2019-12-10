export default theme => ({
  wrapper: {
    // display: 'inline-block',
    position: 'relative'
  },
  tooltip: {
    width: '100%',
    position: 'absolute',
    left: 50,
    top: 50,
    fontSize: 12,
    marginTop: 40,
    display: 'inline-block',
    '&[data-is-top=true]': {
      marginTop: -5
    },
    '&[data-is-right=true]': {
      marginLeft: 5
    },
    '&[data-is-bottom=true]': {
      marginTop: 5
    },
    '&[data-is-left=true]': {
      marginLeft: -5
    }
  },
  arrow: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderRightColor: 'transparent',
    borderStyle: 'solid',

    top: '50%',
    left: 0,
    marginTop: -5,
    borderWidth: '5px 5px 5px 0',

    '&[data-is-right=true]': {
      top: '50%',
      left: 'auto',
      marginLeft: -5,
      borderWidth: '5px 5px 5px 0',
      borderRightColor: theme.black
    },
    '&[data-is-top=true]': {
      top: 'auto',
      bottom: -5,
      left: '50%',
      marginLeft: -5,
      borderWidth: '5px 5px 0',
      borderTopColor: theme.black
    },
    '&[data-is-left=true]': {
      top: '50%',
      marginTop: -5,
      borderWidth: '5px 0 5px 5px',
      borderLeftColor: theme.black,
      right: -5,
      left: 'auto'
    },
    '&[data-is-bottom=true]': {
      top: 0,
      left: '50%',
      marginLeft: -5,
      borderWidth: '0 5px 5px',
      borderBottomColor: theme.black
    }
  },
  inner: {
    maxWidth: 200,
    padding: '3px 8px',
    color: theme.white,
    textAlign: 'center',
    backgroundColor: theme.black,
    borderRadius: 4
  }
});
