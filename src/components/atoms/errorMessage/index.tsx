import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './errorMessage.style';

interface Props {
  classes: ClassNameMap<string>;
  text: string;
}

export const ErrorMessage: React.FC<Props> = ({ classes, text }) => (
  <div className={classes.content}>{text}</div>
);

export default injectSheet(styles)(ErrorMessage);
