import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import { IconLoader } from '..';

import { theme } from '../../../../style';

const stories = storiesOf('Atoms/Icons/Animation/Loader', module);

stories.addDecorator(withKnobs);

stories.add('Loader slow', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconLoader size={number('Size', 100)} speed="2" />
  </span>
));

stories.add('Loader medium', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconLoader size={number('Size', 100)} speed="1" />
  </span>
));

stories.add('Loader fast', () => (
  <>
    <span style={{ color: color('Colour', theme.colorBrand) }}>
      <IconLoader size={number('Size', 100)} speed="0.5" />
    </span>
  </>
));
