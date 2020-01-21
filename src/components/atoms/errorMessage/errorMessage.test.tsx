import React from 'react';
import { render } from '@testing-library/react';

import { ErrorMessage } from '.';

import styles from './errorMessage.style';
import { classesFromStyles } from '../../../utils/tests';

const classes = classesFromStyles(styles);

describe('ErrorMessage', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      text: "I'm an error"
    };
  });

  it('renders full component', () => {
    const { container } = render(<ErrorMessage {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="class-from-style-content"
      >
        I'm an error
      </div>
    `);
  });
});
