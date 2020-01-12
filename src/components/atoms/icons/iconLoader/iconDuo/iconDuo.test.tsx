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
      <svg
        aria-hidden="true"
        className="class-from-style-root"
        fillRule="evenodd"
        style={
          Object {
            "height": "32px",
            "width": "32px",
          }
        }
        viewBox="0 0 50 50"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <path
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            dur="0.5s"
            from="0 25 25"
            repeatCount="indefinite"
            to="360 25 25"
            type="rotate"
          />
        </path>
      </svg>
    `);
  });
});
