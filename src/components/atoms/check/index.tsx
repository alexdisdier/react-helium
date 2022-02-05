import React, { FC, LegacyRef, useState } from 'react';
import uniqueId from 'lodash.uniqueid';

import Invisible from '../invisible';

import useStyles from './check.style';

interface Props {
  label: string;
  checked?: boolean;
  handleFocus?: (e) => void;
  handleBlur?: (e) => void;
  handleChange?: (e) => void;
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
  invert?: boolean;
  disabled?: boolean;
  showLabel?: boolean;
  isDark?: boolean;
  largeLabel?: boolean;
  bold?: boolean;
  darkLabel?: boolean;
  indeterminate?: boolean;
}

export const Check: FC<Props> = ({
  label,
  checked = false,
  handleFocus = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  inputRef = () => {},
  invert = false,
  disabled = false,
  showLabel = false,
  isDark = false,
  largeLabel = false,
  bold = false,
  darkLabel = false,
  indeterminate = false,
}) => {
  const classes = useStyles();
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const id = uniqueId('rh_');

  let timer;

  const localHandleFocus = (e) => {
    window.clearTimeout(timer);
    setHasFocus(true);
    handleFocus(e);
  };

  const localHandleBlur = (e) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      setHasFocus(false);
      handleBlur(e);
    }, 50);
  };

  const localHandleChange = (e) => {
    if (disabled) return;

    handleChange(e);
  };

  const rootProps = {
    className: classes.root,
    'data-is-disabled': disabled,
    title: label,
  };

  const labelProps = {
    className: classes.label,
    'data-is-inverted': invert,
    'data-is-largelabel': largeLabel,
    'data-is-bold': bold,
    'data-is-darklabel': darkLabel,
    'data-testid': 'label',
  };

  const checkboxProps = {
    className: classes.checkbox,
    'data-is-checked': checked,
    'data-has-focus': hasFocus,
    'data-is-dark': isDark,
    'data-is-indeterminate': indeterminate,
  };

  const inputProps = {
    className: classes.input,
    id: id,
    checked,
    type: 'checkbox',
    disabled,
    onFocus: localHandleFocus,
    onBlur: localHandleBlur,
    onChange: localHandleChange,
    ref: inputRef,
    'data-testid': 'input',
  };

  return (
    <label {...rootProps} htmlFor={id}>
      <Invisible visible={showLabel}>
        <div {...labelProps}>{label}</div>
      </Invisible>

      <div {...checkboxProps}>
        <input {...inputProps} />
      </div>
    </label>
  );
};

export default Check;
