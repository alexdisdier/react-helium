import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '.';

describe('Button', () => {
  let props;

  beforeEach(() => {
    props = {
      children: <div>I am The button</div>,
      onClick: jest.fn(),
      primary: false,
      secondary: false,
      warning: false,
      round: false,
      inverted: false,
      disabled: false,
    };
  });

  it('renders a button', () => {
    const { container } = render(<Button {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="root"
        data-is-inverted="false"
        data-is-primary="false"
        data-is-round="false"
        data-is-secondary="false"
        data-is-warning="false"
        type="button"
      >
        <span
          class="text"
        >
          <div>
            I am The button
          </div>
        </span>
      </button>
    `);
  });

  it('renders primary, secondary, and warning button', () => {
    props.primary = true;
    props.secondary = true;
    props.warning = true;

    const { container } = render(<Button {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="root"
        data-is-inverted="false"
        data-is-primary="true"
        data-is-round="false"
        data-is-secondary="true"
        data-is-warning="true"
        type="button"
      >
        <span
          class="text"
        >
          <div>
            I am The button
          </div>
        </span>
      </button>
    `);
  });

  it('renders an inverted round button', () => {
    props.inverted = true;
    props.round = true;

    const { container } = render(<Button {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="root"
        data-is-inverted="true"
        data-is-primary="false"
        data-is-round="true"
        data-is-secondary="false"
        data-is-warning="false"
        type="button"
      >
        <span
          class="text"
        >
          <div>
            I am The button
          </div>
        </span>
      </button>
    `);
  });

  it('should call onClick', () => {
    const { getByText } = render(<Button {...props} />);

    fireEvent.click(getByText('I am The button'));

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    props.disabled = true;

    const { getByText } = render(<Button {...props} />);

    fireEvent.click(getByText('I am The button'));

    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
