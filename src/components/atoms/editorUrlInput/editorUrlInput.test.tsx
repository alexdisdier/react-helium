import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/editor';

import { EditorUrlInput } from '.';

import styles from './editorUrlInput.style';

const classes = classesFromStyles(styles);

describe('UrlInput', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      onLinkInputKeyDown: jest.fn(),
      urlInputChange: jest.fn(),
      handleCollapse: jest.fn(),
      value: ''
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<EditorUrlInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="class-from-style-root"
  onKeyDown={[Function]}
  onMouseDown={[Function]}
>
  <input
    className="class-from-style-input"
    onChange={[MockFunction]}
    onKeyDown={[MockFunction]}
    placeholder="Enter link URL"
    type="text"
    value=""
  />
</div>
`);
  });

  // it('tiggers onChange', () => {
  //   const wrapper = shallow(<EditorUrlInput {...props} />);
  //   wrapper.find('input').simulate('change', 'www.url.com');
  //   expect(props.urlInputChange).toHaveBeenCalledTimes(1);
  //   expect(props.urlInputChange).toHaveBeenCalledWith('www.url.com');
  // });

  // it('cannot add a none a valid url', () => {
  //   const wrapper = shallow(<EditorUrlInput {...props} />);
  //   wrapper.find('input').simulate('change', 'www.url');
  //   expect(props.urlInputChange).toHaveBeenCalledTimes(1);
  //   expect(props.urlInputChange).toHaveBeenCalledWith('www.url');
  //   expect(props.onLinkInputKeyDown).toHaveBeenCalled(0);
  // });

  // it('executes handleCollapse when clicked outside of the input field', () => {
  //   const wrapper = shallow(<EditorUrlInput {...props} />);
  //   wrapper.update();
  //   wrapper.find('div').simulate('mousedown', {});
  //   expect(props.handleCollapse).toHaveBeenCalledTimes(1);
  // });

  // it('executes handleCollapse on ESC keydown', () => {
  //   const wrapper = shallow(<EditorUrlInput {...props} />);
  //   wrapper
  //     .find('div')
  //     .simulate('keydown', { keyCode: 27, preventDefault: () => {} });
  //   expect(props.handleCollapse).toHaveBeenCalledTimes(1);
  // });
});
