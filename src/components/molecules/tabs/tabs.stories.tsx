import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Tabs from '.';

import README from './README.md';

const stories = storiesOf('Molecules/Tabs', module).addDecorator(withKnobs);

stories.addParameters({
  readme: {
    content: README
  }
});

const tabs = [
  {
    label: 'Tabulation 1',
    component: (
      <div>
        <p>
          To put or arrange in a tabular, systematic, or condensed form;
          formulate tabularly.
        </p>
      </div>
    )
  },
  {
    label: 'Tabulation 2',
    component: (
      <div>
        <p>To operate the tab key on a typewriter; to tab.</p>
      </div>
    )
  },
  {
    label: 'Tabulation 3',
    component: (
      <div>
        <p>
          Shaped like a table or tablet; tabular. <br />
          Having transverse septae, as certain corals.
        </p>
      </div>
    )
  }
];

stories.add('default', () => (
  <div
    style={{
      maxWidth: 600,
      border: `1px solid grey`
    }}
  >
    <Tabs tabs={tabs} centered={boolean('Centered', false)} />
  </div>
));
