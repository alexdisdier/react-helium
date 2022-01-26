import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconBarCenter } from '.';

describe('IconBarCenter', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
      speed: '0.5',
      repeatCount: 'indefinite',
    };
  });

  it('renders a IconBarCenter', () => {
    const { container } = render(<IconBarCenter {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="root-0-2-1"
        fill-rule="evenodd"
        style="width: 32px; height: 32px;"
        viewBox="0 0 24 30"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <rect
          height="10"
          opacity="0.2"
          width="4"
          x="0"
          y="10"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
            values="0.2; 1; .2"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
            values="10; 20; 10"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
            values="10; 5; 10"
          />
        </rect>
        <rect
          height="10"
          opacity="0.2"
          width="4"
          x="8"
          y="10"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0.15s"
            dur="0.5s"
            repeatCount="indefinite"
            values="0.2; 1; .2"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0.15s"
            dur="0.5s"
            repeatCount="indefinite"
            values="10; 20; 10"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0.15s"
            dur="0.5s"
            repeatCount="indefinite"
            values="10; 5; 10"
          />
        </rect>
        <rect
          height="10"
          opacity="0.2"
          width="4"
          x="16"
          y="10"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0.3s"
            dur="0.5s"
            repeatCount="indefinite"
            values="0.2; 1; .2"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0.3s"
            dur="0.5s"
            repeatCount="indefinite"
            values="10; 20; 10"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0.3s"
            dur="0.5s"
            repeatCount="indefinite"
            values="10; 5; 10"
          />
        </rect>
      </svg>
    `);
  });
});
