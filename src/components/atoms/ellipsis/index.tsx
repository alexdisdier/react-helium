import * as React from 'react';

import useStyles from './ellipsis.style';

interface Props {
  children: any;
  maxWidth?: string;
  color?: string;
}

export const Ellipsis: React.FC<Props> = ({
  children,
  maxWidth = 'inherit',
  color = '',
}) => {
  // @ts-ignore
  const classes = useStyles({ maxWidth, color });

  return <div className={classes.root}>{children}</div>;
};

export default Ellipsis;
