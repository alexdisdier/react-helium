import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../../../../utils/tests';

import { UrlInput } from '.';

import styles from './urlInput.style';

const classes = classesFromStyles(styles);

describe('UrlInput', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      onLinkInputKeyDown: jest.fn(),
      urlInputChange: jest.fn(),
      handleCollapse: jest.fn(),
      value: 'www.alexdisdier.com',
      validUrl: true
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<UrlInput {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
        onKeyDown={[Function]}
        onMouseDown={[Function]}
      >
        <input
          className="class-from-style-input"
          data-is-notvalid={false}
          onChange={[MockFunction]}
          onKeyDown={[MockFunction]}
          placeholder="Enter link URL"
          type="text"
          value="www.alexdisdier.com"
        />
      </div>
    `);
  });

  it('tiggers onChange', () => {
    const wrapper = shallow(<UrlInput {...props} />);
    wrapper.find('input').simulate('change', 'www.alexdisdier.fr');
    expect(props.urlInputChange).toHaveBeenCalledTimes(1);
    expect(props.urlInputChange).toHaveBeenCalledWith('www.alexdisdier.fr');
  });

  it('cannot add a non a valid url', () => {
    props.validUrl = false;
    const wrapper = shallow(<UrlInput {...props} />);
    wrapper.simulate('keydown', { keyCode: 13 });
    expect(props.onLinkInputKeyDown).toHaveBeenCalledTimes(0);
  });

  it('executes handleCollapse when clicked outside of the input field', () => {
    jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: { contains: jest.fn() } });
    const wrapper = shallow(<UrlInput {...props} />);
    wrapper.find('div').simulate('mousedown', {});
    expect(props.handleCollapse).toHaveBeenCalledTimes(1);
  });

  it('executes handleCollapse on ESC keydown', () => {
    const wrapper = shallow(<UrlInput {...props} />);
    wrapper
      .find('div')
      .simulate('keydown', { keyCode: 27, preventDefault: () => {} });
    expect(props.handleCollapse).toHaveBeenCalledTimes(1);
  });
});
