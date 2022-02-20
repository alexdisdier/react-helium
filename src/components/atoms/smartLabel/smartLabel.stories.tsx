import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean,
  text,
  withKnobs,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
  STATUS_MODIFIED,
} from '../../../constant/status';

import SmartLabel from '.';

import README from './README.md';

const stories = storiesOf('Atoms/SmartLabel', module);

stories.addDecorator(withKnobs);

stories.addParameters({
  readme: {
    content: README,
  },
});

const statusOptions = {
  Invalid: STATUS_INVALID,
  Caution: STATUS_CAUTION,
  Valid: STATUS_VALID,
  Modified: STATUS_MODIFIED,
};

stories.add('default', () => {
  const statusValue: unknown = options('Status', statusOptions, STATUS_VALID, {
    display: 'inline-radio',
  });

  return (
    <SmartLabel
      forId="1"
      text={text('label text', '')}
      inputHasFocus={boolean('inputHasFocus', false)}
      inputHasValue={boolean('inputHasValue', false)}
      status={statusValue as any}
      maxWidth={boolean('maxWidth', false)}
      required={boolean('required', false)}
      hideLabel={boolean('hideLabel', false)}
    >
      <p>{text('Child', 'I am child')}</p>
    </SmartLabel>
  );
});
