import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { HtmlDisplay } from '.';

import styles from './htmlDisplay.style';

const classes = classesFromStyles(styles);

describe('Link', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      htmlData: {
        test: ''
      }
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<HtmlDisplay {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-readOnly"
        dangerouslySetInnerHTML={
          Object {
            "__html": "[object Object]",
          }
        }
      />
    `);
  });
});
