import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { ClassNameMap } from 'react-jss';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Editor from '.';

import EditorReadme from './editor.README.md';

interface Props {
  classes: ClassNameMap<string>;
  editorState: EditorState;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e) => void;
}

const ControlledEditor: React.FC<Props> = ({ ...otherProps }) => {
  const [editorState, setEditorState] = useState('');
  return (
    <Editor
      editorState={editorState}
      onChange={e => setEditorState(e.target.value)}
      {...otherProps}
    />
  );
};

const stories = storiesOf('Rich Text Editor', module);
stories.addParameters({
  readme: {
    content: EditorReadme
  }
});

stories.addDecorator(withKnobs);
stories.add('default', () => {
  return (
    <ControlledEditor
      placeholder={text('Placeholder', 'Let your imagination run wild')}
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    />
  );
});
