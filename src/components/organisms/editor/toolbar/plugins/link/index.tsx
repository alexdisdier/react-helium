import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import { Entity } from 'draft-js';

import styles from './link.style';

interface Props {
  entityKey: string;
  children: React.ReactNode;
}

export const Link: React.FC<Props> = ({ classes, entityKey, children }) => {
  const { url } = Entity.get(entityKey).getData();
  return (
    <a
      className={classes.root}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
    >
      {children}
    </a>
  );
};

export default withStyles(styles)(Link);
