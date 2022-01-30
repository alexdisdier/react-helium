import React, { FC, useState } from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from '@storybook/addon-knobs';

import { TextField, Props } from '.';
import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
} from '../../../constant/status';

import TextFieldReadme from './README.md';

export const ControlledFieldText: FC<Props> = ({ label, ...otherProps }) => {
  const [value, setValue] = useState('');
  return (
    <TextField
      onValueChange={(e) => setValue(e.target.value)}
      value={value}
      label={label}
      {...otherProps}
    />
  );
};

const stories = storiesOf('Molecules/Text Field', module);
stories.addParameters({
  readme: {
    content: TextFieldReadme,
  },
});

stories.addDecorator(withKnobs);
stories.add('default', () => {
  const status = options(
    'Status',
    {
      Default: '',
      Invalid: STATUS_INVALID,
      Caution: STATUS_CAUTION,
      Valid: STATUS_VALID,
    },
    '',
    { display: 'inline-radio' }
  );
  return (
    <ControlledFieldText
      label={text('Label', 'Text Field')}
      placeholder={text('Placeholder', 'I am The placeholder')}
      errorMessage={text('Error Message', 'This field is required')}
      invalid={status === STATUS_INVALID}
      caution={status === STATUS_CAUTION}
      valid={status === STATUS_VALID}
      hideLabel={boolean('Hide label', false)}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
    />
  );
});
