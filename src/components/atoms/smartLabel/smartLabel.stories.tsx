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
      text={text('Custom color', '')}
      inputHasFocus={boolean('Round Borders', false)}
      inputHasValue={boolean('Round Borders', false)}
      status={statusValue as any}
      maxWidth={boolean('Round Borders', false)}
      required={boolean('Round Borders', false)}
      hideLabel={boolean('Round Borders', false)}
    >
      <p> {text('Child', 'I am invisible, or not')}</p>
    </SmartLabel>
  );
});
