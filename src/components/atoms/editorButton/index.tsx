/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { STYLE } from '../../../utils/editor';

import styles from './editorButton.style';

type Props = {
  classes: ClassNameMap<string>;
  icon?: React.ReactNode;
  onClick?: (x) => void;
  promptForLink?: (x) => void;
  removeLink?: () => void;
  active?: boolean;
  buttonType: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EditorButton: React.FC<Props> = ({
  classes,
  icon = null,
  onClick = () => {},
  promptForLink = () => {},
  removeLink = () => {},
  active = false,
  buttonType,
  disabled = false
}) => {
  /**
   * isActive monitors block and inline styles
   * For link button, it is monitored within the richEditor component.
   */
  const [isActive, setActive] = useState(active);

  const handleClick = e => {
    e.preventDefault(); // This allows to lock the key command

    if (!disabled && onClick) {
      setActive(true);
      onClick(buttonType);
    }

    STYLE.map(type => {
      if (type === buttonType) setActive(false);
    });
  };

  const toggleLink = e => {
    e.preventDefault(); // This allows to lock the key command
    if (!disabled && !active) {
      promptForLink(e);
    } else {
      removeLink();
    }
  };

  const rootProps = {
    // onMouseDown has to be used instead of onClick to be able to lock the key command
    className: classes.root,
    disabled,
    'data-is-active': isActive || active
  };

  let label;
  switch (buttonType) {
    case 'header-one':
      label = 'H1';
      break;
    case 'BOLD':
      label = 'B';
      break;
    case 'LINK':
      label = 'L';
      break;
    case 'unordered-list-item':
      label = 'UL';
      break;
    default:
      label = buttonType[0].toUpperCase();
  }

  return (
    <button
      onMouseDown={buttonType === 'LINK' ? toggleLink : handleClick}
      {...rootProps}
    >
      <span className={classes.text}>{icon || label}</span>
    </button>
  );
};

export default injectSheet(styles)(EditorButton);
