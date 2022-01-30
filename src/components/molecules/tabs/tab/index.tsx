import * as React from 'react';

import useStyles from './tab.style';

interface Props {
  label: string;
  activeTab: string;
  onClick: (event, label) => void;
}

export const Tab: React.FC<Props> = ({ activeTab, label, onClick }) => {
  const classes = useStyles();
  const handleClick = (event) => onClick(event, label);

  const rootProps = {
    className: classes.root,
    'data-is-active': activeTab === label,
    onClick: handleClick,
  };

  return <li {...rootProps}>{label}</li>;
};

export default Tab;
