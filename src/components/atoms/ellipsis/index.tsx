import React, { FC, ReactChildren } from 'react';

import useStyles from './ellipsis.style';

interface Props {
  children: ReactChildren;
  maxWidth?: string;
  color?: string;
}

export const Ellipsis: FC<Props> = ({
  children,
  maxWidth = 'inherit',
  color = '',
}) => {
  const classes = useStyles({ maxWidth, color });

  return <div className={classes.root}>{children}</div>;
};

export default Ellipsis;
