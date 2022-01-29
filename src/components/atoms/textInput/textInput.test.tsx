import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { TextInput } from '.';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
} from '../../../constant';

jest.useFakeTimers();

describe('TextInput', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 'id',
      placeholder: 'placeholder',
      value: 'Hello world',
      type: 'text',
      handleFocus: jest.fn(),
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      inputRef: jest.fn(),
      errorMessage: 'This is a required field',
      status: null,
      disabled: false,
      required: false,
    };
  });

  it('renders full component', () => {
    const { container } = render(<TextInput {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-has-focus="false"
        data-has-value="true"
        data-is-caution="false"
        data-is-disabled="false"
        data-is-invalid="false"
        data-is-required="false"
        data-is-valid="false"
      >
        <input
          class="input"
          id="id"
          placeholder="placeholder"
          type="text"
          value="Hello world"
        />
      </div>
    `);
  });

  it('renders full component with optional props', () => {
    props.id = 'input_id_001';
    props.placeholder = 'Placeholder text';
    props.className = 'additional-class-name';

    const { container } = render(<TextInput {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-has-focus="false"
        data-has-value="true"
        data-is-caution="false"
        data-is-disabled="false"
        data-is-invalid="false"
        data-is-required="false"
        data-is-valid="false"
      >
        <input
          class="input"
          id="input_id_001"
          placeholder="Placeholder text"
          type="text"
          value="Hello world"
        />
      </div>
    `);
  });

  it('renders disabled component', () => {
    props.disabled = true;

    const { container } = render(<TextInput {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-has-focus="false"
        data-has-value="true"
        data-is-caution="false"
        data-is-disabled="true"
        data-is-invalid="false"
        data-is-required="false"
        data-is-valid="false"
      >
        <input
          class="input"
          disabled=""
          id="id"
          placeholder="placeholder"
          type="text"
          value="Hello world"
        />
      </div>
    `);
  });

  it('renders full component with invalid status', () => {
    props.status = STATUS_INVALID;

    const { container } = render(<TextInput {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-has-focus="false"
        data-has-value="true"
        data-is-caution="false"
        data-is-disabled="false"
        data-is-invalid="true"
        data-is-required="false"
        data-is-valid="false"
      >
        <input
          class="input"
          id="id"
          placeholder="placeholder"
          type="text"
          value="Hello world"
        />
      </div>
    `);
  });

  it('renders full component with caution status', () => {
    props.status = STATUS_CAUTION;

    const { container } = render(<TextInput {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-has-focus="false"
        data-has-value="true"
        data-is-caution="true"
        data-is-disabled="false"
        data-is-invalid="false"
        data-is-required="false"
        data-is-valid="false"
      >
        <input
          class="input"
          id="id"
          placeholder="placeholder"
          type="text"
          value="Hello world"
        />
      </div>
    `);
  });

  it('renders full component with valid status', () => {
    props.status = STATUS_VALID;

    const { container } = render(<TextInput {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-has-focus="false"
        data-has-value="true"
        data-is-caution="false"
        data-is-disabled="false"
        data-is-invalid="false"
        data-is-required="false"
        data-is-valid="true"
      >
        <input
          class="input"
          id="id"
          placeholder="placeholder"
          type="text"
          value="Hello world"
        />
      </div>
    `);
  });

  it('renders an error message when field is required and user leaves the input', () => {
    props.value = '';
    props.required = true;

    const { container, getByText } = render(<TextInput {...props} />);
    const input = container.querySelector('input');

    fireEvent.blur(input);

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(getByText('This is a required field')).toBeInTheDocument();
  });

  it('should call handleChange', () => {
    const { container } = render(<TextInput {...props} />);
    const input = container.querySelector('input');

    fireEvent.change(input, { target: { value: '23' } });

    expect(props.handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call handleFocus', () => {
    const { container } = render(<TextInput {...props} />);
    const input = container.querySelector('input');

    input.focus();

    expect(props.handleFocus).toHaveBeenCalledTimes(1);
  });

  it('should call handleBlur', () => {
    const { container } = render(<TextInput {...props} />);
    const input = container.querySelector('input');

    fireEvent.blur(input);

    jest.advanceTimersByTime(50);

    expect(props.handleBlur).toHaveBeenCalledTimes(1);
  });
});
