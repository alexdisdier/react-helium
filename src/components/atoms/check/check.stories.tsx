import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Check from '.';

import README from './README.md';

const ControlledCheck = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked(!checked);

  return <Check handleChange={handleChange} checked={checked} {...props} />;
};

storiesOf('Atoms/Check', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .addDecorator(withKnobs)
  .add('default', () => (
    <ControlledCheck
      showLabel={boolean('Show label', true)}
      label={text('Label', 'I agree to see my data to third party')}
      disabled={boolean('Disabled', false)}
      invert={boolean('Invert', false)}
      isDark={boolean('Dark', false)}
      largeLabel={boolean('Large label', false)}
      bold={boolean('Bold', false)}
      darkLabel={boolean('Dark label', false)}
      indeterminate={boolean('Indeterminate', false)}
    />
  ));
