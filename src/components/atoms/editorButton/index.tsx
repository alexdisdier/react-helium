import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './editorButton.style';

type Props = {
  classes: ClassNameMap<string>;
  label?: string;
  onClick?: (x) => void;
  active?: boolean;
  style?: string;
  disabled?: boolean;
  type?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EditorButton: React.SFC<Props> = ({
  classes,
  label = '',
  onClick = () => {},
  active = false,
  style = '',
  disabled = false,
  type = 'button'
}) => {
  const [isActive, setActive] = useState(active || false);

  const handleClick = () => {
    if (!disabled && onClick) {
      setActive(!isActive);
      onClick(style);
    }
  };

  const rootProps = {
    onClick: handleClick,
    type,
    className: classes.root,
    disabled,
    'data-is-active': isActive
  };

  return (
    <button {...rootProps}>
      <span className={classes.text}>{label}</span>
    </button>
  );
};

export default injectSheet(styles)(EditorButton);
