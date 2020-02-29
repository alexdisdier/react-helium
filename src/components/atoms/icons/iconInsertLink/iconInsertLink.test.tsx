import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../utils/tests';

import { IconInsertLink } from '.';

// import useStyles from './iconInsertLink.style';

// const classes = classesFromStyles(styles);

describe('IconInsertLink', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      size: 32
    };
  });

  it('renders a IconInsertLink', () => {
    const wrapper = shallow(<IconInsertLink {...props} />);
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
          d="M7.09 16.0417C7.09 14.3174 8.619 12.9158 10.5 12.9158H14.9V11H10.5C7.464 11 5 13.2587 5 16.0417C5 18.8247 7.464 21.0833 10.5 21.0833H14.9V19.1675H10.5C8.619 19.1675 7.09 17.7659 7.09 16.0417ZM11.6 17.05H20.4V15.0333H11.6V17.05ZM21.5 11H17.1V12.9158H21.5C23.381 12.9158 24.91 14.3174 24.91 16.0417C24.91 17.7659 23.381 19.1675 21.5 19.1675H17.1V21.0833H21.5C24.536 21.0833 27 18.8247 27 16.0417C27 13.2587 24.536 11 21.5 11Z"
        />
      </svg>
    `);
  });
});
