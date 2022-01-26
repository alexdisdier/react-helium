import * as React from 'react';

import useStyles from './iconBarCenter.style';

type Props = {
  size?: number;
  speed?: string;
  repeatCount?: string;
};

export const IconBarCenter: React.FC<Props> = ({
  size = null,
  speed = '0.5',
  repeatCount = 'indefinite',
}) => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 30"
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
      className={classes.root}
      fillRule="evenodd"
    >
      <rect x="0" y="10" width="4" height="10" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
      </rect>
      <rect x="8" y="10" width="4" height="10" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.15s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.15s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
      </rect>
      <rect x="16" y="10" width="4" height="10" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.3s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.3s"
          dur={`${speed}s`}
          repeatCount={`${repeatCount}`}
        />
      </rect>
    </svg>
  );
};

export default IconBarCenter;
