import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './tab.style';

interface Props {
  classes: ClassNameMap<string>;
  centered?: boolean;
  activeTab: string;
  label: string;
  onClick: (event, label) => void;
}

export const Tab: React.FC<Props> = ({
  classes,
  activeTab,
  label,
  onClick
}) => {
  const handleClick = event => onClick(event, label);

  const rootProps = {
    className: classes.root,
    'data-is-active': activeTab === label,
    onClick: handleClick
  };

  return (
    <>
      <li {...rootProps}>{label}</li>
    </>
  );
};

export default injectSheet(styles)(Tab);
