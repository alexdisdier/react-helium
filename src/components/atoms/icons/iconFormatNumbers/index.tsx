import * as React from 'react';
// import { WithStylesProps } from 'react-jss';

import useStyles from './iconFormatNumbers.style';

type Props = {
  // classes: WithStylesProps<any>;
  size?: number;
};

export const IconFormatNumbers: React.FC<Props> = ({ size = null }) => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={classes.root}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <path d="M6 21h2v.5H7v1h1v.5H6v1h3v-4H6v1zm1-9h1V8H6v1h1v3zm-1 3h1.8L6 17.1v.9h3v-1H7.2L9 14.9V14H6v1zm5-6v2h14V9H11zm0 14h14v-2H11v2zm0-6h14v-2H11v2z" />
    </svg>
  );
};
export default IconFormatNumbers;
