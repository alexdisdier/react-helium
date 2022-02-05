import React from 'react';
import { compareToSnapshot, classesFromStyles } from '../../utils/tests';

import { Smartlabel } from './smartlabel';

import {
  STATUS_INVALID,
  STATUS_CAUTION,
  STATUS_VALID,
  STATUS_MODIFIED
} from '../constants/status';

import styles from './smartlabel.style';

describe('Smartlabel', () => {
  const classes = classesFromStyles(styles);
  let props;

  beforeEach(() => {
    props = {
      classes,
      text: 'Label text',
      forId: 'input_id_001',
      inputHasFocus: false,
      inputHasValue: false,
      required: false,
      status: null,
      maxWidth: false
    };
  });

  it('renders full component', () => {
    compareToSnapshot(<Smartlabel {...props}>Hello world</Smartlabel>);
  });

  it('renders full component with true data attributes', () => {
    props.inputHasFocus = true;
    props.inputHasValue = true;
    props.required = true;
    props.maxWidth = true;
    compareToSnapshot(<Smartlabel {...props}>Hello world</Smartlabel>);
  });

  it.each([
    ['valid', STATUS_VALID],
    ['cautious', STATUS_CAUTION],
    ['invalid', STATUS_INVALID],
    ['modified', STATUS_MODIFIED]
  ])('renders full component with input %s', (name, STATUS) => {
    props.status = STATUS;
    compareToSnapshot(<Smartlabel {...props}>{name}</Smartlabel>);
  });
});
