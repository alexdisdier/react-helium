import { EditorState, convertToRaw } from 'draft-js';

import draftToHtml from 'draftjs-to-html';

export const uploadImageCallBack = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve({ data: { link: e.target!.result } });
    reader.onerror = e => reject(e);
    reader.readAsDataURL(file);
  });

export const getHTMLString = (editorState: EditorState): string =>
  draftToHtml(convertToRaw(editorState.getCurrentContent()));
