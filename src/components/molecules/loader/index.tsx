import React from 'react';

import {
  IconBarCenter,
  IconBarTop,
  IconDots,
  IconSpinner,
  IconSpinnerFill,
} from '../../atoms/icons';

import useStyles from './loader.style';

type Props = {
  text?: string;
  size?: number;
  slow?: boolean;
  moderate?: boolean;
  fast?: boolean;
  repeatCount?: string;
  overlay?: boolean;
  spinnerFill?: boolean;
  spinner?: boolean;
  barCenter?: boolean;
  barTop?: boolean;
  dots?: boolean;
};

export const Loader: React.FC<Props> = ({
  text = '',
  size = 32 || undefined,
  slow = false,
  moderate = false,
  fast = false,
  repeatCount = 'indefinite',
  overlay = false,
  spinnerFill = true,
  spinner = false,
  barCenter = false,
  barTop = false,
  dots = false,
}) => {
  const classes = useStyles({ size });
  /**
   * Speed
   */
  let tempo = '1.5';

  if (slow && !moderate && !fast) tempo = '3';
  if (moderate && !slow && !fast) tempo = '1.5';
  if (fast && !moderate && !slow) tempo = '0.5';

  const iconProps = {
    text,
    size: size! < 300 ? size : 300,
    speed: tempo,
    repeatCount,
  };

  /**
   * type
   */
  let Loader;

  if (spinnerFill) Loader = <IconSpinnerFill {...iconProps} />;
  if (spinner) Loader = <IconSpinner {...iconProps} />;
  if (barCenter) Loader = <IconBarCenter {...iconProps} />;
  if (barTop) Loader = <IconBarTop {...iconProps} />;
  if (dots) Loader = <IconDots {...iconProps} />;

  const rootProps = {
    className: classes.root,
    'data-is-overlay': overlay,
  };

  return (
    <div {...rootProps}>
      {Loader && Loader}
      <span className={classes.text}>{text}</span>
    </div>
  );
};

export default Loader;
