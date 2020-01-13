import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../../../utils/tests';

import { IconDuo } from '.';

import styles from './iconDuo.style';

const classes = classesFromStyles(styles);

describe('IconDuo', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      size: 32,
      speed: '0.5',
      repeatCount: 'indefinite'
    };
  });

  it('renders a IconDuo', () => {
    const wrapper = shallow(<IconDuo {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
      >
        <div
          className="class-from-style-duo"
          data-is-duo1={true}
        >
          <div
            className="class-from-style-dot"
            data-is-dota={true}
          />
          <div
            className="class-from-style-dot"
            data-is-dotb={true}
          />
        </div>
        <div
          className="class-from-style-duo"
          data-is-duo2={true}
        >
          <div
            className="class-from-style-dot"
            data-is-dota={true}
          />
          <div
            className="class-from-style-dot"
            data-is-dotb={true}
          />
        </div>
      </div>
    `);
  });
});
