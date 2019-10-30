import React, { useState } from 'react';
import { EditorState } from 'draft-js';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Editor from '.';

// import EditorReadme from './editor.README.md';

type Props = {
  id: string;
} & EditorState;

export const ControlledEditor: React.FC<Props> = ({ id, ...otherProps }) => {
  const [editorState, setEditorState] = useState('');
  return (
    <Editor
      editorState={editorState}
      onChange={e => setEditorState(e.target.value)}
      {...otherProps}
    />
  );
};

const stories = storiesOf('Editor', module);
// stories.addParameters({
//   readme: {
//     content: EditorReadme
//   }
// });

stories.addDecorator(withKnobs);
stories.add('default', () => {
  return (
    <ControlledEditor
      id={text('Id', '1')}
      onChange={action('handleChange', 'change')}
    />
  );
});
