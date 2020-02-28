import * as React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import styles from './button.style';

type Props = {
  classes: ClassNameMap<string>;
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  disabled?: boolean;
  type?: string;
  color?: string;
  round?: boolean;
  inverted?: boolean;
  vector?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  classes,
  children,
  onClick = () => {},
  primary = false,
  secondary = false,
  warning = false,
  disabled = false,
  type = 'button',
  color = '',
  round = false,
  inverted = false,
  vector = null
}) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  console.warn(color);

  const rootProps = {
    className: classes.root,
    onClick: handleClick,
    type,
    disabled,
    'data-is-primary': primary,
    'data-is-secondary': secondary,
    'data-is-warning': warning,
    'data-is-round': round,
    'data-is-inverted': !primary && !secondary && !warning && inverted
  };

  return (
    <button {...rootProps}>
      {vector && <span className={classes.vector}>{vector}</span>}
      <span className={classes.text}>{children}</span>
    </button>
  );
};

export default injectSheet(styles)(Button);
