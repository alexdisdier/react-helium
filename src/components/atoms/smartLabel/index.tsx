import React, { FC, ReactElement, JSXElementConstructor } from 'react';

import Invisible from '../invisible';

import useStyles from './smartLabel.style';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
  STATUS_MODIFIED,
} from '../../../constant/status';

interface Props {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  forId: string;
  text: string;
  inputHasFocus: boolean;
  inputHasValue: boolean;
  status?:
    | typeof STATUS_INVALID
    | typeof STATUS_CAUTION
    | typeof STATUS_VALID
    | typeof STATUS_MODIFIED;
  maxWidth?: boolean;
  required?: boolean;
  hideLabel?: boolean;
}

export const SmartLabel: FC<Props> = ({
  children,
  forId,
  text,
  inputHasFocus,
  inputHasValue,
  status = null,
  maxWidth = false,
  required = false,
  hideLabel = false,
}) => {
  const classes = useStyles();

  const rootProps = {
    className: classes.root,
    'data-input-has-focus': inputHasFocus,
    'data-input-has-value': inputHasValue,
    'data-input-is-required': required,
    'data-input-is-invalid': status === STATUS_INVALID,
    'data-input-is-caution': status === STATUS_CAUTION,
    'data-input-is-valid': status === STATUS_VALID,
    'data-input-is-modified': status === STATUS_MODIFIED,
    'data-is-max-width': maxWidth,
    'data-testid': 'smartlabel',
  };

  return (
    <label {...rootProps} htmlFor={forId}>
      <Invisible visible={!hideLabel}>
        <div className={classes.label}>
          <span>{text}</span>
        </div>
      </Invisible>
      {children}
    </label>
  );
};

export default SmartLabel;
