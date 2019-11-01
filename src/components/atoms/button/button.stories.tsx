import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '.';

import ButtonReadme from './button.README.md';

const appearanceOptions = {
  Default: 'default',
  Primary: 'primary',
  Secondary: 'secondary',
  Warning: 'warning'
};

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.addParameters({
  readme: {
    content: ButtonReadme
  }
});

stories.add('default', () => {
  const hasOnClick = boolean('Has onClick', true);
  const appearanceValue = options('Appearance', appearanceOptions, 'default', {
    display: 'inline-radio'
  });

  return (
    <Button
      onClick={hasOnClick ? action('clicked') : undefined}
      primary={appearanceValue === appearanceOptions.Primary}
      secondary={appearanceValue === appearanceOptions.Secondary}
      warning={appearanceValue === appearanceOptions.Warning}
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'I am THE button')}
    </Button>
  );
});
