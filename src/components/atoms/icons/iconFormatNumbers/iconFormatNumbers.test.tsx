import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconFormatNumbers } from '.';

describe('IconFormatNumbers', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
    };
  });

  it('renders a IconFormatNumbers', () => {
    const { container } = render(<IconFormatNumbers {...props} />);
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
          d="M6 21h2v.5H7v1h1v.5H6v1h3v-4H6v1zm1-9h1V8H6v1h1v3zm-1 3h1.8L6 17.1v.9h3v-1H7.2L9 14.9V14H6v1zm5-6v2h14V9H11zm0 14h14v-2H11v2zm0-6h14v-2H11v2z"
        />
      </svg>
    `);
  });
});
