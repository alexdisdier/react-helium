import React from 'react';
import { render } from '@testing-library/react';

import { Link } from '.';

jest.mock('draft-js', () => ({
  Entity: {
    get: () => ({
      getData: jest.fn(() => ({ url: 'www.alexdisdier.com' })),
    }),
  },
}));

describe('Link', () => {
  let props;

  beforeEach(() => {
    props = {
      entityKey: '1',
      children: <span>Alex Disdier</span>,
    };
  });

  it('renders full component', () => {
    const { container } = render(<Link {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        aria-label="www.alexdisdier.com"
        class="root"
        href="www.alexdisdier.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>
          Alex Disdier
        </span>
      </a>
    `);
  });
});
