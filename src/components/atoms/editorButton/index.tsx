/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { STYLE } from '../../../utils/editor';

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
  icon = null,
  onClick = () => {},
  active = false,
  style = '',
  disabled = false,
  type = 'button'
}) => {
  const [isActive, setActive] = useState(active);

  const handleClick = e => {
    e.preventDefault(); // This allows to lock the key command

    if (!disabled && onClick) {
      setActive(true);

      onClick(style);
    }

    STYLE.map(type => {
      if (type === style) setActive(false);
    });
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
      <span className={classes.text}>{icon || label}</span>
    </button>
  );
};

export default injectSheet(styles)(EditorButton);
