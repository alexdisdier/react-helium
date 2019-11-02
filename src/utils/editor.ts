import {
  EditorState,
  convertToRaw
  // getDefaultKeyBinding,
  // KeyBindingUtil
} from 'draft-js';

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

// const { hasCommandModifier } = KeyBindingUtil;

// export const myKeyBindingFn = (e): string => {
//   if (e.key === 'Tab' /* `S` key */ && hasCommandModifier(e)) {
//     console.log('tab');
//     return 'myeditor-save';
//   }
//   return getDefaultKeyBinding(e);
// };

// Custom overrides for "code" style.
export const styleCode = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
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
