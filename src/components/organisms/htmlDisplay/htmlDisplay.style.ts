export default theme => ({
  readOnly: {
    '& h1': {
      fontSize: 32,
      fontWeight: 'bold'
    },
    '& h2': {
      fontSize: 24,
      fontWeight: 'bold'
    },
    '& strong': {
      fontWeight: 'bold'
    },
    '& ul': {
      position: 'relative',
      paddingLeft: 22,
      '&::before': {
        position: 'absolute',
        content: '"•"',
        color: theme.teal3,
        fontWeight: 'bold',
        width: '1em',
        marginLeft: '-1em'
      }
    }
  }
});
