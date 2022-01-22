import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Invisible } from '.';

describe('Invisible', () => {
  it('renders a component', () => {
    const { queryByTestId } = render(
      <Invisible visible>
        <h1>Hello World</h1>
      </Invisible>
    );

    expect(queryByTestId('invisible-wrapper')).not.toBeInTheDocument();
  });

  it('renders an invisible component', () => {
    const { queryByTestId } = render(
      <Invisible visible={false}>
        <h1>Hello World</h1>
      </Invisible>
    );

    expect(queryByTestId('invisible-wrapper')).toBeInTheDocument();
  });
});
