import * as React from 'react';
// // import { WithStylesProps } from 'react-jss';

import useStyles from './ellipsis.style';

interface Props {
  // // classes: WithStylesProps<any>;
  children: any;
  maxWidth?: string;
  color?: string;
}

export const Ellipsis: React.FC<Props> = ({
  children,
  maxWidth = 'inherit',
  color = ''
}) => {
  const classes = useStyles({ maxWidth, color });

  return <div className={classes.root}>{children}</div>;
};

export default Ellipsis;
