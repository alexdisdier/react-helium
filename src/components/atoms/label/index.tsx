import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './label.style';

interface Props {
  classes: ClassNameMap<string>;
  text: string;
  forId: string;
  children: React.ReactNode;
  required?: boolean;
}

export const Label: React.SFC<Props> = ({
  classes,
  text,
  forId,
  children,
  required = false
}) => {
  const attr = {
    'data-input-is-required': required
  };

  return (
    <label {...attr} htmlFor={forId}>
      <div className={classes.label}>
        <span>{text}</span>
      </div>
      {children}
    </label>
  );
};

export default injectSheet(styles)(Label);
