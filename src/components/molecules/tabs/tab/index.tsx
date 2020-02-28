import * as React from 'react';
// import { WithStylesProps } from 'react-jss';

import useStyles from './tab.style';

interface Props {
  // classes: WithStylesProps<any>;
  label: string;
  activeTab: string;
  onClick: (event, label) => void;
}

export const Tab: React.FC<Props> = ({ activeTab, label, onClick }) => {
  const classes = useStyles();
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

export default Tab;
