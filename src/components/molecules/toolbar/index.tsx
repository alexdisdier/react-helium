import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';
import { EditorState } from 'draft-js';

import { hasBlockType, hasInlineStyle, hasLink } from '../../../utils/editor';

import { EditorButton } from '../../atoms';

import styles from './toolbar.style';

interface Props {
  classes: ClassNameMap<string>;
  editorState: EditorState;
  onToggleBlockType?: any;
  onToggleInlineType?: any;
  promptForLink?: (x) => void;
  removeLink?: () => void;
  disabled?: boolean;
  isLinkButtonActive?: boolean;
}

export const Toolbar: React.FC<Props> = ({
  classes,
  editorState,
  onToggleBlockType = () => {},
  onToggleInlineType = () => {},
  promptForLink = () => {},
  removeLink = () => {},
  disabled = false,
  isLinkButtonActive = false
}) => {
  const rootProps = {
    className: classes.root,
    'data-is-disabled': disabled
  };

  return (
    <div {...rootProps}>
      <EditorButton
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, 'header-one')}
        buttonType="header-one"
        disabled={disabled}
      />

      <EditorButton
        onClick={onToggleInlineType}
        active={hasInlineStyle(editorState, 'BOLD')}
        buttonType="BOLD"
        disabled={disabled}
      />

      <EditorButton
        icon={null}
        promptForLink={promptForLink}
        removeLink={removeLink}
        active={hasLink(editorState) || isLinkButtonActive}
        buttonType="LINK"
        disabled={disabled}
      />

      <EditorButton
        icon={null}
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, 'unordered-list-item')}
        buttonType="unordered-list-item"
        disabled={disabled}
      />
    </div>
  );
};

export default injectSheet(styles)(Toolbar);
