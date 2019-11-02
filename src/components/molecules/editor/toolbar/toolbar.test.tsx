import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../../utils/tests';

import { Toolbar } from '.';

import styles from './toolbar.style';

jest.mock('draft-js', () => ({
  EditorState: {
    getSelection: jest.fn()
  }
}));

const classes = classesFromStyles(styles);

// const getSelectionSpy = jest.fn();
// const getCurrentContentSpy = jest.fn();
// const getBlockForKeySpy = jest.fn();
// const getStartKeySpy = jest.fn();
// const getTypeSpy = jest.fn();

describe('Toolbar', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      editorState: {},
      onToggleBlockType: jest.fn(),
      onToggleInlineType: jest.fn(),
      disabled: false
    };
  });

  it('renders full component', () => {
    // const wrapper = shallow(<Toolbar {...props} />);
    // expect(wrapper).toMatchInlineSnapshot(``);
  });
});
