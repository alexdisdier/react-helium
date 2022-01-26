import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tab } from '.';

describe('Tab', () => {
  let props;

  beforeEach(() => {
    props = {
      activeTab: 'tab1',
      label: 'tab2',
      onClick: jest.fn(),
    };
  });

  describe('Actions', () => {
    it('triggers handleClick', () => {
      const { container } = render(<Tab {...props} />);

      fireEvent.click(container.querySelector('li'));

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  it('render the full component', () => {
    const { container } = render(<Tab {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <li
          class="root-0-2-1"
          data-is-active="false"
        >
          tab2
        </li>
      </div>
    `);
  });

  it('renders an active tab', () => {
    props.activeTab = 'tab2';
    const { container } = render(<Tab {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <li
          class="root-0-2-1"
          data-is-active="true"
        >
          tab2
        </li>
      </div>
    `);
  });
});
