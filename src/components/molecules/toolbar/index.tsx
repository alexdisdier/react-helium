import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';
import { EditorState } from 'draft-js';

import { hasBlockType, hasInlineStyle, hasLink } from '../../../utils/editor';

import { HEADER_ONE, BOLD, LINK, UNORDERED_LIST_ITEM } from '../../../constant';

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
  ref: any;
}

export const Toolbar: React.FC<Props> = ({
  classes,
  editorState,
  onToggleBlockType = () => {},
  onToggleInlineType = () => {},
  promptForLink = () => {},
  removeLink = () => {},
  disabled = false,
  isLinkButtonActive = false,
  ref
}) => {
  const rootProps = {
    className: classes.root,
    'data-is-disabled': disabled
  };

  return (
    <div {...rootProps}>
      <EditorButton
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, HEADER_ONE)}
        buttonType={HEADER_ONE}
        disabled={disabled}
        ref={ref}
      />

      <EditorButton
        onClick={onToggleInlineType}
        active={hasInlineStyle(editorState, BOLD)}
        buttonType={BOLD}
        disabled={disabled}
        ref={ref}
      />

      <EditorButton
        icon={null}
        promptForLink={promptForLink}
        removeLink={removeLink}
        active={hasLink(editorState) || isLinkButtonActive}
        buttonType={LINK}
        disabled={disabled}
        ref={ref}
      />

      <EditorButton
        icon={null}
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, UNORDERED_LIST_ITEM)}
        buttonType={UNORDERED_LIST_ITEM}
        disabled={disabled}
        ref={ref}
      />
    </div>
  );
};

export default injectSheet(styles)(Toolbar);
