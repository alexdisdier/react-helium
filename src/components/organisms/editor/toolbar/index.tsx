import React from 'react';

import { EditorState } from 'draft-js';

import {
  IconBullets,
  IconFormatBold,
  IconFormatItalic,
  IconFormatNumbers,
  IconInsertLink,
  IconInsertPhoto
} from '../../../atoms/icons';

import {
  hasBlockType,
  hasInlineStyle,
  hasLink
} from '../../../../utils/editor';

import {
  HEADER_ONE,
  BOLD,
  ITALIC,
  LINK,
  ORDERED_LIST_ITEM,
  UNORDERED_LIST_ITEM
} from '../../../../constant';

import EditorButton from './editorButton';

import useStyles from './toolbar.style';

interface Props {
  editorState: EditorState;
  onToggleBlockType?: any;
  onToggleInlineType?: any;
  promptForLink?: (x) => void;
  removeLink?: () => void;
  addImage?: () => void;
  disabled?: boolean;
  isLinkButtonActive?: boolean;
}

export const Toolbar: React.FC<Props> = ({
  editorState,
  onToggleBlockType = () => {},
  onToggleInlineType = () => {},
  promptForLink = () => {},
  removeLink = () => {},
  addImage = () => {},
  disabled = false,
  isLinkButtonActive = false
}) => {
  const classes = useStyles();

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
        icon={<IconFormatBold />}
        onClick={onToggleInlineType}
        active={hasInlineStyle(editorState, BOLD)}
        buttonType={BOLD}
        disabled={disabled}
      />

      <EditorButton
        icon={<IconFormatItalic />}
        onClick={onToggleInlineType}
        active={hasInlineStyle(editorState, ITALIC)}
        buttonType={ITALIC}
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
        icon={<IconFormatNumbers />}
        onClick={onToggleBlockType}
        active={hasBlockType(editorState, ORDERED_LIST_ITEM)}
        buttonType={ORDERED_LIST_ITEM}
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
        onClick={addImage}
        active={hasBlockType(editorState, 'atomic')}
        buttonType="atomic"
        disabled={disabled}
      />
    </div>
  );
};

export default Toolbar;
