import React, { useState, useRef, useEffect } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import {
  CompositeDecorator,
  Editor as Draft,
  EditorState,
  RichUtils,
  DraftHandleValue // to delete
} from 'draft-js';

import './editor.css'; // to delete

import {
  findLinkEntities,
  getBlockStyle,
  getHTMLString
} from '../../../utils/editor';

import { Button, EditorLink, EditorUrlInput } from '../../atoms';

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

export const Editor: React.SFC<Props> = ({
  classes,
  placeholder = '',
  onChange,
  disabled = false
}) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty(decorator)
  );
  const [isFocused, setFocused] = useState(false);
  const [isLinkButtonActive, setLinkButtonActive] = useState(false);
  const [output, setOutput] = useState('');
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlValue, setUrlValue] = useState('');

  const editorRef: any | null = useRef(null);

  const handleFocus = () => {
    editorRef.current.focus();
    setFocused(true);
  };

  useEffect(() => {
    handleFocus();
  }, []);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onChange(getHTMLString(editorState));
  };

  /**
   * Handling urlInput and link button components
   */
  const onUrlInputChange = e => setUrlValue(e.target.value);

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
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    setEditorState(
      RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey)
    );
    setShowURLInput(false);
    setLinkButtonActive(false);
  };

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
   * Handles any key commands such as italics, bold, ...
   * NEED TO ADD RESTRICTION TYPING COMMANDS
   */
  const handleKeyCommand = (cmd: string): DraftHandleValue => {
    /**
     * NOT WORKING: Add Tabulation to bullet point (max depth)
     */
    const newState = RichUtils.handleKeyCommand(editorState, cmd);
    if (cmd === 'myeditor-tab') {
      return 'handled';
    }

    /**
     * Standard key command handling
     */
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

  /**
   * Handles saving (potential localstorage)
   */
  const save = () => {
    const content = editorState.getCurrentContent().getPlainText();
    setOutput(content);
  };

  /**
   * Handles clearing the rich editor content (potential localstorage)
   */
  const clear = () => setEditorState(EditorState.createEmpty());

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

        <div id="draft-js" {...rootProps}>
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
          confirmLink={confirmLink}
          onLinkInputKeyDown={onLinkInputKeyDown}
          urlInputChange={onUrlInputChange}
          value={urlValue}
          handleCollapse={handleCollapse}
        />
      )}
      <div className={classes.buttonWrapper}>
        <div className={classes.button}>
          <Button secondary onClick={clear}>
            Clear Content
          </Button>
        </div>
        <Button primary onClick={save}>
          Save
        </Button>
      </div>

      <div>Output: {output}</div>
    </>
  );
};

export default injectSheet(styles)(Editor);
