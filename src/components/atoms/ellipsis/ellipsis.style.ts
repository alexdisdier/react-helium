import { createUseStyles, Styles } from 'react-jss';

export default createUseStyles({
  root: {
    'white-space': 'nowrap',
    maxWidth: (props: { maxWidth: number }) =>
      props.maxWidth ? props.maxWidth : 'inherit',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: (props: { color: string }) =>
      props.color ? props.color : 'inherit',
  },
} as Styles);
