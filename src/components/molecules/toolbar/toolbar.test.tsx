import React from 'react';
// import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

// import { Toolbar } from '.';

// import styles from './toolbar.style';

jest.mock('../../../utils/editor', () => ({
  BLOCK_TYPES: [{ label: 'H1', style: 'header-one', icon: <span>H1</span> }],
  INLINE_STYLES: [{ label: 'B', style: 'BOLD', icon: <span>B</span> }],
  isActive: jest.fn()
}));

// const classes = classesFromStyles(styles);

describe('Toolbar', () => {
  // let props;

  // const getStartKeySpy = jest.fn();

  beforeEach(() => {
    // props = {
    //   classes,
    //   editorState: {
    //     getSelection: jest.fn(() => getStartKeySpy()),
    //     getCurrentContent: () => 'test',
    //     editorState: 'editorState',
    //     getBlockForKey: jest.fn(() => getStartKeySpy()),
    //     getType: jest.fn()
    //   },
    //   onToggleBlockType: jest.fn(),
    //   onToggleInlineType: jest.fn(),
    //   disabled: false
    // };
  });

  it('renders full component', () => {
    // const wrapper = shallow(<Toolbar {...props} />);
    // expect(wrapper).toMatchInlineSnapshot(``);
  });
});
