import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { EditorButton } from '.';

describe('Editor Button', () => {
  let props;

  beforeEach(() => {
    props = {
      icon: null,
      onClick: jest.fn(),
      promptForLink: jest.fn(),
      removeLink: jest.fn(),
      active: false,
      buttonType: 'BOLD',
      disabled: false,
    };
  });

  describe('Actions', () => {
    it('triggers onClick for a block or inline style Editor button', () => {
      const { container } = render(<EditorButton {...props} />);

      fireEvent.mouseDown(container.firstChild);

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('triggers promptForLink when the link button is clicked', () => {
      props.buttonType = 'LINK';
      const { container } = render(<EditorButton {...props} />);

      fireEvent.mouseDown(container.firstChild);

      expect(props.promptForLink).toHaveBeenCalledTimes(1);
    });

    it('triggers removeLink when the link active button is clicked', () => {
      props.buttonType = 'LINK';
      props.active = true;
      const { container } = render(<EditorButton {...props} />);

      fireEvent.mouseDown(container.firstChild);

      expect(props.removeLink).toHaveBeenCalledTimes(1);
    });
  });

  describe('render()', () => {
    it('renders a H1 block style button', () => {
      props.buttonType = 'header-one';
      const { container } = render(<EditorButton {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="root"
          data-is-active="false"
          type="button"
        >
          <span
            class="text"
          >
            H1
          </span>
        </button>
      `);
    });

    it('renders a bold inline style button', () => {
      const { container } = render(<EditorButton {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="root"
          data-is-active="false"
          type="button"
        >
          <span
            class="text"
          >
            B
          </span>
        </button>
      `);
    });

    it('renders a link button', () => {
      props.buttonType = 'LINK';
      const { container } = render(<EditorButton {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="root"
          data-is-active="false"
          type="button"
        >
          <span
            class="text"
          >
            L
          </span>
        </button>
      `);
    });

    it('renders a H1 block style button', () => {
      props.buttonType = 'unordered-list';
      const { container } = render(<EditorButton {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="root"
          data-is-active="false"
          type="button"
        >
          <span
            class="text"
          >
            U
          </span>
        </button>
      `);
    });

    it('renders a disabled button', () => {
      props.disabled = true;
      const { container } = render(<EditorButton {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="root"
          data-is-active="false"
          disabled=""
          type="button"
        >
          <span
            class="text"
          >
            B
          </span>
        </button>
      `);
    });

    it('renders an active button', () => {
      props.active = true;
      const { container } = render(<EditorButton {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="root"
          data-is-active="true"
          type="button"
        >
          <span
            class="text"
          >
            B
          </span>
        </button>
      `);
    });
  });
});
