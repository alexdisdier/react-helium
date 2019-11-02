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
      label: 'B',
      onClick: jest.fn(),
      active: false,
      style: 'BOLD',
      disabled: false,
      type: 'button'
    };
  });

  it('renders an EditorButton', () => {
    const wrapper = shallow(<EditorButton {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="class-from-style-root"
        data-is-active={false}
        disabled={false}
        onMouseDown={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
        >
          B
        </span>
      </button>
    `);
  });

  it('renders active EditorButton', () => {
    props.active = true;
    const wrapper = shallow(<EditorButton {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="class-from-style-root"
        data-is-active={true}
        disabled={false}
        onMouseDown={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
        >
          B
        </span>
      </button>
    `);
  });

  it('should call onClick', () => {
    const wrapper = shallow(<EditorButton {...props} />);
    wrapper.simulate('mouseDown', {
      preventDefault: () => {}
    });

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<EditorButton {...props} />);
    wrapper.simulate('mouseDown', {
      preventDefault: () => {}
    });
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
