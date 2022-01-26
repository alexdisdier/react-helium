import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../../utils/tests';

import { Toolbar } from '.';

// import useStyles from './toolbar.style';

// const classes = classesFromStyles(styles);

jest.mock('../../../../utils/editor', () => ({
  hasBlockType: jest.fn(),
  hasInlineStyle: jest.fn(),
  hasLink: jest.fn(),
}));

jest.mock('./editorButton', () => 'EditorButton');

jest.mock('../../../atoms/icons', () => ({
  IconBullets: 'IconBullets',
  IconFormatBold: 'IconFormatBold',
  IconFormatItalic: 'IconFormatItalic',
  IconFormatNumbers: 'IconFormatNumbers',
  IconInsertLink: 'IconInsertLink',
  IconInsertPhoto: 'IconInsertPhoto',
}));

describe('Toolbar', () => {
  let props;

  beforeEach(() => {
    props = {
      editorState: {},
      onToggleBlockType: jest.fn(),
      onToggleInlineType: jest.fn(),
      disabled: false,
      isLinkEditorButtonActive: false,
    };
  });

  it('renders all EditorButtons disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<Toolbar {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="root-0-2-1"
        data-is-disabled={true}
      >
        <EditorButton
          buttonType="header-one"
          disabled={true}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="BOLD"
          disabled={true}
          icon={<IconFormatBold />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="ITALIC"
          disabled={true}
          icon={<IconFormatItalic />}
          onClick={[MockFunction]}
        />
        <EditorButton
          active={false}
          buttonType="LINK"
          disabled={true}
          icon={<IconInsertLink />}
          promptForLink={[Function]}
          removeLink={[Function]}
        />
        <EditorButton
          buttonType="ordered-list-item"
          disabled={true}
          icon={<IconFormatNumbers />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="unordered-list-item"
          disabled={true}
          icon={<IconBullets />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="atomic"
          disabled={true}
          icon={<IconInsertPhoto />}
          onClick={[Function]}
        />
      </div>
    `);
  });

  it('renders full component', () => {
    const wrapper = shallow(<Toolbar {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="root-0-2-1"
        data-is-disabled={false}
      >
        <EditorButton
          buttonType="header-one"
          disabled={false}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="BOLD"
          disabled={false}
          icon={<IconFormatBold />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="ITALIC"
          disabled={false}
          icon={<IconFormatItalic />}
          onClick={[MockFunction]}
        />
        <EditorButton
          active={false}
          buttonType="LINK"
          disabled={false}
          icon={<IconInsertLink />}
          promptForLink={[Function]}
          removeLink={[Function]}
        />
        <EditorButton
          buttonType="ordered-list-item"
          disabled={false}
          icon={<IconFormatNumbers />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="unordered-list-item"
          disabled={false}
          icon={<IconBullets />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="atomic"
          disabled={false}
          icon={<IconInsertPhoto />}
          onClick={[Function]}
        />
      </div>
    `);
  });
});
