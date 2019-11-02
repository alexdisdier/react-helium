import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';
import { EditorState } from 'draft-js';

import { BLOCK_TYPES, INLINE_STYLES, isActive } from '../../../../utils/editor';

import EditorButton from '../../../atoms/editorButton';

import styles from './toolbar.style';

interface Props {
  classes: ClassNameMap<string>;
  editorState: EditorState;
  onToggleBlockType?: any;
  onToggleInlineType?: any;
  disabled?: boolean;
}

export const Toolbar: React.FC<Props> = ({
  classes,
  editorState,
  onToggleBlockType = () => {},
  onToggleInlineType = () => {},
  disabled = false
}) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const rootProps = {
    className: classes.root,
    'data-is-disabled': disabled
  };

  return (
    <div {...rootProps}>
      {BLOCK_TYPES.map(type => (
        <EditorButton
          key={type.label}
          label={type.label}
          icon={type.icon}
          onClick={onToggleBlockType}
          active={type.style === blockType}
          style={type.style}
          disabled={disabled}
        />
      ))}
      {INLINE_STYLES.map(type => (
        <EditorButton
          key={type.label}
          label={type.label}
          icon={type.icon}
          onClick={onToggleInlineType}
          active={isActive(editorState, type.style)}
          style={type.style}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default injectSheet(styles)(Toolbar);
