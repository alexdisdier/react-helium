import * as React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import styles from './iconSpinner.style';

interface Props extends WithStylesProps<typeof styles> {
  size?: number;
  speed?: string;
  repeatCount?: string;
}

export const IconSpinner: React.FC<Props> = ({
  classes,
  size = null,
  speed = '0.5',
  repeatCount = 'indefinite'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    viewBox="0 0 50 50"
    aria-hidden="true"
    className={classes.root}
    style={{ width: `${size}px`, height: `${size}px` }}
    x="0px"
    y="0px"
  >
    <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur={`${speed}s`}
        repeatCount={`${repeatCount}`}
      />
    </path>
  </svg>
);

export default withStyles(styles)(IconSpinner);
