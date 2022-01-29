import React from 'react';
import { render } from '@testing-library/react';

import { Image } from '.';

describe('Image', () => {
  let props;

  beforeEach(() => {
    props = {
      src: 'https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg',
    };
  });

  it('renders full component', () => {
    const { container } = render(<Image {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt="https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg"
        class="root"
        src="https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg"
      />
    `);
  });
});
