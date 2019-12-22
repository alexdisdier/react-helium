import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import { IconBullets, IconInsertPhoto, IconInsertLink } from '.';

import { theme } from '../../../style';

const stories = storiesOf('Atoms/Icons', module);

stories.addDecorator(withKnobs);

stories.add('Bullet points', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconBullets size={number('Size', 100)} />
  </span>
));

stories.add('Insert Link', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconInsertLink size={number('Size', 100)} />
  </span>
));

stories.add('Insert Photo', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconInsertPhoto size={number('Size', 100)} />
  </span>
));
