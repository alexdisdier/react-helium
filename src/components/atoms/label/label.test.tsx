import React from 'react';
import { classesFromStyles } from '../../../utils/tests';

import { Label } from '.';

import styles from './label.style';

const classes = classesFromStyles(styles);

describe('Label', () => {
  let props;

  beforeEach(() => {
    props = {
      classes,
      text: 'Label text',
      forId: 'input_id_001',
      children: <div>A child</div>,
      required: false
    };
  });

  it('renders component', () => {
    const wrapper = <Label {...props}>Hello world</Label>;
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        classes={
          Object {
            "label": "class-from-style-label",
            "root": "class-from-style-root",
          }
        }
        forId="input_id_001"
        required={false}
        text="Label text"
      >
        Hello world
      </Label>
    `);
  });

  it('renders component with required data attribute', () => {
    props.required = true;
    const wrapper = <Label {...props}>Hello world</Label>;
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        classes={
          Object {
            "label": "class-from-style-label",
            "root": "class-from-style-root",
          }
        }
        forId="input_id_001"
        required={true}
        text="Label text"
      >
        Hello world
      </Label>
    `);
  });
});
