import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { ErrorMessage } from '.';

import styles from './errorMessage.style';

const classes = classesFromStyles(styles);

describe('ErrorMessage', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      text: 'This is an error'
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<ErrorMessage {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-content"
      >
        This is an error
      </div>
    `);
  });
});
