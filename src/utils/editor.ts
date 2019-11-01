import { EditorState, convertToRaw } from 'draft-js';

import draftToHtml from 'draftjs-to-html';

type STYLE = {
  label: string;
  style: string;
};

export const uploadImageCallBack = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve({ data: { link: e.target!.result } });
    reader.onerror = e => reject(e);
    reader.readAsDataURL(file);
  });

export const getHTMLString = (editorState: EditorState): string =>
  draftToHtml(convertToRaw(editorState.getCurrentContent()));

export const getBlockStyle = block => {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return '';
  }
};

export const BLOCK_TYPES: STYLE[] = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' }
];

export const INLINE_STYLES: STYLE[] = [
  { label: 'B', style: 'BOLD' },
  { label: 'I', style: 'ITALIC' },
  { label: 'U', style: 'UNDERLINE' }
];
