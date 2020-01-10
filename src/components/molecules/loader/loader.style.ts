export default () => ({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    // background: 'inherit',

    // Centered loading
    '&[data-is-overlay=true]': {
      zIndex: 1000,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },
  text: {
    fontSize: props => props.size / 2.2,
    '&::first-letter': {
      textTransform: 'uppercase'
    }
  }
});
