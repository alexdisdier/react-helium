import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { Loader } from '.';

import styles from './loader.style';

const classes = classesFromStyles(styles);

jest.mock('../../atoms/icons', () => ({
  IconBarCenter: 'IconBarCenter',
  IconBarTop: 'IconBarTop',
  IconDots: 'IconDots',
  IconSpinner: 'IconSpinner',
  IconSpinnerFIll: 'IconSpinnerFIll'
}));

describe('Loader', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      text: '',
      size: 32,
      slow: false,
      moderate: false,
      fast: false,
      repeatCount: 'indefinite',
      overlay: false,
      spinnerFill: true,
      spinner: false,
      barCenter: false,
      barTop: false,
      dots: false
    };
  });

  it('renders a default Loader with text', () => {
    props.text = 'loading';
    const wrapper = shallow(<Loader {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
        data-is-overlay={false}
      >
        <Component
          repeatCount="indefinite"
          size={32}
          speed="1.5"
          text="loading"
        />
        <span
          className="class-from-style-text"
        >
          loading
        </span>
      </div>
    `);
  });

  it('renders a fast Loader with a spinner icon', () => {
    props.spinnerFill = false;
    props.spinner = true;
    props.fast = true;

    const wrapper = shallow(<Loader {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
        data-is-overlay={false}
      >
        <IconSpinner
          repeatCount="indefinite"
          size={32}
          speed="0.5"
          text=""
        />
        <span
          className="class-from-style-text"
        />
      </div>
    `);
  });

  it('renders a slow Loader with bars in the center', () => {
    props.spinnerFill = false;
    props.barCenter = true;
    props.slow = true;

    const wrapper = shallow(<Loader {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
        data-is-overlay={false}
      >
        <IconBarCenter
          repeatCount="indefinite"
          size={32}
          speed="3"
          text=""
        />
        <span
          className="class-from-style-text"
        />
      </div>
    `);
  });

  it('renders a Loader with bars at the top', () => {
    props.spinnerFill = false;
    props.barTop = true;
    const wrapper = shallow(<Loader {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
        data-is-overlay={false}
      >
        <IconBarTop
          repeatCount="indefinite"
          size={32}
          speed="1.5"
          text=""
        />
        <span
          className="class-from-style-text"
        />
      </div>
    `);
  });
});
