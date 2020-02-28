import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import styles from './image.style';

interface Props {
  classes?: ClassNameMap<string> | undefined;
  src: string;
}

export const Image: React.FC<Props> = ({ classes = null, src }) => {
  return <img className={classes!.root} src={src} alt={src} />;
};

export default withStyles(styles)(Image);
