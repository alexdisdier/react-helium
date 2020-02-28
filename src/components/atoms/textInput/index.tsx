import React, { useState } from 'react';
// import { WithStylesProps } from 'react-jss';

import ErrorMessage from '../errorMessage';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID
} from '../../../constant/status';

import useStyles from './textInput.style';

interface Props {
  // classes: WithStylesProps<any>;
  id?: string;
  value: string;
  type: 'text' | 'password' | 'search';
  placeholder?: string;
  handleFocus?: (e) => void;
  handleBlur?: (e) => void;
  handleChange?: (e) => void;
  inputRef?: any;
  status?: 'invalid' | 'caution' | 'valid';
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
}

export const TextInput: React.FC<Props> = ({
  id = null,
  placeholder = null,
  value,
  type,
  handleFocus = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  inputRef = () => {},
  status = null,
  disabled = false,
  required = false,
  errorMessage = ''
}) => {
  const classes = useStyles();
  const [hasFocus, setHasFocus] = useState(false);
  const [focusCounter, setFocusCounter] = useState(0);
  let timer;

  /**
   * the regex checks for a line with only white spaces.
   */
  const invalid =
    (value === '' || value.match(/^[ \t\r\n\s]*$/g)) &&
    focusCounter > 0 &&
    required;

  const focusHandler = e => {
    window.clearTimeout(timer);
    setHasFocus(true);
    handleFocus!(e);
  };

  const blurHandler = e => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      setHasFocus(false);
      if (required) setFocusCounter(focusCounter + 1);
      handleBlur(e);
    }, 50);
  };

  const rootProps = {
    className: classes.root,
    'data-has-focus': hasFocus,
    'data-has-value': !!value.length,
    'data-is-invalid':
      status === STATUS_INVALID || (invalid === null ? false : invalid),
    'data-is-caution': status === STATUS_CAUTION,
    'data-is-valid': status === STATUS_VALID,
    'data-is-disabled': disabled,
    'data-is-required': required
  };

  const inputProps = {
    onFocus: focusHandler,
    onBlur: blurHandler,
    onChange: handleChange,
    ref: inputRef,
    disabled
  };

  return (
    <>
      <div {...rootProps}>
        <input
          id={id!}
          className={classes.input}
          type={type}
          placeholder={placeholder!}
          value={value}
          {...inputProps}
        />
        {invalid && <ErrorMessage text={errorMessage} />}
      </div>
    </>
  );
};

export default TextInput;
