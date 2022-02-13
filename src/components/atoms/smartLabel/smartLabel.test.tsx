import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SmartLabel } from '.';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
  STATUS_MODIFIED,
} from '../../../constant/status';

describe('SmartLabel', () => {
  let props;

  beforeEach(() => {
    props = {
      text: 'Label text',
      forId: 'input_id_001',
      inputHasFocus: false,
      inputHasValue: false,
      required: false,
      status: null,
      maxWidth: false,
      hideLabel: false,
    };
  });

  it('renders the component', () => {
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(getByTestId('smartlabel')).toMatchInlineSnapshot(`
      <label
        class="root"
        data-input-has-focus="false"
        data-input-has-value="false"
        data-input-is-caution="false"
        data-input-is-invalid="false"
        data-input-is-modified="false"
        data-input-is-required="false"
        data-input-is-valid="false"
        data-is-max-width="false"
        data-testid="smartlabel"
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

  it('renders a label in focus', () => {
    props.inputHasFocus = true;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(getByTestId('smartlabel').getAttribute('data-input-has-focus')).toBe(
      'true'
    );
  });

  it('renders a label with a value', () => {
    props.inputHasValue = true;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(getByTestId('smartlabel').getAttribute('data-input-has-value')).toBe(
      'true'
    );
  });

  it('renders a required label', () => {
    props.required = true;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(
      getByTestId('smartlabel').getAttribute('data-input-is-required')
    ).toBe('true');
  });

  it('renders an valid status', () => {
    props.status = STATUS_VALID;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(getByTestId('smartlabel').getAttribute('data-input-is-valid')).toBe(
      'true'
    );
  });

  it('renders an invalid status', () => {
    props.status = STATUS_INVALID;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(
      getByTestId('smartlabel').getAttribute('data-input-is-invalid')
    ).toBe('true');
  });

  it('renders an caution status', () => {
    props.status = STATUS_CAUTION;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(
      getByTestId('smartlabel').getAttribute('data-input-is-caution')
    ).toBe('true');
  });

  it('renders a modified status', () => {
    props.status = STATUS_MODIFIED;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(
      getByTestId('smartlabel').getAttribute('data-input-is-modified')
    ).toBe('true');
  });

  it('renders with maxWidth', () => {
    props.maxWidth = true;
    const { getByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(getByTestId('smartlabel').getAttribute('data-is-max-width')).toBe(
      'true'
    );
  });

  it('does not render the label text', () => {
    props.hideLabel = true;
    const { queryByTestId } = render(
      <SmartLabel {...props}>Hello world</SmartLabel>
    );

    expect(queryByTestId('invisible-wrapper')).toBeInTheDocument();
  });
});
