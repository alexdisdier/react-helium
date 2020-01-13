export default {
  root: {
    display: 'block',
    fill: 'currentColor',
    width: '100%',
    height: 'auto',
    transition: 'color 100ms linear 0ms',
    paddingBottom: 20
  },
  duo: {
    height: 20,
    width: 50,
    background: 'hsla(0, 0%, 0%, 0)',
    position: 'absolute',

    animationDuration: '0.8s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',

    '&[data-is-duo1=true]': {
      left: 0,
      animationName: 'spin'
    },
    '&[data-is-duo2=true]': {
      left: 30,
      animationName: 'spin',
      animationDirection: 'reverse'
    }
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    background: '#3e9f92',
    position: 'absolute',

    animationDuration: '0.8s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',

    '&[data-is-dotb=true]': {
      right: 0
    }
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '50%': {
      transform: 'rotate(180deg)'
    },
    '100%': {
      transform: 'rotate(180deg)'
    }
  }
};
