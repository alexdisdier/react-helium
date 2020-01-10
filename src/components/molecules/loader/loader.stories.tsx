import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, color } from '@storybook/addon-knobs';

import Loader from '.';

import { theme } from '../../../style';

// import { bgImg } from '../../../../assets/short-paragragh.png';

const stories = storiesOf('Atoms/loader', module);

stories.addDecorator(withKnobs);

stories.add('Overlay', () => (
  <span
    style={{
      color: color('Colour', theme.colorBrand),
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <div style={{ opacity: 0.5 }}>
      <img
        src="https://semantic-ui.com/images/wireframe/short-paragraph.png"
        alt=""
      />
      <img
        src="https://semantic-ui.com/images/wireframe/short-paragraph.png"
        alt=""
      />
    </div>
    <Loader
      text={text('Text', 'slow')}
      size={number('Size', 100)}
      slow
      overlay
    />
  </span>
));

stories.add('Inline ', () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <span style={{ color: color('Colour', theme.colorBrand) }}>
      <Loader text={text('Text', 'slow')} size={number('Size', 100)} slow />
    </span>
    <span style={{ color: color('Colour', theme.colorBrand) }}>
      <Loader text="moderate" size={number('Size', 100)} moderate />
    </span>
    <span style={{ color: color('Colour', theme.colorBrand) }}>
      <Loader text="fast" size={number('Size', 100)} fast />
    </span>
  </div>
));
