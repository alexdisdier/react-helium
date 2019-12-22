import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { Toolbar } from '.';

import styles from './toolbar.style';

const classes = classesFromStyles(styles);

jest.mock('../../../utils/editor', () => ({
  hasBlockType: jest.fn(),
  hasInlineStyle: jest.fn(),
  hasLink: jest.fn()
}));

jest.mock('../../atoms/editorButton', () => 'EditorButton');

jest.mock('../../atoms/icons', () => ({
  IconBullets: 'IconBullets',
  IconInsertLink: 'IconInsertLink',
  IconInsertPhoto: 'IconInsertPhoto'
}));

describe('Toolbar', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      editorState: {},
      onToggleBlockType: jest.fn(),
      onToggleInlineType: jest.fn(),
      disabled: false,
      isLinkEditorButtonActive: false
    };
  });

  it('renders all EditorButtons disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<Toolbar {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
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
          buttonType="unordered-list-item"
          disabled={true}
          icon={<IconBullets />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="unordered-list-item"
          disabled={true}
          icon={<IconInsertPhoto />}
          onClick={[MockFunction]}
        />
      </div>
    `);
  });

  it('renders full component', () => {
    const wrapper = shallow(<Toolbar {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="class-from-style-root"
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
          buttonType="unordered-list-item"
          disabled={false}
          icon={<IconBullets />}
          onClick={[MockFunction]}
        />
        <EditorButton
          buttonType="unordered-list-item"
          disabled={true}
          icon={<IconInsertPhoto />}
          onClick={[MockFunction]}
        />
      </div>
    `);
  });
});
