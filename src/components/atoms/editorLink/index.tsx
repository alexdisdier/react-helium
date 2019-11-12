import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { Entity } from 'draft-js';

import styles from './editorLink.style';

interface Props {
  classes: ClassNameMap<string>;
  entityKey: string;
  children: React.ReactNode;
}

export const EditorLink: React.FC<Props> = ({
  classes,
  entityKey,
  children
}) => {
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

export default injectSheet(styles)(EditorLink);
