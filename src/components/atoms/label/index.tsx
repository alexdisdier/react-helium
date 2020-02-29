import React from 'react';

import useStyles from './label.style';

interface Props {
  text: string;
  forId: string;
  children: React.ReactNode;
  required?: boolean;
  hideLabel?: boolean;
}

export const Label: React.SFC<Props> = ({
  text,
  forId,
  children,
  required = false,
  hideLabel
}) => {
  const classes = useStyles();

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

export default Label;
