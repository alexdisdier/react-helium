import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconSpinner } from '.';

describe('IconSpinner', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
      speed: '0.5',
      repeatCount: 'indefinite',
    };
  });

  it('renders a IconSpinner', () => {
    const { container } = render(<IconSpinner {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="root"
        fill-rule="evenodd"
        style="width: 32px; height: 32px;"
        viewBox="0 0 50 50"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <path
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animatetransform
            attributeName="transform"
            attributeType="xml"
            dur="0.5s"
            from="0 25 25"
            repeatCount="indefinite"
            to="360 25 25"
            type="rotate"
          />
        </path>
      </svg>
    `);
  });
});
