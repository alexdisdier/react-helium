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

import LoaderReadme from './README.md';

const stories = storiesOf('Molecules/loader', module);
stories.addParameters({
  readme: {
    content: LoaderReadme
  }
});

stories.addDecorator(withKnobs);

const typeOptions = {
  spinnerFill: 'spinnerFill',
  spinner: 'spinner',
  barCenter: 'barCenter',
  barTop: 'barTop',
  dots: 'dots'
};

stories.add('Default ', () => {
  const typeValues = options('Type', typeOptions, 'spinnerFill', {
    display: 'inline-radio'
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <span style={{ color: color('Colour', theme.colorBrand) }}>
        <Loader
          spinnerFill={typeValues === typeOptions.spinnerFill}
          spinner={typeValues === typeOptions.spinner}
          barCenter={typeValues === typeOptions.barCenter}
          barTop={typeValues === typeOptions.barTop}
          dots={typeValues === typeOptions.dots}
          text={text('Text', 'slow')}
          size={number('Size', 100)}
          slow
        />
      </span>
      <span style={{ color: color('Colour', theme.colorBrand) }}>
        <Loader text="moderate" size={number('Size', 100)} moderate />
      </span>
      <span style={{ color: color('Colour', theme.colorBrand) }}>
        <Loader text="fast" size={number('Size', 100)} fast />
      </span>
    </div>
  );
});
