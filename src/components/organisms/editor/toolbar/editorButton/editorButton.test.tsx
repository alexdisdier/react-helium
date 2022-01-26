import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../../utils/tests';

import { EditorButton } from '.';

// import useStyles from './editorButton.style';

// const classes = classesFromStyles(styles);

describe('Editor Button', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
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
      const wrapper = shallow(<EditorButton {...props} />);
      wrapper.simulate('mouseDown', {
        preventDefault: () => {},
      });
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('triggers promptForLink when the link button is clicked', () => {
      props.buttonType = 'LINK';
      const wrapper = shallow(<EditorButton {...props} />);
      wrapper.simulate('mouseDown', {
        preventDefault: () => {},
      });
      expect(props.promptForLink).toHaveBeenCalledTimes(1);
    });

    it('triggers removeLink when the link active button is clicked', () => {
      props.buttonType = 'LINK';
      props.active = true;
      const wrapper = shallow(<EditorButton {...props} />);
      wrapper.simulate('mouseDown', {
        preventDefault: () => {},
      });
      expect(props.removeLink).toHaveBeenCalledTimes(1);
    });
  });

  describe('render()', () => {
    it('renders a H1 block style button', () => {
      props.buttonType = 'header-one';
      const wrapper = shallow(<EditorButton {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <button
          className="root-0-2-1"
          data-is-active={false}
          disabled={false}
          onMouseDown={[Function]}
          type="button"
        >
          <span
            className="text-0-2-2"
          >
            H1
          </span>
        </button>
      `);
    });

    it('renders a bold inline style button', () => {
      const wrapper = shallow(<EditorButton {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <button
          className="root-0-2-1"
          data-is-active={false}
          disabled={false}
          onMouseDown={[Function]}
          type="button"
        >
          <span
            className="text-0-2-2"
          >
            B
          </span>
        </button>
      `);
    });

    it('renders a link button', () => {
      props.buttonType = 'LINK';
      const wrapper = shallow(<EditorButton {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <button
          className="root-0-2-1"
          data-is-active={false}
          disabled={false}
          onMouseDown={[Function]}
          type="button"
        >
          <span
            className="text-0-2-2"
          >
            L
          </span>
        </button>
      `);
    });

    it('renders a H1 block style button', () => {
      props.buttonType = 'unordered-list';
      const wrapper = shallow(<EditorButton {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <button
          className="root-0-2-1"
          data-is-active={false}
          disabled={false}
          onMouseDown={[Function]}
          type="button"
        >
          <span
            className="text-0-2-2"
          >
            U
          </span>
        </button>
      `);
    });

    it('renders a disabled button', () => {
      props.disabled = true;
      const wrapper = shallow(<EditorButton {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <button
          className="root-0-2-1"
          data-is-active={false}
          disabled={true}
          onMouseDown={[Function]}
          type="button"
        >
          <span
            className="text-0-2-2"
          >
            B
          </span>
        </button>
      `);
    });

    it('renders an active button', () => {
      props.active = true;
      const wrapper = shallow(<EditorButton {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <button
          className="root-0-2-1"
          data-is-active={true}
          disabled={false}
          onMouseDown={[Function]}
          type="button"
        >
          <span
            className="text-0-2-2"
          >
            B
          </span>
        </button>
      `);
    });
  });
});
