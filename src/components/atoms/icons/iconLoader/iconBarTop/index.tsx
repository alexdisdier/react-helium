import * as React from 'react';
// import { WithStylesProps } from 'react-jss';

import useStyles from './iconBarTop.style';

type Props = {
  // classes: WithStylesProps<any>;
  size?: number;
  speed?: string;
  repeatCount?: string;
};

export const IconBarTop: React.FC<Props> = ({
  size = null,
  speed = '0.5',
  repeatCount = 'indefinite'
}) => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
      className={classes.root}
      fillRule="evenodd"
    >
      <rect x="0" y="0" width="4" height="7">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="scale"
          values="1,1; 1,3; 1,1"
          begin="0s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
      </rect>

      <rect x="10" y="0" width="4" height="7">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="scale"
          values="1,1; 1,3; 1,1"
          begin="0.2s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
      </rect>
      <rect x="20" y="0" width="4" height="7">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="scale"
          values="1,1; 1,3; 1,1"
          begin="0.4s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
      </rect>
    </svg>
  );
};
export default IconBarTop;
