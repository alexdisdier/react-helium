import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../utils/tests';

import { IconFormatItalic } from '.';

// import useStyles from './iconFormatItalic.style';

// const classes = classesFromStyles(styles);

describe('IconFormatItalic', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      size: 32
    };
  });

  it('renders a IconFormatItalic', () => {
    const wrapper = shallow(<IconFormatItalic {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        className="root-0-2-1"
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
          d="M14 9v3h2.21l-3.42 8H10v3h8v-3h-2.21l3.42-8H22V9h-8z"
        />
      </svg>
    `);
  });
});
