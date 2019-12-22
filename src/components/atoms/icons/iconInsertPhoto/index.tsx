import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './iconInsertPhoto.style';

type Props = {
  classes: ClassNameMap<string>;
  size?: number;
};

export const IconInsertPhoto: React.FC<Props> = ({ classes, size = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    viewBox="0 0 32 32"
    aria-hidden="true"
    className={classes.root}
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <path
      d="M2.55 29.78l-.35.72h27.578l-.323-.707-8.667-19-.44-.964-.464.951L13.8 23.23l-3.865-6.778-.468-.821-.415.85-6.5 13.3z"
      className={classes.fill}
    />
  </svg>
);

export default injectSheet(styles)(IconInsertPhoto);
