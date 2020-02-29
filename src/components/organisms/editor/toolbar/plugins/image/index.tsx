import * as React from 'react';

import useStyles from './image.style';

interface Props {
  src: string;
}

export const Image: React.FC<Props> = ({ src }) => {
  const classes = useStyles();
  return <img className={classes.root} src={src} alt={src} />;
};

export default Image;
