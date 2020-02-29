import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../utils/tests';

import { IconFormatNumbers } from '.';

// import useStyles from './iconFormatNumbers.style';

// const classes = classesFromStyles(styles);

describe('IconFormatNumbers', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      size: 32
    };
  });

  it('renders a IconFormatNumbers', () => {
    const wrapper = shallow(<IconFormatNumbers {...props} />);
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
          d="M6 21h2v.5H7v1h1v.5H6v1h3v-4H6v1zm1-9h1V8H6v1h1v3zm-1 3h1.8L6 17.1v.9h3v-1H7.2L9 14.9V14H6v1zm5-6v2h14V9H11zm0 14h14v-2H11v2zm0-6h14v-2H11v2z"
        />
      </svg>
    `);
  });
});
