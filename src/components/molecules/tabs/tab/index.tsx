import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './tab.style';

interface Props {
  classes: ClassNameMap<string>;
  centered?: boolean;
  activeTab: string;
  label: string;
  onClick: (label) => void;
}

export const Tab: React.FC<Props> = ({
  classes,
  activeTab,
  label,
  onClick
}) => {
  const handleClick = () => onClick(label);

  const active = activeTab === label;

  const inputProps = {
    className: classes.input,
    checked: active,
    type: 'radio',
    id: label,
    name: 'tab-control'
  };

  const liProps = {
    className: classes.li,
    'data-is-active': active,
    onClick: handleClick
  };

  const labelProps = {
    className: classes.label,
    role: 'button'
  };

  return (
    <>
      <input {...inputProps} />
      <li {...liProps}>
        <label {...labelProps} htmlFor={label}>
          {label}
        </label>
      </li>
      <div className={classes.slider}>
        <div className={classes.indicator} />
      </div>
    </>
  );
};

export default injectSheet(styles)(Tab);

// https://codepen.io/woranov/pen/NRqLWK/
