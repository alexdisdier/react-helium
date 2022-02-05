import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SmartLabel } from '.';

import { STATUS_VALID } from '../../../constant/status';

describe('SmartLabel', () => {
  let props;

  beforeEach(() => {
    props = {
      text: 'Label text',
      forId: 'input_id_001',
      inputHasFocus: false,
      inputHasValue: false,
      required: false,
      status: STATUS_VALID,
      maxWidth: false,
      hideLabel: false,
    };
  });

  it('renders the full component', () => {
    const { container, queryByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(queryByTestId('invisible-wrapper')).not.toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <label
        class="root"
        data-input-has-focus="false"
        data-input-has-value="false"
        data-input-is-caution="false"
        data-input-is-invalid="false"
        data-input-is-modified="false"
        data-input-is-required="false"
        data-input-is-valid="true"
        data-is-max-width="false"
        for="input_id_001"
      >
        <div
          class="label"
        >
          <span>
            Label text
          </span>
        </div>
        Hello world
      </label>
    `);
  });

  it('does not render the label text', () => {
    props.hideLabel = true;
    const { queryByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(queryByTestId('invisible-wrapper')).toBeInTheDocument();
  });
});
