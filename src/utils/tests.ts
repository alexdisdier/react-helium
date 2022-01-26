import { theme } from '../style';

export const classesFromStyles = (styles) => {
  const classes = {};
  const stylesObj = typeof styles === 'function' ? styles(theme) : styles;
  Object.keys(stylesObj).forEach((k) => {
    classes[k] = `class-from-style-${k}`;
  });
  return classes;
};
