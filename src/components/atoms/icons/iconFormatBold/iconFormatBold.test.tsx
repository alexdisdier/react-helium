import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../../utils/tests';

import { IconFormatBold } from '.';

import styles from './iconFormatBold.style';

const classes = classesFromStyles(styles);

describe('IconFormatBold', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      size: 32
    };
  });

  it('renders a IconFormatBold', () => {
    const wrapper = shallow(<IconFormatBold {...props} />);
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
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6 14.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H11v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM14 10.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H14v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
        />
      </svg>
    `);
  });
});
