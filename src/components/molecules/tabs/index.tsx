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
  // need to get position left and width of first element on render
  const [dimensions, setDimensions] = React.useState({ left: 0, width: 50 });

  const handleClickItem = (event, tab) => {
    setActiveTab(tab);

    setDimensions({
      left: event.currentTarget.getBoundingClientRect().left - 39,
      width: event.currentTarget.getBoundingClientRect().width
    });
  };

  const contentWrapperProps = {
    className: classes.contentWrapper,
    'data-is-centered': centered
  };

  return (
    <div>
      <ol className={classes.root}>
        <div className={classes.tabsWrapper}>
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
        </div>
        <div
          style={{ left: dimensions.left, width: dimensions.width }}
          className={classes.slider}
        />
      </ol>

      <div {...contentWrapperProps}>
        {tabs &&
          tabs.map(tab => {
            if (tab.label !== activeTab) return undefined;
            return <div key={tab.label}>{tab.component}</div>;
          })}
      </div>
    </div>
  );
};

export default injectSheet(styles)(Tabs);
