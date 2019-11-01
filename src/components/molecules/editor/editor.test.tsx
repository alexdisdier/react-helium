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

const classes = classesFromStyles(styles);

describe('Editor', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      placeholder: 'I am a placeholder',
      onChange: jest.fn(),
      disabled: false
    };
  });

  it('renders a rich text editor', () => {
    const wrapper = shallow(<Editor {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        className="class-from-style-root"
        data-is-primary={false}
        data-is-secondary={false}
        data-is-warning={false}
        disabled={false}
        onClick={[Function]}
        type="button"
      >
        <span
          className="class-from-style-text"
        >
          <div>
            I am THE button
          </div>
        </span>
      </button>
    `);
  });
});
