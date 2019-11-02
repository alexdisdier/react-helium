import React, { useState, useRef } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import {
  Editor as Draft,
  EditorState,
  RichUtils,
  DraftHandleValue
} from 'draft-js';

import {
  getBlockStyle,
  getHTMLString,
  styleCode,
  myKeyBindingFn
} from '../../../utils/editor';

import Button from '../../atoms/button';

import Toolbar from './toolbar';

import styles from './editor.style';

interface Props {
  classes: ClassNameMap<string>;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e) => void;
}

export const Editor: React.SFC<Props> = ({
  classes,
  placeholder = '',
  disabled = false,
  onChange
}) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [isFocused, setFocused] = useState(false);
  const [output, setOutput] = useState('');
  // const [commandsActive, setCommandsActive] = useState(['bold', 'italic']);

  const editorRef: any | null = useRef(null);

  const handleFocus = () => {
    setFocused(true);
  };

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
    // Modifier.removeInlineStyle(contentState, selection, color)
  };

  /**
   * Handles any key commands such as italics, bold, ...
   * NEED TO ADD RESTRICTION TYPING COMMANDS
   */
  const handleKeyCommand = (cmd: string): DraftHandleValue => {
    /**
     * Add class active to control button when command key clicked.
     */
    // if (commandsActive.includes(cmd)) {
    //   const newCommandsActive = commandsActive.filter(value => {
    //     return value !== cmd;
    //   });
    //   setCommandsActive(newCommandsActive);
    // } else {
    //   commandsActive.push(cmd);
    // }

    /**
     * Add Tabulation to bullet point (max depth)
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
    'data-has-focus': isFocused,
    'data-is-disabled': disabled
  };

  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className;
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (
      contentState
        .getBlockMap()
        .first()
        .getType() !== 'unstyled'
    ) {
      className += classes.hidePlaceholder;
    }
  }

  return (
    <>
      <div
        className={className}
        onClick={handleFocus}
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
            customStyleMap={styleCode}
            editorState={editorState}
            keyBindingFn={myKeyBindingFn}
            onChange={onEditorStateChange}
            placeholder={placeholder}
            spellCheck
            readOnly={disabled}
            handleKeyCommand={handleKeyCommand}
            ref={editorRef}
          />
        </div>
      </div>
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
