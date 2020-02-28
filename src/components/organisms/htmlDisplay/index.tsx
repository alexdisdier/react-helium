import React from 'react';
// import { WithStylesProps } from 'react-jss';

import displayHTML from '../../../utils/displayHTML';

import useStyles from './htmlDisplay.style';

interface Props {
  // classes: WithStylesProps<any>;
  htmlData: {};
}

export const HtmlDisplay: React.FC<Props> = ({ htmlData }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.readOnly}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={displayHTML(htmlData, null)}
    />
  );
};

export default HtmlDisplay;
