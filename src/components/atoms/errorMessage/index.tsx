import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import styles from './errorMessage.style';

interface Props extends WithStylesProps<typeof styles> {
  text: string;
}

export const ErrorMessage: React.FC<Props> = ({ classes, text }) => (
  <div className={classes.content}>{text}</div>
);

export default withStyles(styles)(ErrorMessage);
