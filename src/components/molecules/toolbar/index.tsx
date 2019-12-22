import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';
import { EditorState } from 'draft-js';

import {
  IconBullets,
  IconInsertLink,
  IconInsertPhoto
} from '../../atoms/icons';

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
        active={hasBlockType(editorState, HEADER_ONE)}
        buttonType={HEADER_ONE}
        disabled={disabled}
      />

      <EditorButton
        onClick={onToggleInlineType}
        active={hasInlineStyle(editorState, BOLD)}
        buttonType={BOLD}
        disabled={disabled}
      />

      <EditorButton
        icon={<IconInsertLink />}
        promptForLink={promptForLink}
        removeLink={removeLink}
        active={hasLink(editorState) || isLinkButtonActive}
        buttonType={LINK}
        disabled={disabled}
      />

      <EditorButton
        icon={<IconBullets />}
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, UNORDERED_LIST_ITEM)}
        buttonType={UNORDERED_LIST_ITEM}
        disabled={disabled}
      />

      <EditorButton
        icon={<IconInsertPhoto />}
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, UNORDERED_LIST_ITEM)}
        buttonType={UNORDERED_LIST_ITEM}
        disabled
      />
    </div>
  );
};

export default injectSheet(styles)(Toolbar);
