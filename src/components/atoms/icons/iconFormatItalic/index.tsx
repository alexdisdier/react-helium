import * as React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import styles from './iconFormatItalic.style';

interface Props extends WithStylesProps<typeof styles> {
  size?: number;
}

export const IconFormatItalic: React.FC<Props> = ({ classes, size = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    viewBox="0 0 32 32"
    aria-hidden="true"
    className={classes.root}
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <path d="M14 9v3h2.21l-3.42 8H10v3h8v-3h-2.21l3.42-8H22V9h-8z" />
  </svg>
);

export default withStyles(styles)(IconFormatItalic);
