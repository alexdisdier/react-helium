import React from 'react';

import {
  EditorState,
  convertToRaw,
  getDefaultKeyBinding,
  KeyBindingUtil
} from 'draft-js';

import draftToHtml from 'draftjs-to-html';

type STYLE = {
  label: string;
  style: string;
  icon?: React.ReactNode;
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

/**
 * source: https://draftjs.org/docs/advanced-topics-block-styling
 */
export const getBlockStyle = block => {
  switch (block.getType()) {
    case 'header-one':
      return `Editor--h1`;
    case 'header-two':
      return `Editor--h2`;
    case 'unordered-list-item':
      return `Editor--unorderedList`; // classes
    case 'ordered-list-item':
      return `Editor--orderedList`;
    default:
      return '';
  }
};

const { hasCommandModifier } = KeyBindingUtil;

export const myKeyBindingFn = e => {
  if (e.keyCode === 9 /* `Tab` key */ && hasCommandModifier(e)) {
    return 'myeditor-tab';
  }
  return getDefaultKeyBinding(e);
};

export const isActive = (editorState, style) => {
  // currentStyle is a map of currently applied style to selected text
  const currentStyle = editorState.getCurrentInlineStyle();
  // check if current style is among the style map.
  return currentStyle.has(style);
};

// Custom overrides for "code" style.
export const styleCode = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

export const STYLE = [
  'header-one',
  'header-two',
  'unordered-list-item',
  'ordered-list-item',
  'BOLD',
  'ITALIC',
  'UNDERLINE'
];

export const BLOCK_TYPES: STYLE[] = [
  { label: 'H1', style: 'header-one', icon: <span>H1</span> },
  { label: 'H2', style: 'header-two', icon: <span>H2</span> },
  { label: 'UL', style: 'unordered-list-item', icon: <span>UL</span> },
  { label: 'OL', style: 'ordered-list-item', icon: <span>OL</span> }
];

export const INLINE_STYLES: STYLE[] = [
  { label: 'B', style: 'BOLD', icon: <span>B</span> },
  { label: 'I', style: 'ITALIC', icon: <span>I</span> },
  { label: 'U', style: 'UNDERLINE', icon: <span>U</span> }
];
