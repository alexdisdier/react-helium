import * as React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

// Used to set the first tab width and the tabs left position according to wrapper
import { TAB_MARGIN_RIGHT, WRAPPER_PADDING_LEFT } from '../../../constant';

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

  const [sliderDimensions, setSliderDimensions] = React.useState({
    left: 0,
    width: 0
  });

  // Individual ref to get first width
  const tabRef: any | null = React.useRef(null);

  // Wrapper ref to get left position value
  const wrapperRef: any | null = React.useRef(null);

  React.useEffect(() => {
    setSliderDimensions({
      left: 0,
      width: tabRef.current.offsetWidth - TAB_MARGIN_RIGHT
    });
  }, []);

  const handleClickItem = (event, label) => {
    setActiveTab(label);

    /**
     * We log the left position value of the active tab and
     * the tabs' wrapper's left position.
     * We should set it when onclick is triggered; as the user can resize its window.
     */
    const tabLeftPosition = event.currentTarget.getBoundingClientRect().left;
    const wrapperLeftPosition = wrapperRef.current.offsetLeft;

    setSliderDimensions({
      left: tabLeftPosition - wrapperLeftPosition - WRAPPER_PADDING_LEFT,
      width: event.currentTarget.getBoundingClientRect().width
    });
  };

  const contentWrapperProps = {
    className: classes.contentWrapper,
    'data-is-centered': centered
  };

  return (
    <>
      <ol ref={wrapperRef} className={classes.root}>
        <div className={classes.tabsWrapper}>
          {tabs.map((tab, index) => {
            const { label } = tab;

            // Need only the first ref to set the initial slider width
            const firstTabRef =
              index === 0
                ? {
                    ref: tabRef
                  }
                : null;

            return (
              <div key={label} {...firstTabRef}>
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={handleClickItem}
                />
              </div>
            );
          })}
        </div>
        <div
          style={{ left: sliderDimensions.left, width: sliderDimensions.width }}
          className={classes.slider}
        />
      </ol>

      <div {...contentWrapperProps}>
        {Array.isArray(tabs) &&
          tabs.map(tab => {
            if (tab.label !== activeTab) return undefined;
            return (
              <React.Fragment key={tab.label}>{tab.component}</React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default injectSheet(styles)(Tabs);
