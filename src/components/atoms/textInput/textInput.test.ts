import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { TextInput } from '.';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID
} from '../../../constant';

import styles from './textInput.style';

jest.useFakeTimers();

describe('TextInput', () => {
  const classes = classesFromStyles(styles);
  let props;

  beforeEach(() => {
    props = {
      classes,
      id: 'id',
      placeholder: 'placeholder',
      value: 'Hello world',
      type: 'text',
      handleFocus: jest.fn(),
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      inputRef: jest.fn(),
      status: null,
      disabled: false,
      required: false
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });

  it('renders full component with optional props', () => {
    props.id = 'input_id_001';
    props.placeholder = 'Placeholder text';
    props.className = 'additional-class-name';
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });

  it('renders disabled component', () => {
    props.disabled = true;
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });

  it('renders full component with invalid status', () => {
    props.status = STATUS_INVALID;
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });

  it('renders full component with caution status', () => {
    props.status = STATUS_CAUTION;
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });

  it('renders full component with valid status', () => {
    props.status = STATUS_VALID;
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });

  it('renders full component with suffix', () => {
    props.suffix = 'Hello world';
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot()
  });


  it('should call handleChange', () => {
    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');
    input.simulate('change');
    expect(props.handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call handleFocus', () => {
    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');
    input.simulate('focus');
    expect(props.handleFocus).toHaveBeenCalledTimes(1);
  });

  it('should call handleBlur', () => {
    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');
    input.simulate('blur');
    jest.advanceTimersByTime(50);
    expect(props.handleBlur).toHaveBeenCalledTimes(1);
  });
});
