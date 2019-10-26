import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options
} from '@storybook/addon-knobs';

import { TextField } from '.';
import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID
} from '../../../constant/status';

import TextFieldReadme from './text.field.README.md';

const onValueChange = action('handleChange');

class ControlledFieldText extends React.Component {
  state = {
    value: ''
  };

  onValueChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { label, ...otherProps } = this.props;
    const { value } = this.state;
    return (
      <TextField
        onValueChange={this.onValueChange}
        value={value}
        label={label}
        {...otherProps}
      />
    );
  }
}

const stories = storiesOf('Text Field', module);
stories.addParameters({
  readme: {
    content: TextFieldReadme
  }
});

stories.addDecorator(withKnobs);
stories.add('default', () => {
  const status = options(
    'Status',
    {
      Default: '',
      Invalid: STATUS_INVALID,
      Caution: STATUS_CAUTION,
      Valid: STATUS_VALID
    },
    '',
    { display: 'inline-radio' }
  );
  return (
    <ControlledFieldText
      label={text('Label', 'Text Field')}
      onValueChange={onValueChange}
      value={text('Value', '')}
      placeholder={text('Label', 'I am The placeholder')}
      invalid={status === STATUS_INVALID}
      caution={status === STATUS_CAUTION}
      valid={status === STATUS_VALID}
      hideLabel={boolean('Hide label', false)}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
    />
  );
});
