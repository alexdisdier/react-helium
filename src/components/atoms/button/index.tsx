import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

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
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.SFC<Props> = ({
  classes,
  children,
  onClick = () => {},
  primary = false,
  secondary = false,
  warning = false,
  disabled = false,
  type = 'button'
}) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    onClick: handleClick,
    type,
    className: classes.root,
    disabled,
    'data-is-primary': primary,
    'data-is-secondary': secondary,
    'data-is-warning': warning
  };

  return (
    <button {...rootProps}>
      <span className={classes.text}>{children}</span>
    </button>
  );
};

export default injectSheet(styles)(Button);
