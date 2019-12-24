import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import {
  IconBullets,
  IconFormatBold,
  IconFormatItalic,
  IconFormatNumbers,
  IconInsertPhoto,
  IconInsertLink
} from '.';

import { theme } from '../../../style';

const stories = storiesOf('Atoms/Icons/Editor', module);

stories.addDecorator(withKnobs);

stories.add('Bullet points', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconBullets size={number('Size', 100)} />
  </span>
));

stories.add('Numbers list', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconFormatNumbers size={number('Size', 100)} />
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

stories.add('Bold', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconFormatBold size={number('Size', 100)} />
  </span>
));

stories.add('Italic', () => (
  <span style={{ color: color('Colour', theme.colorBrand) }}>
    <IconFormatItalic size={number('Size', 100)} />
  </span>
));
