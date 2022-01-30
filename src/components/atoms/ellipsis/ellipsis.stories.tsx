import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';

import Ellipsis from '.';

const stories = storiesOf('Atoms/Ellipsis', module);
stories.addDecorator(withKnobs);

const style = { display: 'inline' };

const Title = (
  <span style={style}>
    Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex
    infinita societate generis humani, quam conciliavit ipsa natura, ita
    contracta res est et adducta in angustum ut omnis caritas aut inter duos aut
    inter paucos iungeretur.
  </span>
);

stories.add('default', () => (
  <div style={{ display: 'flex' }}>
    <Ellipsis maxWidth={text('max-width', '100px')} color={color('Color', '')}>
      {Title}
    </Ellipsis>
  </div>
));
