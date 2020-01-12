import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './iconDuo.style';

type Props = {
  classes: ClassNameMap<string>;
  size?: number;
  speed?: string;
  repeatCount?: string;
};

export const IconDuo: React.FC<Props> = ({
  classes,
  size = null,
  speed = '0.5',
  repeatCount = 'indefinite'
}) => (
  <div className={classes.root}>
    <div className={classes.duo} data-is-duo1>
      <div className={classes.dot} data-is-dota />
      <div className={classes.dot} data-is-dotb />
    </div>
    <div className={classes.duo} data-is-duo2>
      <div className={classes.dot} data-is-dota />
      <div className={classes.dot} data-is-dotb />
    </div>
  </div>
);

export default injectSheet(styles)(IconDuo);
