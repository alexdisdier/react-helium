import React from 'react';
// import { WithStylesProps } from 'react-jss';

import useStyles from './image.style';

interface Props {
  // classes?: ClassNameMap<string> | undefined;
  src: string;
}

export const Image: React.FC<Props> = ({ src }) => {
  const classes = useStyles();
  return <img className={classes.root} src={src} alt={src} />;
};

export default Image;
