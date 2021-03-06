import React from 'react';
import { shallow } from 'enzyme';
// import { classesFromStyles } from '../../../utils/tests';

import { Label } from '.';

// import useStyles from './label.style';

// const classes = classesFromStyles(styles);

describe('Label', () => {
  let props;

  beforeEach(() => {
    props = {
      // classes,
      text: 'Label text',
      forId: 'input_id_001',
      children: <div>A child</div>,
      required: false,
      hideLabel: false
    };
  });

  it('renders component', () => {
    const wrapper = shallow(<Label {...props}>Hello world</Label>);
    expect(wrapper).toMatchInlineSnapshot(`
      <label
        className="root-0-2-1"
        data-input-is-required={false}
        htmlFor="input_id_001"
      >
        <div
          className="label-0-2-2"
        >
          <span>
            Label text
          </span>
        </div>
        Hello world
      </label>
    `);
  });

  it('renders component with required data attribute', () => {
    props.required = true;
    const wrapper = shallow(<Label {...props}>Hello world</Label>);
    expect(wrapper).toMatchInlineSnapshot(`
      <label
        className="root-0-2-1"
        data-input-is-required={true}
        htmlFor="input_id_001"
      >
        <div
          className="label-0-2-2"
        >
          <span>
            Label text
          </span>
        </div>
        Hello world
      </label>
    `);
  });

  it('hides the label', () => {
    props.hideLabel = true;
    const wrapper = shallow(<Label {...props}>Hello world</Label>);
    expect(wrapper).toMatchInlineSnapshot(`
      <label
        className="root-0-2-1"
        data-input-is-required={false}
        htmlFor="input_id_001"
      >
        Hello world
      </label>
    `);
  });
});
