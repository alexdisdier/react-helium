import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/editor';

import { Link } from '.';

import styles from './editorLink.style';

const classes = classesFromStyles(styles);

jest.mock('draft-js', () => ({
  Entity: {
    get: jest.fn(() => ({
      getData: jest.fn(() => ({ url: 'www.alexdisdier.com' }))
    }))
  }
}));

describe('Link', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      entityKey: '1',
      children: <span>Alex Disdier</span>
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<a
  aria-label="www.stratumn.com"
  className="class-from-style-root"
  href="www.stratumn.com"
  rel="noopener noreferrer"
  target="_blank"
>
  <span>
    stratumn
  </span>
</a>
`);
  });
});
