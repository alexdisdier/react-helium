import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    'white-space': 'nowrap',
    maxWidth: (props) => (props.maxWidth ? props.maxWidth : 'inherit'),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: (props) => (props.color ? props.color : 'inherit'),
  },
});
