import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Tooltip from '.';

import README from './README.md';

const appearanceOptions = {
  Top: 'default',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left'
};

const stories = storiesOf('Atoms/Tooltip', module);

stories.addDecorator(withKnobs);

stories.addParameters({
  readme: {
    content: README
  }
});

interface Props {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

export const ControlledTooltip: React.FC<Props> = ({ ...otherProps }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <Tooltip {...otherProps} placeholder="First tooltip">
        Hover 1st tooltip
      </Tooltip>

      <Tooltip {...otherProps} placeholder="Second tooltipSecond">
        Hover 2nd tooltip
      </Tooltip>
    </div>
  );
};

stories.add('default', () => {
  const appearanceValue = options('Appearance', appearanceOptions, 'default', {
    display: 'inline-radio'
  });

  return (
    <ControlledTooltip
      top={appearanceValue === appearanceOptions.Top}
      right={appearanceValue === appearanceOptions.Right}
      bottom={appearanceValue === appearanceOptions.Bottom}
      left={appearanceValue === appearanceOptions.Left}
      placeholder={text('Placeholder', 'test')}
    />
  );
});
