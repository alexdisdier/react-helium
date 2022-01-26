import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import IconBarTop from '.';

import { theme } from '../../../../../style';

// more svg loading icons: https://codepen.io/alexdisdier/pen/XOBVdR

const stories = storiesOf('Atoms/Icons/Animation/Loader/BarTop', module);

stories.addDecorator(withKnobs);

stories.add('slow', () => (
  <span style={{ color: color('Colour', theme.primaryColor) }}>
    <IconBarTop size={number('Size', 100)} speed="3" />
  </span>
));

stories.add('moderate', () => (
  <span style={{ color: color('Colour', theme.primaryColor) }}>
    <IconBarTop size={number('Size', 100)} speed="1.5" />
  </span>
));

stories.add('fast', () => (
  <span style={{ color: color('Colour', theme.primaryColor) }}>
    <IconBarTop size={number('Size', 100)} speed="0.5" />
  </span>
));
