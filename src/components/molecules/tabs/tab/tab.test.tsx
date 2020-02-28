import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../utils/tests';

import { Tab } from '.';

// import useStyles from './tab.style';

// const classes = classesFromStyles(styles);

describe('Tab', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      activeTab: 'tab1',
      label: 'tab2',
      onClick: jest.fn()
    };
  });

  describe('Actions', () => {
    it('triggers handleClick', () => {
      const wrapper = shallow(<Tab {...props} />);

      const mockedEvent = { target: {} };

      wrapper.find('li').simulate('click', mockedEvent);

      expect(props.onClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledWith(mockedEvent, 'tab2');
    });
  });

  it('render the full component', () => {
    const wrapper = shallow(<Tab {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <li
          className="root-0-2-1"
          data-is-active={false}
          onClick={[Function]}
        >
          tab2
        </li>
      </Fragment>
    `);
  });

  it('renders an active tab', () => {
    props.activeTab = 'tab2';
    const wrapper = shallow(<Tab {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <li
          className="root-0-2-1"
          data-is-active={true}
          onClick={[Function]}
        >
          tab2
        </li>
      </Fragment>
    `);
  });
});
