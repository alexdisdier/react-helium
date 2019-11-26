import React from 'react';
import renderer from 'react-test-renderer';

import { classesFromStyles } from '../../../utils/tests';

import { Snackbars, withSnackbarsContext } from '.';

import styles from './snackbars.style';

jest.useFakeTimers();

const classes = classesFromStyles(styles);

describe('Snackbars', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      config: {
        backgroundColor: 'red',
        color: 'white',
        top: false,
        bottomLeft: false
      }
    };
  });

  const Child = withSnackbarsContext(() => <div id="child">child</div>);

  it('should display a success message', () => {
    const tree = renderer.create(
      <Snackbars {...props}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { successSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(successSnackbar).toBeInstanceOf(Function);
    successSnackbar('A successful message', null, null, props.config);

    expect(tree).toMatchInlineSnapshot(`
      Array [
        <div>
          <div
            id="child"
          >
            child
          </div>
        </div>,
        <div
          className="class-from-style-root"
          data-has-error={false}
          data-is-bottomleft={false}
          data-is-ready={false}
          data-is-top={false}
          style={
            Object {
              "backgroundColor": "red",
            }
          }
        >
          <div
            style={
              Object {
                "color": "white",
              }
            }
          >
            A successful message
          </div>
        </div>,
      ]
    `);
  });

  it('should display a success message with an action', () => {
    const tree = renderer.create(
      <Snackbars {...props}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { successSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(successSnackbar).toBeInstanceOf(Function);
    successSnackbar('A successful message', 'undo', () => {}, props.config);

    expect(tree).toMatchInlineSnapshot(`
      Array [
        <div>
          <div
            id="child"
          >
            child
          </div>
        </div>,
        <div
          className="class-from-style-root"
          data-has-error={false}
          data-is-bottomleft={false}
          data-is-ready={false}
          data-is-top={false}
          style={
            Object {
              "backgroundColor": "red",
            }
          }
        >
          <div
            style={
              Object {
                "color": "white",
              }
            }
          >
            A successful message
          </div>
          <button
            className="class-from-style-undoClickBtn"
            onClick={[Function]}
          >
            undo
          </button>
        </div>,
      ]
    `);
  });

  it('should display an error message', () => {
    const tree = renderer.create(
      <Snackbars {...props}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { errorSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(errorSnackbar).toBeInstanceOf(Function);
    errorSnackbar('some error message', props.config);

    expect(tree).toMatchInlineSnapshot(`
      Array [
        <div>
          <div
            id="child"
          >
            child
          </div>
        </div>,
        <div
          className="class-from-style-root"
          data-has-error={true}
          data-is-bottomleft={false}
          data-is-ready={false}
          data-is-top={false}
          style={
            Object {
              "backgroundColor": "red",
            }
          }
        >
          <div
            style={
              Object {
                "color": "white",
              }
            }
          >
            some error message
          </div>
        </div>,
      ]
    `);
    jest.runAllTimers();
  });
});
