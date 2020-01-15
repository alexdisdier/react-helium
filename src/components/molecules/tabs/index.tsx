import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import Tab from './tab';

import styles from './tabs.style';

interface Props {
  classes: ClassNameMap<string>;
  tabs: Array<{
    label: string;
    component: React.ReactNode;
  }>;
  centered?: boolean;
}

export const Tabs: React.FC<Props> = ({ classes, tabs, centered = false }) => {
  // First tab active by default
  const [activeTab, setActiveTab] = React.useState(
    (tabs && tabs[0].label) || ''
  );

  const handleClickItem = tab => setActiveTab(tab);

  const contentWrapperProps = {
    className: classes.contentWrapper,
    'data-is-centered': centered
  };

  return (
    <div>
      <ol className={classes.root}>
        {tabs &&
          tabs.map(tab => {
            const { label } = tab;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={handleClickItem}
              />
            );
          })}
      </ol>
      <div {...contentWrapperProps}>
        {tabs &&
          tabs.map(tab => {
            if (tab.label !== activeTab) return undefined;
            return tab.component;
          })}
      </div>
    </div>
  );
};

export default injectSheet(styles)(Tabs);
