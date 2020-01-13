import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../../../utils/tests';

import { IconBarTop } from '.';

import styles from './iconBarTop.style';

const classes = classesFromStyles(styles);

describe('IconBarTop', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      size: 32,
      speed: '0.5',
      repeatCount: 'indefinite'
    };
  });

  it('renders a IconBarTop', () => {
    const wrapper = shallow(<IconBarTop {...props} />);
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
        viewBox="0 0 24 24"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <rect
          height="7"
          width="4"
          x="0"
          y="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
        <rect
          height="7"
          width="4"
          x="10"
          y="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            begin="0.2s"
            dur="0.5s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
        <rect
          height="7"
          width="4"
          x="20"
          y="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            begin="0.4s"
            dur="0.5s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
      </svg>
    `);
  });
});
