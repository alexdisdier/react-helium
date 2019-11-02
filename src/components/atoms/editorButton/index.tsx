import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './editorButton.style';

type Props = {
  classes: ClassNameMap<string>;
  label?: string;
  icon?: React.ReactNode;
  onClick?: (x) => void;
  active?: boolean;
  style?: string;
  disabled?: boolean;
  type?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EditorButton: React.SFC<Props> = ({
  classes,
  label = '',
  // icon = null,
  onClick = () => {},
  active = false,
  style = '',
  disabled = false,
  type = 'button'
}) => {
  const [isActive, setActive] = useState(active);

  const handleClick = e => {
    e.preventDefault(); // This allows to lock the key command
    console.log('active', active);
    if (!disabled && onClick && !active) {
      setActive(!isActive);
      console.log('if style', style);
      onClick(style);
    }
  };

  const rootProps = {
    // onMouseDown has to be used instead of onClick to be able to lock the key command
    type,
    className: classes.root,
    disabled,
    'data-is-active': isActive || active
  };

  return (
    <button onMouseDown={handleClick} {...rootProps}>
      <span className={classes.text}>{label}</span>
    </button>
  );
};

export default injectSheet(styles)(EditorButton);
