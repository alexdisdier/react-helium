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

import README from './README.md';

const appearanceOptions = {
  Default: 'default',
  Primary: 'primary',
  Secondary: 'secondary',
  Warning: 'warning'
};

const stories = storiesOf('Atoms/Button', module);

stories.addDecorator(withKnobs);

stories.addParameters({
  readme: {
    content: README
  }
});

stories.add('default', () => {
  const hasVector = boolean('Vector icon', false);
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
      color={text('Custom color', '')}
      round={boolean('Round Borders', false)}
      inverted={boolean('Inverted', false)}
      disabled={boolean('Disabled', false)}
      vector={
        hasVector && (
          <span role="img" aria-label="rocket">
            🚀
          </span>
        )
      }
    >
      {text('Label', 'I am THE button')}
    </Button>
  );
});
