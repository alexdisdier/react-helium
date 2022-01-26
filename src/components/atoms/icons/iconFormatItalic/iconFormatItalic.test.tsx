import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconFormatItalic } from '.';

describe('IconFormatItalic', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
    };
  });

  it('renders a IconFormatItalic', () => {
    const { container } = render(<IconFormatItalic {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="root-0-2-1"
        fill-rule="evenodd"
        style="width: 32px; height: 32px;"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 9v3h2.21l-3.42 8H10v3h8v-3h-2.21l3.42-8H22V9h-8z"
        />
      </svg>
    `);
  });
});
