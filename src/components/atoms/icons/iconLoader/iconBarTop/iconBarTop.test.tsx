import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconBarTop } from '.';

describe('IconBarTop', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
      speed: '0.5',
      repeatCount: 'indefinite',
    };
  });

  it('renders a IconBarTop', () => {
    const { container } = render(<IconBarTop {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="root-0-2-1"
        fill-rule="evenodd"
        style="width: 32px; height: 32px;"
        viewBox="0 0 24 24"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <rect
          height="7"
          width="4"
          x="0"
          y="0"
        >
          <animatetransform
            attributeName="transform"
            attributeType="xml"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
        <rect
          height="7"
          width="4"
          x="10"
          y="0"
        >
          <animatetransform
            attributeName="transform"
            attributeType="xml"
            begin="0.2s"
            dur="0.5s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
        <rect
          height="7"
          width="4"
          x="20"
          y="0"
        >
          <animatetransform
            attributeName="transform"
            attributeType="xml"
            begin="0.4s"
            dur="0.5s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
      </svg>
    `);
  });
});
