import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from '../button';

import Snackbars, { withSnackbarsContext } from '.';

import README from './README.md';

/**
 * Props variables
 */
let snackbarSuccessLabel;
let snackbarErrorLabel;
let snackbarBackgroundColor;
let snackbarColor;
let snackbarTop;
let snackbarBottomLeft;

const SuccessBtn = withSnackbarsContext(({ successSnackbar }) => (
  <Button
    primary
    onClick={() =>
      successSnackbar(snackbarSuccessLabel, null, null, {
        backgroundColor: snackbarBackgroundColor,
        color: snackbarColor,
        top: snackbarTop,
        bottomLeft: snackbarBottomLeft,
      })
    }
  >
    Successful click
  </Button>
));

const SuccessWithActionBtn = withSnackbarsContext(({ successSnackbar }) => (
  <Button
    inverted
    onClick={() =>
      successSnackbar(snackbarSuccessLabel, 'undo', () => {}, {
        backgroundColor: snackbarBackgroundColor,
        color: snackbarColor,
        top: snackbarTop,
        bottomLeft: snackbarBottomLeft,
      })
    }
  >
    Successful click with doubts
  </Button>
));

const ErrorBtn = withSnackbarsContext(({ errorSnackbar }) => (
  <Button
    warning
    onClick={() =>
      errorSnackbar(snackbarErrorLabel, {
        backgroundColor: snackbarBackgroundColor,
        color: snackbarColor,
        top: snackbarTop,
        bottomLeft: snackbarBottomLeft,
      })
    }
  >
    Error click
  </Button>
));

const stories = storiesOf('Atoms/Snackbars', module);
stories.addParameters({
  readme: {
    content: README,
  },
});

stories.addDecorator(withKnobs);

stories.add('success', () => {
  const successWithUndo = boolean('Successbar with undo', false);
  snackbarTop = boolean('Top placement', false);
  snackbarBottomLeft = boolean('Bottom Left placement', false);
  snackbarSuccessLabel = text('content', 'successful click!');
  snackbarBackgroundColor = text('Background Color', '');
  snackbarColor = text('Content Color', '');
  return (
    <Snackbars>
      {!successWithUndo ? <SuccessBtn /> : <SuccessWithActionBtn />}
    </Snackbars>
  );
});

stories.add('error', () => {
  snackbarTop = boolean('Top placement', false);
  snackbarBottomLeft = boolean('Bottom Left placement', false);
  snackbarErrorLabel = text('content', 'sorry, this is not allowed');
  snackbarBackgroundColor = text('Background Color', '');
  snackbarColor = text('Content Color', '');
  return (
    <Snackbars>
      <ErrorBtn />
    </Snackbars>
  );
});
