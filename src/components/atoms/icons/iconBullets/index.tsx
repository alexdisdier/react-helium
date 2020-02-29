import * as React from 'react';

import useStyles from './iconBullets.style';

type Props = {
  size?: number;
};

export const IconBullets: React.FC<Props> = ({ size = null }) => {
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
      <path d="M6.784 14.113a1.779 1.779 0 100 3.556 1.779 1.779 0 100-3.556zm0-7.113a1.779 1.779 0 100 3.556 1.779 1.779 0 100-3.556zm0 14.226c-.987 0-1.784.806-1.784 1.778s.809 1.778 1.784 1.778 1.784-.806 1.784-1.778-.797-1.778-1.784-1.778zm3.567 2.964H27v-2.371H10.351v2.37zm0-7.113H27v-2.371H10.351v2.37zm0-9.484v2.37H27v-2.37H10.351z" />
    </svg>
  );
};

export default IconBullets;
