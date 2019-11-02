import React, { useState, useRef, useEffect } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import {
  Editor as Draft,
  EditorState,
  RichUtils,
  DraftHandleValue
} from 'draft-js';
import './editor.css';

import {
  getBlockStyle,
  getHTMLString,
  styleCode,
  myKeyBindingFn
} from '../../../utils/editor';

import { Button } from '../../atoms';

import { Toolbar } from '../../molecules';

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

  const editorRef: any | null = useRef(null);

  const handleFocus = () => {
    editorRef.current.focus();
    setFocused(true);
  };

  useEffect(() => {
    // const editorId = document.getElementById('draft-js');
    // const childDiv = editorId!.getElementsByTagName('div')[0];
    // const requiredDiv = childDiv.getElementsByTagName('div')[1];
    // requiredDiv.className = 'Editor--placeholder';

    handleFocus();
  }, []);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onChange(getHTMLString(editorState));
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
          disabled={disabled}
        />

        <div id="draft-js" {...rootProps}>
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
