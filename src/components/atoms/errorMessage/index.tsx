import React, { FC } from 'react';

import useStyles from './errorMessage.style';

interface Props {
  text: string;
}

export const ErrorMessage: FC<Props> = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.content}>{text}</div>;
};

export default ErrorMessage;
