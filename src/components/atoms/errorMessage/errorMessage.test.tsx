import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ErrorMessage } from '.';

describe('ErrorMessage', () => {
  let props;

  beforeEach(() => {
    props = {
      text: "I'm an error",
    };
  });

  it('renders full component', () => {
    const { container } = render(<ErrorMessage {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="content"
      >
        I'm an error
      </div>
    `);
  });
});
