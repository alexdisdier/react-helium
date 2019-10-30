import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { EditorButton } from '.';

import styles from './editorButton.style';

const classes = classesFromStyles(styles);

describe('EditorButton', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      children: <div>I am THE EditorButton</div>,
      onClick: jest.fn(),
      selected: false,
      disabled: false
    };
  });

  it('renders an EditorButton', () => {
    const wrapper = shallow(<EditorButton {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="class-from-style-root"
        data-is-selected={false}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
        >
          <div>
            I am THE EditorButton
          </div>
        </span>
      </button>
    `);
  });

  it('renders selected EditorButton', () => {
    props.selected = true;
    const wrapper = shallow(<EditorButton {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="class-from-style-root"
        data-is-selected={true}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
        >
          <div>
            I am THE EditorButton
          </div>
        </span>
      </button>
    `);
  });

  it('should call onClick', () => {
    const wrapper = shallow(<EditorButton {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<EditorButton {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
