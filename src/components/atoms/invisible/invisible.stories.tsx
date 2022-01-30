import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import Invisible from '.';

import README from './README.md';

const stories = storiesOf('Atoms/Invisible', module);

stories.addDecorator(withKnobs);

stories.addParameters({
  readme: {
    content: README,
  },
});

stories.add('default', () => (
  <Invisible visible={boolean('Visible', false)}>
    <p> {text('Child', 'I am invisible, or not')}</p>
  </Invisible>
));
