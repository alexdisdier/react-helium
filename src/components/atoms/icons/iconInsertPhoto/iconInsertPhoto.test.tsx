import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../utils/tests';

import { IconInsertPhoto } from '.';

// import useStyles from './iconInsertPhoto.style';

// const classes = classesFromStyles(styles);

describe('IconInsertPhoto', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      size: 32
    };
  });

  it('renders a IconInsertPhoto', () => {
    const wrapper = shallow(<IconInsertPhoto {...props} />);
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
          d="M2.55 29.78l-.35.72h27.578l-.323-.707-8.667-19-.44-.964-.464.951L13.8 23.23l-3.865-6.778-.468-.821-.415.85-6.5 13.3z"
        />
      </svg>
    `);
  });
});
