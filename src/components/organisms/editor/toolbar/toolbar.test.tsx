import React from 'react';
import { render } from '@testing-library/react';

import { Toolbar } from '.';

jest.mock('../../../../utils/editor', () => ({
  hasBlockType: jest.fn(),
  hasInlineStyle: jest.fn(),
  hasLink: jest.fn(),
}));

jest.mock('./editorButton', () => 'mock-editor-button');

jest.mock('../../../atoms/icons', () => ({
  IconBullets: 'mock-icon-bullets',
  IconFormatBold: 'mock-icon-format-bold',
  IconFormatItalic: 'mock-icon-format-italic',
  IconFormatNumbers: 'mock-icon-format-numbers',
  IconInsertLink: 'mock-icon-insert-link',
  IconInsertPhoto: 'mock-icon-insert-photo',
}));

describe('Toolbar', () => {
  let props;

  beforeEach(() => {
    props = {
      editorState: {},
      onToggleBlockType: jest.fn(),
      onToggleInlineType: jest.fn(),
      disabled: false,
      isLinkEditorButtonActive: false,
    };
  });

  it('renders all EditorButtons disabled', () => {
    props.disabled = true;

    const { container } = render(<Toolbar {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-is-disabled="true"
      >
        <mock-editor-button
          buttontype="header-one"
          disabled="true"
        />
        <mock-editor-button
          buttontype="BOLD"
          disabled="true"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="ITALIC"
          disabled="true"
          icon="[object Object]"
        />
        <mock-editor-button
          active="false"
          buttontype="LINK"
          disabled="true"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="ordered-list-item"
          disabled="true"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="unordered-list-item"
          disabled="true"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="atomic"
          disabled="true"
          icon="[object Object]"
        />
      </div>
    `);
  });

  it('renders full component', () => {
    const { container } = render(<Toolbar {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-is-disabled="false"
      >
        <mock-editor-button
          buttontype="header-one"
          disabled="false"
        />
        <mock-editor-button
          buttontype="BOLD"
          disabled="false"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="ITALIC"
          disabled="false"
          icon="[object Object]"
        />
        <mock-editor-button
          active="false"
          buttontype="LINK"
          disabled="false"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="ordered-list-item"
          disabled="false"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="unordered-list-item"
          disabled="false"
          icon="[object Object]"
        />
        <mock-editor-button
          buttontype="atomic"
          disabled="false"
          icon="[object Object]"
        />
      </div>
    `);
  });
});
