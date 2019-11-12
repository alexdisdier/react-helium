/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { STYLE } from '../../../utils/editor';

import {
  HEADER_ONE,
  BOLD,
  LINK,
  UNORDERED_LIST_ITEM
} from '../../../constant/editor';

import styles from './editorButton.style';

type Props = {
  classes: ClassNameMap<string>;
  icon?: React.ReactNode;
  onClick?: (x) => void;
  promptForLink?: (x) => void;
  removeLink?: () => void;
  active?: boolean;
  buttonType: string;
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
   * the local isActive variable monitors block and inline styles active state
   * For link button, the active state is monitored within the richEditor component.
   */
  const [isActive, setActive] = useState(active);

  const handleClick = e => {
    e.preventDefault(); // Allows to lock the key command

    if (!disabled && onClick) {
      setActive(true);
      onClick(buttonType);
    }

    STYLE.map(type => type === buttonType && setActive(false));
  };

  const toggleLink = e => {
    e.preventDefault(); // Allows to lock the key command

    if (!disabled && !active) return promptForLink(e);
    return removeLink();
  };

  const rootProps = {
    // onMouseDown has to be used instead of onClick to be able to lock the key command
    className: classes.root,
    disabled,
    'data-is-active': isActive || active
  };

  let label;
  switch (buttonType) {
    case HEADER_ONE:
      label = 'H1';
      break;
    case BOLD:
      label = 'B';
      break;
    case LINK:
      label = 'L';
      break;
    case UNORDERED_LIST_ITEM:
      label = 'UL';
      break;
    default:
      label = buttonType[0].toUpperCase();
  }

  return (
    <button
      onMouseDown={buttonType === LINK ? toggleLink : handleClick}
      {...rootProps}
    >
      <span className={classes.text}>{icon || label}</span>
    </button>
  );
};

export default injectSheet(styles)(EditorButton);
