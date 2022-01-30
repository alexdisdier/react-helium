import { createUseStyles, Styles } from 'react-jss';

export default createUseStyles({
  root: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    overflow: 'hidden',
    position: 'absolute',
  },
} as Styles);
