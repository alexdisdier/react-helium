import * as React from 'react';

import displayHTML from '../../../utils/displayHTML';

import useStyles from './htmlDisplay.style';

interface Props {
  htmlData: Record<string, unknown>;
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
