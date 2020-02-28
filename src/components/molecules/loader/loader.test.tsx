import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

import { Loader } from '.';

// import useStyles from './loader.style';

// const classes = classesFromStyles(styles);

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
      // classes,
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
        className="root-0-2-1"
        data-is-overlay={false}
      >
        <Component
          repeatCount="indefinite"
          size={32}
          speed="1.5"
          text="loading"
        />
        <span
          className="text-0-2-2 text-d0-0-2-3"
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
        className="root-0-2-1"
        data-is-overlay={false}
      >
        <IconSpinner
          repeatCount="indefinite"
          size={32}
          speed="0.5"
          text=""
        />
        <span
          className="text-0-2-2 text-d1-0-2-4"
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
        className="root-0-2-1"
        data-is-overlay={false}
      >
        <IconBarCenter
          repeatCount="indefinite"
          size={32}
          speed="3"
          text=""
        />
        <span
          className="text-0-2-2 text-d2-0-2-5"
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
        className="root-0-2-1"
        data-is-overlay={false}
      >
        <IconBarTop
          repeatCount="indefinite"
          size={32}
          speed="1.5"
          text=""
        />
        <span
          className="text-0-2-2 text-d3-0-2-6"
        />
      </div>
    `);
  });
});
