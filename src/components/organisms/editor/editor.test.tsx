import React from 'react';
import { render } from '@testing-library/react';

import { Editor } from '.';

const mockContentState = {
  editorState: 'editorState',
};

// Adding mock Editor functions to the mockContentState
mockContentState.hasText = jest.fn();
mockContentState.getBlockMap = jest.fn(() => mockContentState);
mockContentState.first = jest.fn(() => mockContentState);
mockContentState.getType = jest.fn(() => mockContentState);

jest.mock('draft-js', () => ({
  AtomicBlockUtils: jest.fn(),
  CompositeDecorator: jest.fn(),
  Editor: 'Draft',
  EditorState: {
    createEmpty: () => ({
      getCurrentContent: jest.fn(() => mockContentState),
    }),
  },
  RichUtils: jest.fn(),
}));

jest.mock('../../atoms/button', () => 'mock-button');
jest.mock('./toolbar', () => 'mock-toolbar');

jest.mock('../../../utils/editor', () => ({
  findLinkEntities: jest.fn(),
  getBlockStyle: jest.fn(),
  getHMLString: jest.fn(),
}));

describe('Editor', () => {
  let props;

  // Spy and mock useState hook
  const setShowUrlInput = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((showUrlInput) => [
    showUrlInput,
    setShowUrlInput,
  ]);

  beforeEach(() => {
    props = {
      placeholder: 'I am a placeholder',
      onChange: jest.fn(),
      disabled: false,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.skip('renders a url input field', () => {
    render(<Editor {...props} />);
    setShowUrlInput(true);

    // container.firstChild.find('UrlInput');

    expect(setShowUrlInput).toHaveBeenCalledTimes(1);
    expect(setShowUrlInput).toHaveBeenCalledWith(true);
  });

  it.skip('renders a rich text editor', () => {
    const { container } = render(<Editor {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
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
