import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  number,
  color,
  optionsKnob as options
} from '@storybook/addon-knobs';

import Loader from '.';

import { theme } from '../../../style';

// import { bgImg } from '../../../../assets/short-paragragh.png';

const stories = storiesOf('Atoms/loader', module);

stories.addDecorator(withKnobs);

const typeOptions = {
  spinnerFill: 'spinnerFill',
  spinner: 'spinner',
  barCenter: 'barCenter',
  barTop: 'barTop'
};

stories.add('Overlay', () => {
  const typeValues = options('Type', typeOptions, 'spinnerFill', {
    display: 'inline-radio'
  });
  return (
    <span
      style={{
        color: color('Colour', theme.colorBrand),
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ opacity: 0.3 }}>
        <img
          src="https://semantic-ui.com/images/wireframe/short-paragraph.png"
          alt=""
        />
      </div>
      <Loader
        spinnerFill={typeValues === typeOptions.spinnerFill}
        spinner={typeValues === typeOptions.spinner}
        barCenter={typeValues === typeOptions.barCenter}
        barTop={typeValues === typeOptions.barTop}
        text={text('Text', 'slow')}
        size={number('Size', 100)}
        moderate
        overlay
      />
    </span>
  );
});

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
