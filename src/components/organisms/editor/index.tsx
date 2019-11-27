import React, { useState, useRef } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import {
  CompositeDecorator,
  Editor as Draft,
  EditorState,
  RichUtils
} from 'draft-js';

import {
  findLinkEntities,
  getBlockStyle,
  getHTMLString,
  isValidURL
} from '../../../utils/editor';

import { EditorLink, EditorUrlInput } from '../../atoms';

import { Toolbar } from '../../molecules';

import styles from './editor.style';

interface Props {
  classes: ClassNameMap<string>;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e) => void;
}

/**
 * We need to add a decorator to add our own style to links
 */
const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: EditorLink
  }
]);

export const Editor: React.FC<Props> = ({
  classes,
  placeholder = '',
  onChange,
  disabled = false
}) => {
  // Initiating the EditorState with link decorator
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty(decorator)
  );

  // Focus applied to the editor and control panel buttons.
  const [isFocused, setFocused] = useState<boolean>(false);

  // Url State
  const [showURLInput, setShowURLInput] = useState<boolean>(false);
  const [urlValue, setUrlValue] = useState<string>('');
  const [validUrl, setValidUrl] = useState<boolean>(true);

  const [isLinkButtonActive, setLinkButtonActive] = useState<boolean>(false);

  const editorRef: any | null = useRef(null);

  const handleFocus = () => {
    editorRef.current.focus();
    setFocused(true);
  };

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onChange(getHTMLString(editorState));
  };

  /**
   * Handling urlInput and link button components
   */
  const onUrlInputChange = e => {
    setUrlValue(e.target.value);
    if (isValidURL(e.target.value)) {
      setValidUrl(true);
    } else {
      setValidUrl(false);
    }
  };

  const promptForLink = e => {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setShowURLInput(true);
      setUrlValue('');
    }
    setLinkButtonActive(true);
  };

  const confirmLink = e => {
    if (validUrl) {
      e.preventDefault();
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'LINK',
        'MUTABLE',
        { target: '_blank', url: urlValue }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      setEditorState(
        RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey)
      );
      setShowURLInput(false);
      setLinkButtonActive(false);
    } else {
      console.error('not a valid url');
    }
  };

  // On return key action
  const onLinkInputKeyDown = e => {
    if (e.which === 13) {
      confirmLink(e);
    }
  };

  const removeLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    }
    setLinkButtonActive(false);
  };

  const handleCollapse = () => {
    setShowURLInput(false);
    setLinkButtonActive(false);
  };

  /**
   * e.g: Handles block style such as header, bullet points
   */
  const toggleBlockType = (blockType: string) => {
    onEditorStateChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  /**
   * e.g: Handles inline styles such as bold
   */
  const toggleInlineStyle = (inlineStyle: string) => {
    onEditorStateChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  /**
   * Handles any inline styles **key commands** such as italics, bold, ...
   */
  const handleKeyCommand = cmd => {
    const newState = RichUtils.handleKeyCommand(editorState, cmd);

    if (newState) {
      onEditorStateChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  /**
   * If the user changes block type before entering any text (e.g unordered-list),
   * we hide the placeholder.
   */
  let hidePlaceholder = false;
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (
      contentState
        .getBlockMap()
        .first()
        .getType() !== 'unstyled'
    )
      hidePlaceholder = true;
  }

  const rootProps = {
    className: classes.root,
    'data-has-focus': isFocused || showURLInput,
    'data-is-disabled': disabled,
    'data-is-placeholder-hidden': hidePlaceholder
  };

  return (
    <>
      <div
        onClick={handleFocus}
        onBlur={() => {
          setFocused(false);
        }}
      >
        <Toolbar
          editorState={editorState}
          onToggleBlockType={toggleBlockType}
          onToggleInlineType={toggleInlineStyle}
          promptForLink={promptForLink}
          removeLink={removeLink}
          disabled={disabled}
          isLinkButtonActive={isLinkButtonActive}
        />

        <div {...rootProps}>
          <Draft
            blockStyleFn={getBlockStyle}
            editorState={editorState}
            onChange={onEditorStateChange}
            placeholder={placeholder}
            spellCheck
            readOnly={disabled}
            handleKeyCommand={handleKeyCommand}
            ref={editorRef}
          />
        </div>
      </div>
      {showURLInput && (
        <EditorUrlInput
          onLinkInputKeyDown={onLinkInputKeyDown}
          urlInputChange={onUrlInputChange}
          value={urlValue}
          handleCollapse={handleCollapse}
          validUrl={validUrl}
        />
      )}
    </>
  );
};

export default injectSheet(styles)(Editor);
