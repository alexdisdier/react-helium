import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './button.style';

type Props = {
  classes: ClassNameMap<string>;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.SFC<Props> = ({ classes, children, onClick }) => (
  <button onClick={onClick} className={classes.button}>
    {children}
  </button>
);

export default injectSheet(styles)(Button);
