import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import displayHTML from '../../../utils/displayHTML';

import styles from './htmlDisplay.style';

interface Props {
  classes: ClassNameMap<string>;
  htmlData: {};
}

export const HtmlDisplay: React.FC<Props> = ({ classes, htmlData }) => {
  return (
    <div
      className={classes.readOnly}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={displayHTML(htmlData, null)}
    />
  );
};

export default injectSheet(styles)(HtmlDisplay);
