import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Check from '.';

import README from './README.md';

class ControlledCheck extends React.Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <Check
        handleChange={this.handleChange}
        checked={this.state.checked}
        {...this.props}
      />
    );
  }
}

storiesOf('Surface/Check', module)
  .addParameters({
    readme: {
      sidebar: README
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kWkxgBGLNKZFZ4Yavavhi5/Icons-%26-Logos-%F0%9F%8E%A8?node-id=635%3A214'
    }
  })
  .addDecorator(withKnobs)
  .add('default', () => (
    <ControlledCheck
      showLabel={boolean('Show label', true)}
      label={text('Label', 'I agree to the privacy policy')}
      disabled={boolean('Disabled', false)}
      invert={boolean('Invert', false)}
      isDark={boolean('Dark', false)}
      largeLabel={boolean('Large label', false)}
      bold={boolean('Bold', false)}
      darkLabel={boolean('Dark label', false)}
      indeterminate={boolean('Indeterminate', false)}
    />
  ));
