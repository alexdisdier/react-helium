import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../../../utils/tests';

import { Link } from '.';

// import useStyles from './link.style';

// const classes = classesFromStyles(styles);

jest.mock('draft-js', () => ({
  Entity: {
    get: jest.fn(() => ({
      getData: jest.fn(() => ({ url: 'www.alexdisdier.com' })),
    })),
  },
}));

describe('Link', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      entityKey: '1',
      children: <span>Alex Disdier</span>,
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <a
        aria-label="www.alexdisdier.com"
        className="root-0-2-1"
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
