import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Label } from '.';

describe('Label', () => {
  let props;

  beforeEach(() => {
    props = {
      text: 'Label text',
      forId: 'input_id_001',
      children: <div>A child</div>,
      required: false,
      hideLabel: false,
    };
  });

  it('renders component', () => {
    const { container } = render(<Label {...props}>Hello world</Label>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <label
        class="root"
        data-input-is-required="false"
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

  it('renders component with required data attribute', () => {
    props.required = true;
    const { container } = render(<Label {...props}>Hello world</Label>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <label
        class="root"
        data-input-is-required="true"
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

  it('hides the label', () => {
    props.hideLabel = true;
    const { container } = render(<Label {...props}>Hello world</Label>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <label
        class="root"
        data-input-is-required="false"
        for="input_id_001"
      >
        Hello world
      </label>
    `);
  });
});
