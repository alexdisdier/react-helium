import React from 'react';
import { EditorState, Entity, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

type STYLE = {
  label: string;
  style: string;
  icon?: React.ReactNode;
};

/**
 * Allows us to get html to display the editor output
 * We use stateToHTML, instead of draftToHtml so we keep
 * the attribute target and open links in a new tab.
 * We'll also keep our <br> tags.
 */
export const getHTMLString = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const options = {
    entityStyleFn: entity => {
      const data = entity.getData();
      let config;

      if (entity.get('type') === 'LINK')
        config = {
          element: 'a',
          attributes: {
            href: data.url,
            target: data.target
          }
        };

      return config;
    }
  };
  return stateToHTML(contentState, options);
};

/**
 * Renaming classes so we can apply our own styling
 * This is passed inside the prop blockStyleFn
 * source: https://draftjs.org/docs/advanced-topics-block-styling
 */
export const getBlockStyle = block => {
  switch (block.getType()) {
    case 'header-one': // looking for an element with the type of
      return `h1`; // name a style class for this element
    case 'header-two':
      return `h2`;
    case 'unordered-list-item':
      return `ul`;
    case 'ordered-list-item':
      return `ol`;
    default:
      return '';
  }
};

/**
 * This Function is used in connection with the decorator
 * passed to the new editorState object (./richEditor).
 * This enables us to use our own Link component (./controlPanel/link)
 */
export const findLinkEntities = (contentBlock, callback) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && Entity.get(entityKey).getType() === 'LINK';
  }, callback);
};

/**
 * This allows us to know which inline style is active
 * to toggle the corresponding button (e.g bold).
 */
export const hasInlineStyle = (editorState, style) => {
  // currentStyle is a map of currently applied style to selected text
  const currentStyle = editorState.getCurrentInlineStyle();
  // check if current style is among the style map.
  return currentStyle.has(style);
};

/**
 * This allows us to know which blocktype is active
 * to toggle the corresponding button (e.g h1).
 */
export const hasBlockType = (editorState, type) => {
  const selection = editorState.getSelection();
  return (
    editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType() === type
  );
};

/**
 * This allows us to know if the block selection has a link
 */
export const hasLink = editorState =>
  RichUtils.currentBlockContainsLink(editorState);

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

/**
 * An array to map the style when applying onClick on a controlPanel button
 * The LINK button is handled separately
 */
export const STYLE = ['header-one', 'unordered-list-item', 'BOLD'];

export const isValidURL = str => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
};

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
