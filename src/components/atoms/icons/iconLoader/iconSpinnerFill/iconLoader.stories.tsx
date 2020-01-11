import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import IconSpinnerFill from '.';

import { theme } from '../../../../../style';

// more svg loading icons: https://codepen.io/alexdisdier/pen/XOBVdR

const stories = storiesOf('Atoms/Icons/Animation/Loader/SpinnerFill', module);

stories.addDecorator(withKnobs);

stories.add('slow', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconSpinnerFill size={number('Size', 100)} speed="3" />
  </span>
));

stories.add('moderate', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconSpinnerFill size={number('Size', 100)} speed="1.5" />
  </span>
));

stories.add('fast', () => (
  <>
    <span style={{ color: color('Colour', theme.colorBrand) }}>
      <IconSpinnerFill size={number('Size', 100)} speed="0.5" />
    </span>
  </>
));
