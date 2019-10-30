import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './editorButton.style';

type Props = {
  classes: ClassNameMap<string>;
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  type?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EditorButton: React.SFC<Props> = ({
  classes,
  children,
  onClick = () => {},
  selected = false,
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
    'data-is-selected': selected
  };

  return (
    <button {...rootProps}>
      <span className={classes.text}>{children}</span>
    </button>
  );
};

export default injectSheet(styles)(EditorButton);
