import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

import { ErrorMessage } from '.';

// import useStyles from './errorMessage.style';

// const classes = classesFromStyles(styles);

describe('ErrorMessage', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      text: "I'm an error"
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<ErrorMessage {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="content-0-2-1"
      >
        I'm an error
      </div>
    `);
  });
});
