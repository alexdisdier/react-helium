import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

import { Editor } from '.';

// import useStyles from './editor.style';

// const classes = classesFromStyles(styles);

const mockContentState = {
  editorState: 'editorState'
};

// Adding mock Editor functions to the mockContentState
mockContentState.hasText = jest.fn();
mockContentState.getBlockMap = jest.fn(() => mockContentState);
mockContentState.first = jest.fn(() => mockContentState);
mockContentState.getType = jest.fn(() => mockContentState);

jest.mock('draft-js', () => ({
  CompositeDecorator: jest.fn(),
  Editor: 'Draft',
  EditorState: {
    createEmpty: jest.fn(() => ({
      getCurrentContent: jest.fn(() => mockContentState)
    }))
  },
  RichUtils: jest.fn()
}));

jest.mock('../../atoms/button', () => 'Button');
jest.mock('./toolbar', () => 'Toolbar');

jest.mock('../../../utils/editor', () => ({
  findLinkEntities: jest.fn(),
  getBlockStyle: jest.fn(),
  getHMLString: jest.fn()
}));

describe('Editor', () => {
  let props;

  // Spy and mock useState hook
  const setShowUrlInput = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(showUrlInput => [
    showUrlInput,
    setShowUrlInput
  ]);

  beforeEach(() => {
    props = {
      placeholder: 'I am a placeholder',
      onChange: jest.fn(),
      disabled: false
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a url input field', () => {
    const wrapper = shallow(<Editor {...props} />);
    setShowUrlInput(true);

    wrapper.find('UrlInput');

    expect(setShowUrlInput).toHaveBeenCalledTimes(1);
    expect(setShowUrlInput).toHaveBeenCalledWith(true);
  });

  it('renders a rich text editor', () => {
    const wrapper = shallow(<Editor {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <div
          onBlur={[Function]}
          onClick={[Function]}
        >
          <Toolbar
            addImage={[Function]}
            disabled={false}
            editorState={
              Object {
                "getCurrentContent": [MockFunction] {
                  "calls": Array [
                    Array [],
                  ],
                  "results": Array [
                    Object {
                      "type": "return",
                      "value": Object {
                        "editorState": "editorState",
                        "first": [MockFunction] {
                          "calls": Array [
                            Array [],
                          ],
                          "results": Array [
                            Object {
                              "type": "return",
                              "value": [Circular],
                            },
                          ],
                        },
                        "getBlockMap": [MockFunction] {
                          "calls": Array [
                            Array [],
                          ],
                          "results": Array [
                            Object {
                              "type": "return",
                              "value": [Circular],
                            },
                          ],
                        },
                        "getType": [MockFunction] {
                          "calls": Array [
                            Array [],
                          ],
                          "results": Array [
                            Object {
                              "type": "return",
                              "value": [Circular],
                            },
                          ],
                        },
                        "hasText": [MockFunction] {
                          "calls": Array [
                            Array [],
                          ],
                          "results": Array [
                            Object {
                              "type": "return",
                              "value": undefined,
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              }
            }
            isLinkButtonActive={false}
            onToggleBlockType={[Function]}
            onToggleInlineType={[Function]}
            promptForLink={[Function]}
            removeLink={[Function]}
          />
          <div
            className="root-0-2-1"
            data-has-focus={false}
            data-is-disabled={false}
            data-is-placeholder-hidden={true}
          >
            <Draft
              blockRendererFn={[Function]}
              blockStyleFn={[MockFunction]}
              editorState={
                Object {
                  "getCurrentContent": [MockFunction] {
                    "calls": Array [
                      Array [],
                    ],
                    "results": Array [
                      Object {
                        "type": "return",
                        "value": Object {
                          "editorState": "editorState",
                          "first": [MockFunction] {
                            "calls": Array [
                              Array [],
                            ],
                            "results": Array [
                              Object {
                                "type": "return",
                                "value": [Circular],
                              },
                            ],
                          },
                          "getBlockMap": [MockFunction] {
                            "calls": Array [
                              Array [],
                            ],
                            "results": Array [
                              Object {
                                "type": "return",
                                "value": [Circular],
                              },
                            ],
                          },
                          "getType": [MockFunction] {
                            "calls": Array [
                              Array [],
                            ],
                            "results": Array [
                              Object {
                                "type": "return",
                                "value": [Circular],
                              },
                            ],
                          },
                          "hasText": [MockFunction] {
                            "calls": Array [
                              Array [],
                            ],
                            "results": Array [
                              Object {
                                "type": "return",
                                "value": undefined,
                              },
                            ],
                          },
                        },
                      },
                    ],
                  },
                }
              }
              handleKeyCommand={[Function]}
              onChange={[Function]}
              placeholder="I am a placeholder"
              readOnly={false}
              spellCheck={true}
            />
          </div>
        </div>
      </Fragment>
    `);
  });
});
