import React from 'react';
import { render } from '@testing-library/react';

import { TextField } from '.';

jest.mock('../../atoms/label', () => 'mock-label');
jest.mock('../../atoms/textInput', () => 'mock-text-input');

describe('TextField', () => {
  let props;

  beforeEach(() => {
    props = {
      label: 'I am a label',
      onValueChange: jest.fn(),
    };
  });

  it('renders full component', () => {
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="false"
        required="false"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="false"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });

  it('renders component with value', () => {
    props.value = 'Hello world';
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="true"
        required="false"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="false"
          type="text"
          value="Hello world"
        />
      </mock-label>
    `);
  });

  it('renders component with hidden label', () => {
    props.hideLabel = true;
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="true"
        inputhasvalue="false"
        required="false"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="false"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });

  it('renders component with a required field text', () => {
    props.required = true;
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="false"
        required="true"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="true"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });

  it('renders component disabled', () => {
    props.disabled = true;
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="false"
        required="false"
        text="I am a label"
      >
        <mock-text-input
          disabled="true"
          errormessage=""
          id="ftc_1"
          required="false"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });

  it('renders component with invalid status despite also having valid and caution status', () => {
    props.invalid = true;
    props.caution = true;
    props.valid = true;
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="false"
        required="false"
        status="invalid"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="false"
          status="invalid"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });

  it('renders component with caution status despite also having valid status', () => {
    props.caution = true;
    props.valid = true;
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="false"
        required="false"
        status="caution"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="false"
          status="caution"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });

  it('renders component with valid status', () => {
    props.valid = true;
    const { container } = render(<TextField {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <mock-label
        forid="ftc_1"
        hasfocus="false"
        hidelabel="false"
        inputhasvalue="false"
        required="false"
        status="valid"
        text="I am a label"
      >
        <mock-text-input
          disabled="false"
          errormessage=""
          id="ftc_1"
          required="false"
          status="valid"
          type="text"
          value=""
        />
      </mock-label>
    `);
  });
});
