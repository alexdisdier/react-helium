import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

import { Button } from '.';

// import useStyles from './button.style';

// const classes = useStyles();

describe('Button', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      children: <div>I am The button</div>,
      onClick: jest.fn(),
      primary: false,
      secondary: false,
      warning: false,
      round: false,
      inverted: false,
      disabled: false
    };
  });

  it('renders a button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="root-0-2-1 root-d0-0-2-4"
        data-is-inverted={false}
        data-is-primary={false}
        data-is-round={false}
        data-is-secondary={false}
        data-is-warning={false}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="text-0-2-3"
        >
          <div>
            I am The button
          </div>
        </span>
      </button>
    `);
  });

  it('renders primary, secondary, and warning button', () => {
    props.primary = true;
    props.secondary = true;
    props.warning = true;
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="root-0-2-1 root-d1-0-2-5"
        data-is-inverted={false}
        data-is-primary={true}
        data-is-round={false}
        data-is-secondary={true}
        data-is-warning={true}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="text-0-2-3"
        >
          <div>
            I am The button
          </div>
        </span>
      </button>
    `);
  });

  it('renders an inverted round button', () => {
    props.inverted = true;
    props.round = true;
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="root-0-2-1 root-d2-0-2-6"
        data-is-inverted={true}
        data-is-primary={false}
        data-is-round={true}
        data-is-secondary={false}
        data-is-warning={false}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="text-0-2-3"
        >
          <div>
            I am The button
          </div>
        </span>
      </button>
    `);
  });

  it('should call onClick', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
