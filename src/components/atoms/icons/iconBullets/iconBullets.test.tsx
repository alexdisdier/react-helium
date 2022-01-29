import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconBullets } from '.';

describe('IconBullets', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 32,
    };
  });

  it('renders a IconBullets', () => {
    const { container } = render(<IconBullets {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="root"
        fill-rule="evenodd"
        style="width: 32px; height: 32px;"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.784 14.113a1.779 1.779 0 100 3.556 1.779 1.779 0 100-3.556zm0-7.113a1.779 1.779 0 100 3.556 1.779 1.779 0 100-3.556zm0 14.226c-.987 0-1.784.806-1.784 1.778s.809 1.778 1.784 1.778 1.784-.806 1.784-1.778-.797-1.778-1.784-1.778zm3.567 2.964H27v-2.371H10.351v2.37zm0-7.113H27v-2.371H10.351v2.37zm0-9.484v2.37H27v-2.37H10.351z"
        />
      </svg>
    `);
  });
});
