import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from '../button';

import Snackbars, { withSnackbarsContext } from '.';

import README from './README.md';

/**
 * Content variables
 */
let snackbarSuccessLabel;
let snackbarErrorLabel;

const SuccessBtn = withSnackbarsContext(({ successSnackbar }) => (
  <Button primary onClick={() => successSnackbar(snackbarSuccessLabel)}>
    Successful click
  </Button>
));

const SuccessWithActionBtn = withSnackbarsContext(({ successSnackbar }) => (
  <Button
    inverted
    onClick={() => successSnackbar(snackbarSuccessLabel, 'undo', () => {})}
  >
    Successful click with doubts
  </Button>
));

const ErrorBtn = withSnackbarsContext(({ errorSnackbar }) => (
  <Button warning onClick={() => errorSnackbar(snackbarErrorLabel)}>
    Error click
  </Button>
));

const stories = storiesOf('Snackbars', module);
stories.addParameters({
  readme: {
    content: README
  }
});

stories.addDecorator(withKnobs);

stories.add('success', () => {
  const successWithUndo = boolean('Successbar with undo', false);
  const snackBarTop = boolean('Top placement', false);
  snackbarSuccessLabel = text('content', 'This has been a successful click!');
  return (
    <Snackbars top={snackBarTop}>
      {!successWithUndo ? <SuccessBtn /> : <SuccessWithActionBtn />}
    </Snackbars>
  );
});

stories.add('error', () => {
  const snackBarTop = boolean('Top placement', false);
  snackbarErrorLabel = text('content', 'sorry, this is not allowed');
  return (
    <Snackbars top={snackBarTop}>
      <ErrorBtn />
    </Snackbars>
  );
});
