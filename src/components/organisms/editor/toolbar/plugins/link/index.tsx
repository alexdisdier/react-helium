import React from 'react';
// import { WithStylesProps } from 'react-jss';

import { Entity } from 'draft-js';

import useStyles from './link.style';

interface Props {
  // classes: WithStylesProps<any>;
  entityKey: string;
  children: React.ReactNode;
}

export const Link: React.FC<Props> = ({ entityKey, children }) => {
  const classes = useStyles();

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

export default Link;
