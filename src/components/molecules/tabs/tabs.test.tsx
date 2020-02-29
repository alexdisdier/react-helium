import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

import { Tabs } from '.';

// import useStyles from './tabs.style';

// const classes = classesFromStyles(styles);

jest.mock('./tab', () => 'Tab');

describe('Tabs', () => {
  let props;

  // Spy and mock useState hook
  const setActiveTab = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(activeTab => [activeTab, setActiveTab]);

  beforeEach(() => {
    props = {
      // classes,
      tabs: [
        {
          label: 'tab1',
          component: (
            <div>
              <p>
                To put or arrange in a tabular, systematic, or condensed form;
                formulate tabularly.
              </p>
            </div>
          )
        },
        {
          label: 'tab2',
          component: (
            <div>
              <p>To operate the tab key on a typewriter; to tab.</p>
            </div>
          )
        }
      ],
      centered: false
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
        <Fragment>
          <ol
            className="root-0-2-1"
          >
            <div
              className="tabsWrapper-0-2-2"
            >
              <div
                key="tab1"
              >
                <Tab
                  activeTab="tab1"
                  key="tab1"
                  label="tab1"
                  onClick={[Function]}
                />
              </div>
              <div
                key="tab2"
              >
                <Tab
                  activeTab="tab1"
                  key="tab2"
                  label="tab2"
                  onClick={[Function]}
                />
              </div>
            </div>
            <div
              className="slider-0-2-3"
              style={
                Object {
                  "left": 0,
                  "width": 0,
                }
              }
            />
          </ol>
          <div
            className="contentWrapper-0-2-4"
            data-is-centered={true}
          >
            <div>
              <p>
                To put or arrange in a tabular, systematic, or condensed form; formulate tabularly.
              </p>
            </div>
          </div>
        </Fragment>
      `);
    });
  });

  it('render the full component', () => {
    const wrapper = shallow(<Tabs {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <ol
          className="root-0-2-1"
        >
          <div
            className="tabsWrapper-0-2-2"
          >
            <div
              key="tab1"
            >
              <Tab
                activeTab="tab1"
                key="tab1"
                label="tab1"
                onClick={[Function]}
              />
            </div>
            <div
              key="tab2"
            >
              <Tab
                activeTab="tab1"
                key="tab2"
                label="tab2"
                onClick={[Function]}
              />
            </div>
          </div>
          <div
            className="slider-0-2-3"
            style={
              Object {
                "left": 0,
                "width": 0,
              }
            }
          />
        </ol>
        <div
          className="contentWrapper-0-2-4"
          data-is-centered={false}
        >
          <div>
            <p>
              To put or arrange in a tabular, systematic, or condensed form; formulate tabularly.
            </p>
          </div>
        </div>
      </Fragment>
    `);
  });
});
