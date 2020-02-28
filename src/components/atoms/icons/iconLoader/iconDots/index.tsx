import * as React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import styles from './iconDots.style';

interface Props extends WithStylesProps<typeof styles> {
  size?: number;
  speed?: string;
  repeatCount?: string;
}

// svg source: https://icons8.com/preloaders/en/search/dots
export const IconDots: React.FC<Props> = ({
  classes,
  size = null,
  speed = '0.5',
  repeatCount = 'indefinite'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    viewBox="0 0 128 35"
    aria-hidden="true"
    className={classes.root}
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <g>
      <circle fillOpacity="1" cx="17.5" cy="17.5" r="17.5" />
      <animate
        attributeName="opacity"
        begin="0s"
        dur={`${speed}s`}
        repeatCount={`${repeatCount}`}
        keyTimes="0;0.167;0.5;0.668;1"
        values="0.3;1;1;0.3;0.3"
      />
    </g>
    <g>
      <circle fillOpacity="1" cx="110.5" cy="17.5" r="17.5" />
      <animate
        attributeName="opacity"
        begin="0s"
        dur={`${speed}s`}
        repeatCount={`${repeatCount}`}
        keyTimes="0;0.334;0.5;0.835;1"
        values="0.3;0.3;1;1;0.3"
      />
    </g>
    <g>
      <circle fillOpacity="1" cx="64" cy="17.5" r="17.5" />
      <animate
        attributeName="opacity"
        begin="0s"
        dur={`${speed}s`}
        repeatCount={`${repeatCount}`}
        keyTimes="0;0.167;0.334;0.668;0.835;1"
        values="0.3;0.3;1;1;0.3;0.3"
      />
    </g>
  </svg>
);

export default withStyles(styles)(IconDots);
