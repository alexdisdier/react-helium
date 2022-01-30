import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconDots } from '.';

describe('IconDots', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
      speed: '0.5',
      repeatCount: 'indefinite',
    };
  });

  it('renders an IconDots svg', () => {
    const { container } = render(<IconDots {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="root"
        fill-rule="evenodd"
        style="width: 32px; height: 32px;"
        viewBox="0 0 128 35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="17.5"
            cy="17.5"
            fill-opacity="1"
            r="17.5"
          />
          <animate
            attributeName="opacity"
            begin="0s"
            dur="0.5s"
            keyTimes="0;0.167;0.5;0.668;1"
            repeatCount="indefinite"
            values="0.3;1;1;0.3;0.3"
          />
        </g>
        <g>
          <circle
            cx="110.5"
            cy="17.5"
            fill-opacity="1"
            r="17.5"
          />
          <animate
            attributeName="opacity"
            begin="0s"
            dur="0.5s"
            keyTimes="0;0.334;0.5;0.835;1"
            repeatCount="indefinite"
            values="0.3;0.3;1;1;0.3"
          />
        </g>
        <g>
          <circle
            cx="64"
            cy="17.5"
            fill-opacity="1"
            r="17.5"
          />
          <animate
            attributeName="opacity"
            begin="0s"
            dur="0.5s"
            keyTimes="0;0.167;0.334;0.668;0.835;1"
            repeatCount="indefinite"
            values="0.3;0.3;1;1;0.3;0.3"
          />
        </g>
      </svg>
    `);
  });
});
