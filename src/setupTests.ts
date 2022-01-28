// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// mock jss to produce only the raw class names without collision safeguards
// which yields more readable and robust snapshots
jest.mock('react-jss', () => ({
  ...(jest.requireActual('react-jss') as any),
  __esModule: true,
  default: () => (component) => component, // note: default is injectSheet which is not directly used in tests
  createUseStyles: (arg: any) => () =>
    Object.keys(typeof arg === 'function' ? arg({}) : arg).reduce(
      (classes, className) => {
        classes[className] = className;
        return classes;
      },
      {}
    ),
}));
