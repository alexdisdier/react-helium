import React from 'react';
import renderer from 'react-test-renderer';
import { classesFromStyles } from '../../../utils/tests';
import { TIMEOUT_DURATION } from '../../../constant/types';

import { Snackbars, withSnackbarsContext } from '.';

import styles from './snackbars.style';

jest.useFakeTimers();

describe('Snackbars', () => {
  const classes = classesFromStyles(styles);
  const Child = withSnackbarsContext(() => <div id="child">child</div>);

  it('should display and hide a success message', () => {
    const tree = renderer.create(
      <Snackbars classes={classes}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { successSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(successSnackbar).toBeInstanceOf(Function);
    successSnackbar('some message to display');

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
          data-is-ready={false}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            some message to display
          </div>
        </div>,
      ]
    `);
    jest.runAllTimers();

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
          data-is-ready={true}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            some message to display
          </div>
        </div>,
      ]
    `);
  });

  it('should display and hide a success message with an action', () => {
    const tree = renderer.create(
      <Snackbars classes={classes}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { successSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(successSnackbar).toBeInstanceOf(Function);
    successSnackbar('some message to display', 'action', () => {});

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
          data-is-ready={false}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            some message to display
          </div>
          <button
            className="class-from-style-undoClickBtn"
            onClick={[Function]}
          >
            action
          </button>
        </div>,
      ]
    `);
    jest.runAllTimers();

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
          data-is-ready={true}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            some message to display
          </div>
          <button
            className="class-from-style-undoClickBtn"
            onClick={[Function]}
          >
            action
          </button>
        </div>,
      ]
    `);
  });

  it('should display and hide an error message', () => {
    const tree = renderer.create(
      <Snackbars classes={classes}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { errorSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(errorSnackbar).toBeInstanceOf(Function);
    errorSnackbar('some message to display');

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
          data-is-ready={false}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-error"
          >
            some message to display
          </div>
        </div>,
      ]
    `);
    jest.runAllTimers();

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
          data-is-ready={true}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-error"
          >
            some message to display
          </div>
        </div>,
      ]
    `);
  });

  it('should successively display messages', () => {
    const tree = renderer.create(
      <Snackbars classes={classes}>
        <div>
          <Child />
        </div>
      </Snackbars>
    );

    const { successSnackbar } = tree.root.findByType(Child).children[0].props;
    expect(successSnackbar).toBeInstanceOf(Function);
    successSnackbar('first message to display');
    successSnackbar('second message to display');
    successSnackbar('third message to display');

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
          data-is-ready={false}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            third message to display
          </div>
        </div>,
      ]
    `);
    jest.runTimersToTime(TIMEOUT_DURATION);

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
          data-is-ready={true}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            third message to display
          </div>
        </div>,
      ]
    `);
    jest.runTimersToTime(TIMEOUT_DURATION);

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
          data-is-ready={true}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            third message to display
          </div>
        </div>,
      ]
    `);
    jest.runTimersToTime(TIMEOUT_DURATION);

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
          data-is-ready={true}
          data-is-top={false}
        >
          <div
            data-cy="helium-snackbar-success"
          >
            third message to display
          </div>
        </div>,
      ]
    `);
  });
});
