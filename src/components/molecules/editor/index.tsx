import React, { useState } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { Editor as DraftEditor, EditorState, RichUtils } from 'draft-js';

import { getHTMLString, uploadImageCallBack } from '../../../utils/editor';

import EditorButton from '../../atoms/editorButton';

import styles from './editor.style';

interface Props {
  classes: ClassNameMap<string>;
  id: string;
  onChange: (e) => void;
  commands?: string[];
}

export const Editor: React.FC<Props> = ({
  classes,
  id,
  commands,
  onChange
}) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onChange(getHTMLString(editorState));
  };

  const handleKeyCommand = cmd => {
    const newState = RichUtils.handleKeyCommand(editorState, cmd);
    if (newState) {
      onEditorStateChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onItalicClick = () => {
    onEditorStateChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onUnderlineClick = () => {
    onEditorStateChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const onBoldClick = () => {
    onEditorStateChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  return (
    <div id={id}>
      <div className={classes.controlsWrapper}>
        <div className={classes.controlsButtonWrapper}>
          <EditorButton onClick={onItalicClick}>
            <em>I</em>
          </EditorButton>
        </div>
        <div className={classes.controlsButtonWrapper}>
          <EditorButton onClick={onUnderlineClick}>
            <em>U</em>
          </EditorButton>
        </div>
        <div className={classes.controlsButtonWrapper}>
          <EditorButton onClick={onBoldClick}>
            <em>B</em>
          </EditorButton>
        </div>
      </div>

      <div className={classes.root}>
        <DraftEditor
          editorState={editorState}
          onChange={onEditorStateChange}
          handleKeyCommand={handleKeyCommand}
          toolbar={{
            image: {
              uploadCallback: uploadImageCallBack,
              previewImage: true
            }
          }}
        />
      </div>
    </div>
  );
};

export default injectSheet(styles)(Editor);
