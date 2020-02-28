import * as React from 'react';
// import { WithStylesProps } from 'react-jss';

import useStyles from './iconInsertPhoto.style';

type Props = {
  // classes: WithStylesProps<any>;
  size?: number;
};

export const IconInsertPhoto: React.FC<Props> = ({ size = null }) => {
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
      <path d="M2.55 29.78l-.35.72h27.578l-.323-.707-8.667-19-.44-.964-.464.951L13.8 23.23l-3.865-6.778-.468-.821-.415.85-6.5 13.3z" />
    </svg>
  );
};

export default IconInsertPhoto;
