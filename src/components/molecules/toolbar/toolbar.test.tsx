import React from 'react';
import { shallow } from 'enzyme';
import { classesFromStyles } from '../../../utils/tests';

import { Toolbar } from '.';

import styles from './toolbar.style';

const classes = classesFromStyles(styles);

jest.mock('../../../utils/editor', () => ({
  hasBlockType: jest.fn(),
  hasInlineStyle: jest.fn(),
  hasLink: jest.fn()
}));

jest.mock('../../atoms/editorButton', () => 'EditorButton');

describe('Toolbar', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      editorState: {},
      onToggleBlockType: jest.fn(),
      onToggleInlineType: jest.fn(),
      disabled: false,
      isLinkEditorButtonActive: false
    };
  });

  it('renders all EditorButtons disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<Toolbar {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="class-from-style-root"
  data-is-disabled={true}
>
  <Button
    buttonType="header-one"
    disabled={true}
    onClick={[MockFunction]}
  />
  <Button
    buttonType="BOLD"
    disabled={true}
    onClick={[MockFunction]}
  />
  <Button
    active={false}
    buttonType="LINK"
    disabled={true}
    icon={<UiconLink />}
    promptForLink={[Function]}
    removeLink={[Function]}
  />
  <Button
    buttonType="unordered-list-item"
    disabled={true}
    icon={<UiconBullets />}
    onClick={[MockFunction]}
  />
</div>
`);
  });

  it('renders full component', () => {
    const wrapper = shallow(<Toolbar {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="class-from-style-root"
  data-is-disabled={false}
>
  <Button
    buttonType="header-one"
    disabled={false}
    onClick={[MockFunction]}
  />
  <Button
    buttonType="BOLD"
    disabled={false}
    onClick={[MockFunction]}
  />
  <Button
    active={false}
    buttonType="LINK"
    disabled={false}
    icon={<UiconLink />}
    promptForLink={[Function]}
    removeLink={[Function]}
  />
  <Button
    buttonType="unordered-list-item"
    disabled={false}
    icon={<UiconBullets />}
    onClick={[MockFunction]}
  />
</div>
`);
  });
});
