import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { Editor } from '.';

import styles from './editor.style';

jest.mock('draft-js', () => ({
  Editor: 'Draft',
  EditorState: {
    createEmpty: jest.fn()
  },
  RichUtils: jest.fn()
}));

jest.mock('../../atoms/button', () => 'Button');
jest.mock('../../molecules/toolbar', () => 'Toolbar');

jest.mock('../../../utils/editor', () => ({
  BLOCK_TYPES: [{ label: 'H1', style: 'header-one', icon: <span>H1</span> }],
  INLINE_STYLES: [{ label: 'B', style: 'BOLD', icon: <span>B</span> }],
  isActive: jest.fn()
}));

const classes = classesFromStyles(styles);

describe('Editor', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      editorState: { _immutable: 'test' },
      placeholder: 'I am a placeholder',
      onChange: jest.fn(),
      disabled: false
    };
  });

  it('renders a rich text editor', () => {
    const wrapper = shallow(<Editor {...props} />);
  });
});
