import React, { FC, ReactElement, JSXElementConstructor } from 'react';

import useStyles from './invisible.style';

interface Props {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  visible?: boolean;
}

export const Invisible: FC<Props> = ({ children, visible = false }) => {
  const classes = useStyles();

  if (visible) return children;

  return (
    <div className={classes.root} data-testid="invisible-wrapper">
      {children}
    </div>
  );
};

export default Invisible;
