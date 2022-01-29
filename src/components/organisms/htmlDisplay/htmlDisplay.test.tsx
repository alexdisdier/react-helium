import React from 'react';
import { render } from '@testing-library/react';

import { HtmlDisplay } from '.';

describe('Link', () => {
  let props;

  beforeEach(() => {
    props = {
      htmlData:
        '<button type="submit" onclick="iAmStealingYourData()">I am a malicious button</button>',
    };
  });

  it('renders full component without the onclick event', () => {
    const { container } = render(<HtmlDisplay {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="readOnly"
      >
        <button
          type="submit"
        >
          I am a malicious button
        </button>
      </div>
    `);
  });
});
