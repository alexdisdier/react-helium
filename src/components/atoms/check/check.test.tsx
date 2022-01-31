import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Check } from '.';

jest.mock('../invisible', () => 'mock-invisible');

jest.useFakeTimers();

describe('Check', () => {
  let props;

  beforeEach(() => {
    props = {
      label: 'Label',
      checked: false,
      handleFocus: jest.fn(),
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      inputRef: jest.fn(),
      invert: false,
      disabled: false,
      isDark: false,
      largeLabel: false,
      bold: false,
      darkLabel: false,
      indeterminate: false,
    };
  });

  it('renders the component', () => {
    const { getByTestId } = render(<Check {...props} />);

    expect(getByTestId('label')).toBeInTheDocument();
  });

  it('should call handleChange', () => {
    const { getByTestId } = render(<Check {...props} />);

    const input = getByTestId('input');

    fireEvent.click(input);

    expect(input).not.toBeChecked();
    expect(props.handleChange).toHaveBeenCalledTimes(1);
  });

  it('should not call handleChange when checkbox is disabled', () => {
    props.disabled = true;
    const { getByTestId } = render(<Check {...props} />);

    const input = getByTestId('input');

    fireEvent.click(input);

    expect(props.handleChange).not.toHaveBeenCalled();
  });

  it('should call handleFocus', () => {
    const { getByTestId } = render(<Check {...props} />);

    const input = getByTestId('input');
    input.focus();

    expect(props.handleFocus).toHaveBeenCalledTimes(1);
  });

  it('should call handleBlur', async () => {
    const { getByTestId } = render(<Check {...props} />);

    const input = getByTestId('input');

    fireEvent.blur(input);

    jest.advanceTimersByTime(50);

    expect(props.handleBlur).toHaveBeenCalledTimes(1);
  });
});
