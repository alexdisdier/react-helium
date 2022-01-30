import React, { FC, LegacyRef, useState } from 'react';
import uniqueId from 'lodash.uniqueid';

import { Label, TextInput } from '../../atoms';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
} from '../../../constant/status';

export interface Props {
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
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
  errorMessage?: string;
}

const id: string = uniqueId('ftc_');

export const TextField: FC<Props> = ({
  label,
  onValueChange,
  value = '',
  placeholder,
  invalid = false,
  caution = false,
  valid = false,
  hideLabel = false,
  disabled = false,
  required = false,
  inputRef = () => {},
  errorMessage = '',
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = () => setHasFocus(true);

  const handleBlur = () => setHasFocus(false);

  const handleChange = (e) => onValueChange(e);

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
    hideLabel,
  };

  const inputProps = {
    placeholder: placeholder,
    id: id,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
    handleChange: handleChange,
    value,
    inputRef,
    status,
    disabled,
    required,
    errorMessage,
  };

  return (
    <Label {...labelProps}>
      <TextInput type="text" {...inputProps} />
    </Label>
  );
};

export default TextField;
