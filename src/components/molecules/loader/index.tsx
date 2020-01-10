import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import IconLoader from '../../atoms/icons/iconLoader';

import styles from './loader.style';

type Props = {
  classes: ClassNameMap<string>;
  text?: string;
  size?: number;
  slow?: boolean;
  moderate?: boolean;
  fast?: boolean;
  repeatCount?: string;
  overlay?: boolean;
};

export const Loader: React.FC<Props> = ({
  classes,
  text = '',
  size = null || undefined,
  slow = false,
  moderate = false,
  fast = false,
  repeatCount = 'indefinite',
  overlay = false
}) => {
  let tempo = '1.5';

  if (slow && !moderate && !fast) tempo = '3';
  if (moderate && !slow && !fast) tempo = '1.5';
  if (fast && !moderate && !slow) tempo = '0.5';

  const rootProps = {
    className: classes.root,
    'data-is-overlay': overlay
  };

  const iconProps = {
    text,
    size,
    speed: tempo,
    repeatCount
  };

  return (
    <div {...rootProps}>
      <IconLoader {...iconProps} />
      <span className={classes.text}>{text}</span>
    </div>
  );
};

export default injectSheet(styles)(Loader);
