import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { Editor as Draft, EditorState, RichUtils } from 'draft-js';

import { getBlockStyle, getHTMLString } from '../../../utils/editor';

import Toolbar from './toolbar';

import styles from './editor.style';

import './editor.css';

interface Props {
  classes: ClassNameMap<string>;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e) => void;
}

export const Editor: React.FC<Props> = ({
  classes,
  placeholder = '',
  disabled = false,
  onChange
}) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [isFocused, setFocused] = useState(false);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onChange(getHTMLString(editorState));
  };

  /**
   * e.g: Handles header, bullet points
   */
  const toggleBlockType = (blockType: string) => {
    onEditorStateChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  /**
   * e.g: Handles bold
   */
  const toggleInlineStyle = (inlineStyle: string) => {
    onEditorStateChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  /**
   * Handles any key commands such as italics, bold, ...
   */
  const handleKeyCommand = (cmd: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, cmd);

    if (newState) {
      onEditorStateChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  /**
   * Handles bullet points tabulation
   */
  const onTab = e => _onTab(e);

  const _onTab = e => {
    const maxDepth = 4;
    onEditorStateChange(RichUtils.onTab(e, editorState, maxDepth));
  };

  const rootProps = {
    className: classes.root,
    'data-has-focus': isFocused,
    'data-is-disabled': disabled
  };

  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = 'draft-editor';
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (
      contentState
        .getBlockMap()
        .first()
        .getType() !== 'unstyled'
    ) {
      className += ' draftEditor-hidePlaceholder';
    }
  }

  return (
    <div
      className={className}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
    >
      <Toolbar
        editorState={editorState}
        onToggleBlockType={toggleBlockType}
        onToggleInlineType={toggleInlineStyle}
        disabled={disabled}
      />

      <div {...rootProps}>
        <Draft
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={onEditorStateChange}
          onTab={onTab}
          placeholder={placeholder}
          spellCheck
          readOnly={disabled}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default injectSheet(styles)(Editor);
