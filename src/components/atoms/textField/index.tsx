import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';

import Label from '../label';
import TextInput from '../textInput';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID
} from '../../../constant/status';

interface Props {
  label: string;
  onValueChange: (e) => void;
  value?: string;
  placeholder?: string;
  invalid?: boolean;
  caution?: boolean;
  valid?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
  required?: boolean;
  inputRef?: Function;
  // errorMessage?: string;
}

const id: string = uniqueId('ftc_');

export const TextField: React.FC<Props> = ({
  label,
  onValueChange,
  value = '',
  placeholder = null,
  invalid = false,
  caution = false,
  valid = false,
  hideLabel = false,
  disabled = false,
  required = false,
  inputRef = () => {}
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = () => setHasFocus(true);

  const handleBlur = () => setHasFocus(false);

  const handleChange = e => onValueChange(e);

  let status;

  if (invalid) {
    status = STATUS_INVALID;
  } else if (caution) {
    status = STATUS_CAUTION;
  } else if (valid) {
    status = STATUS_VALID;
  } else {
    status = null;
  }

  const labelProps = {
    forId: id,
    text: label,
    required,
    inputHasValue: !!value,
    hasFocus,
    status,
    hideLabel
  };

  const inputProps = {
    type: 'text',
    placeholder,
    id: id,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
    handleChange: handleChange,
    value,
    inputRef,
    status,
    disabled,
    required
  };

  return (
    <Label {...labelProps}>
      <TextInput {...inputProps} />
    </Label>
  );
};

export default TextField;
