import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './label.style';

interface Props {
  classes: ClassNameMap<string>;
  text: string;
  forId: string;
  children: React.ReactNode;
  required?: boolean;
  hideLabel?: boolean;
}

export const Label: React.SFC<Props> = ({
  classes,
  text,
  forId,
  children,
  required = false,
  hideLabel
}) => {
  const rootProps = {
    className: classes.root,
    'data-input-is-required': required
  };

  return (
    <label {...rootProps} htmlFor={forId}>
      {!hideLabel && (
        <div className={classes.label}>
          <span>{text}</span>
        </div>
      )}
      {children}
    </label>
  );
};

export default injectSheet(styles)(Label);
