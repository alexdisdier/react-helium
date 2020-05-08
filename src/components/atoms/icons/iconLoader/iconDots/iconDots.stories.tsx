import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import IconDots from '.';

import { theme } from '../../../../../style';

const stories = storiesOf('Atoms/Icons/Animation/Loader/Dots', module);

stories.addDecorator(withKnobs);

stories.add('slow', () => (
  <span style={{ color: color('Colour', theme.primaryColor) }}>
    <IconDots size={number('Size', 100)} speed="3" />
  </span>
));

stories.add('moderate', () => (
  <span style={{ color: color('Colour', theme.primaryColor) }}>
    <IconDots size={number('Size', 100)} speed="1.5" />
  </span>
));

stories.add('fast', () => (
  <>
    <span style={{ color: color('Colour', theme.primaryColor) }}>
      <IconDots size={number('Size', 100)} speed="0.5" />
    </span>
  </>
));
