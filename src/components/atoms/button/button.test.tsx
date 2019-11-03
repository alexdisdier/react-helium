import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { Button } from '.';

import styles from './button.style';

const classes = classesFromStyles(styles);

describe('Button', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      children: <div>I am The button</div>,
      onClick: jest.fn(),
      primary: false,
      secondary: false,
      warning: false,
      disabled: false
    };
  });

  it('renders a button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="class-from-style-root"
        data-is-primary={false}
        data-is-secondary={false}
        data-is-warning={false}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
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
        className="class-from-style-root"
        data-is-primary={true}
        data-is-secondary={true}
        data-is-warning={true}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
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
