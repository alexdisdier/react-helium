import React, { useState } from 'react';
import { EditorState } from 'draft-js';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Editor from '.';

import { Button } from '../../atoms';

import HtmlDisplay from '../htmlDisplay';

import README from './README.md';

interface Props {
  editorState?: EditorState;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e) => void;
}

const buttonWrapper = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 10,
  marginBottom: 10
};

const ControlledEditor: React.FC<Props> = ({ ...otherProps }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [show, setShow] = useState(false);

  const onChange = state => {
    setEditorState(state);
  };

  const toggle = () => {
    setShow(!show);
  };

  const hidden = {
    display: show ? 'block' : 'none'
  };

  return (
    <>
      <Editor editorState={editorState} onChange={onChange} {...otherProps} />
      <div style={buttonWrapper}>
        <Button primary onClick={toggle}>
          {show ? 'hide' : 'Show'} output
        </Button>
      </div>

      <div style={hidden}>
        <div>Output in html markup:</div>
        <HtmlDisplay htmlData={editorState} />
      </div>
    </>
  );
};

const stories = storiesOf('Organisms/Rich Text Editor', module);
stories.addParameters({
  readme: {
    content: README
  }
});

stories.addDecorator(withKnobs);
stories.add('default', () => {
  return (
    <ControlledEditor
      placeholder={text('Placeholder', 'Let your imagination run wild')}
      disabled={boolean('Disabled', false)}
    />
  );
});
