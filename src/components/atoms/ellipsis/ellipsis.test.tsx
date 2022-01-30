import React from 'react';
import { render } from '@testing-library/react';

import { Ellipsis } from '.';

describe('Ellipsis', () => {
  let props;

  beforeEach(() => {
    props = {
      children: <div>child</div>,
      maxWidth: '120px',
      color: 'red',
    };
  });

  it('renders full component', () => {
    const { container } = render(<Ellipsis {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
      >
        <div>
          child
        </div>
      </div>
    `);
  });
});
