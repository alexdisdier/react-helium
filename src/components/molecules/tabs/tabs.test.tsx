import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { Tabs } from '.';

import styles from './tabs.style';

const classes = classesFromStyles(styles);

jest.mock('./tab', () => 'Tab');

describe('Tabs', () => {
  let props;

  // Spy and mock useState hook
  const setActiveTab = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(activeTab => [activeTab, setActiveTab]);

  beforeEach(() => {
    props = {
      classes,
      children: [
        {
          props: {
            label: 'tab1',
            children: <div label="tab1">Tab 1 content</div>
          }
        },
        {
          props: {
            label: 'tab2',
            children: <div label="tab2">Tab 2 content</div>
          }
        }
      ],
      centered: false,
      hasModal: false
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Actions', () => {
    it('switches tab', () => {
      setActiveTab('tab2');

      expect(setActiveTab).toHaveBeenCalled();
      expect(setActiveTab).toHaveBeenCalledWith('tab2');
    });

    it('centers the tabulation content', () => {
      props.centered = true;
      const wrapper = shallow(<Tabs {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<div>
  <ol
    className="class-from-style-root"
    data-has-modal={false}
  >
    <Tab
      activeTab="tab1"
      key="tab1"
      label="tab1"
      onClick={[Function]}
    />
    <Tab
      activeTab="tab1"
      key="tab2"
      label="tab2"
      onClick={[Function]}
    />
  </ol>
  <div
    className="class-from-style-contentWrapper"
    data-is-centered={true}
  >
    <div
      label="tab1"
    >
      Tab 1 content
    </div>
  </div>
</div>
`);
    });
  });

  it('render the full component', () => {
    const wrapper = shallow(<Tabs {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
<div>
  <ol
    className="class-from-style-root"
    data-has-modal={false}
  >
    <Tab
      activeTab="tab1"
      key="tab1"
      label="tab1"
      onClick={[Function]}
    />
    <Tab
      activeTab="tab1"
      key="tab2"
      label="tab2"
      onClick={[Function]}
    />
  </ol>
  <div
    className="class-from-style-contentWrapper"
    data-is-centered={false}
  >
    <div
      label="tab1"
    >
      Tab 1 content
    </div>
  </div>
</div>
`);
  });
});
