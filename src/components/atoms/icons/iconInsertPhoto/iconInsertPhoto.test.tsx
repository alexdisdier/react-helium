import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconInsertPhoto } from '.';

describe('IconInsertPhoto', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
    };
  });

  it('renders a IconInsertPhoto', () => {
    const { container } = render(<IconInsertPhoto {...props} />);
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
          d="M2.55 29.78l-.35.72h27.578l-.323-.707-8.667-19-.44-.964-.464.951L13.8 23.23l-3.865-6.778-.468-.821-.415.85-6.5 13.3z"
        />
      </svg>
    `);
  });
});
