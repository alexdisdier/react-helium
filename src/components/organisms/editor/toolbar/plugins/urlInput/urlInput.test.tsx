import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { UrlInput } from '.';

describe('UrlInput', () => {
  let props;

  beforeEach(() => {
    props = {
      onLinkInputKeyDown: jest.fn(),
      urlInputChange: jest.fn(),
      handleCollapse: jest.fn(),
      value: 'www.alexdisdier.com',
      validUrl: true,
    };
  });

  it('renders full component', () => {
    const { container } = render(<UrlInput {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
      >
        <input
          class="input"
          data-is-notvalid="false"
          placeholder="Enter link URL"
          type="text"
          value="www.alexdisdier.com"
        />
      </div>
    `);
  });

  it('tiggers onChange', () => {
    const { container } = render(<UrlInput {...props} />);

    fireEvent.change(container.querySelector('input'), {
      target: { value: 'www.alexdisdier.fr' },
    });

    expect(props.urlInputChange).toHaveBeenCalledTimes(1);
  });

  it('cannot add a non a valid url', () => {
    props.validUrl = false;
    const { container } = render(<UrlInput {...props} />);

    fireEvent.keyDown(container.firstChild, { keyCode: 13 });

    expect(props.onLinkInputKeyDown).not.toHaveBeenCalled();
  });

  // it('executes handleCollapse when clicked outside of the input field', () => {
  //   jest
  //     .spyOn(React, 'useRef')
  //     .mockReturnValueOnce({ current: { contains: jest.fn() } });

  //   const { container } = render(<UrlInput {...props} />);

  //   fireEvent.mouseDown(container.firstChild, {});

  //   expect(props.handleCollapse).toHaveBeenCalledTimes(1);
  // });

  it('executes handleCollapse on ESC keydown', () => {
    const { container } = render(<UrlInput {...props} />);

    fireEvent.keyDown(container.firstChild, {
      keyCode: 27,
      preventDefault: () => {},
    });

    expect(props.handleCollapse).toHaveBeenCalledTimes(1);
  });
});
