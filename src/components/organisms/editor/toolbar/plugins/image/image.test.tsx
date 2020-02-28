import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../../../utils/tests';

import { Image } from '.';

// import useStyles from './image.style';

// const classes = classesFromStyles(styles);

describe('Image', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      src:
        'https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg'
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<Image {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <img
        alt="https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg"
        className="root-0-2-1"
        src="https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg"
      />
    `);
  });
});
