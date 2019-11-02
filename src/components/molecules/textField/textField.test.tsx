import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '.';

jest.mock('../../atoms/label', () => 'Label');
jest.mock('../../atoms/textInput', () => 'TextInput');

describe('TextField', () => {
  let props;

  beforeEach(() => {
    props = {
      label: 'I am a label',
      onValueChange: jest.fn()
    };
  });

  it('renders full component', () => {
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={false}
        required={false}
        status={null}
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status={null}
          type="text"
          value=""
        />
      </Label>
    `);
  });

  it('renders component with value', () => {
    props.value = 'Hello world';
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={true}
        required={false}
        status={null}
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status={null}
          type="text"
          value="Hello world"
        />
      </Label>
    `);
  });

  it('renders component with hidden label', () => {
    props.hideLabel = true;
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={true}
        inputHasValue={false}
        required={false}
        status={null}
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status={null}
          type="text"
          value=""
        />
      </Label>
    `);
  });

  it('renders component with a required field text', () => {
    props.required = true;
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={false}
        required={true}
        status={null}
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={true}
          status={null}
          type="text"
          value=""
        />
      </Label>
    `);
  });

  it('renders component disabled', () => {
    props.disabled = true;
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={false}
        required={false}
        status={null}
        text="I am a label"
      >
        <TextInput
          disabled={true}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status={null}
          type="text"
          value=""
        />
      </Label>
    `);
  });

  it('renders component with invalid status despite also having valid and caution status', () => {
    props.invalid = true;
    props.caution = true;
    props.valid = true;
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={false}
        required={false}
        status="invalid"
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status="invalid"
          type="text"
          value=""
        />
      </Label>
    `);
  });

  it('renders component with caution status despite also having valid status', () => {
    props.caution = true;
    props.valid = true;
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={false}
        required={false}
        status="caution"
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status="caution"
          type="text"
          value=""
        />
      </Label>
    `);
  });

  it('renders component with valid status', () => {
    props.valid = true;
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Label
        forId="ftc_1"
        hasFocus={false}
        hideLabel={false}
        inputHasValue={false}
        required={false}
        status="valid"
        text="I am a label"
      >
        <TextInput
          disabled={false}
          handleBlur={[Function]}
          handleChange={[Function]}
          handleFocus={[Function]}
          id="ftc_1"
          inputRef={[Function]}
          required={false}
          status="valid"
          type="text"
          value=""
        />
      </Label>
    `);
  });
});
