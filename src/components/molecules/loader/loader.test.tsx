import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Loader } from '.';

describe('Loader', () => {
  let props;

  beforeEach(() => {
    props = {
      text: '',
      size: 32,
      slow: false,
      moderate: false,
      fast: false,
      repeatCount: 'indefinite',
      overlay: false,
      spinnerFill: true,
      spinner: false,
      barCenter: false,
      barTop: false,
      dots: false,
    };
  });

  it('renders a default Loader with text', () => {
    props.text = 'loading';
    const { container } = render(<Loader {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-is-overlay="false"
      >
        <svg
          aria-hidden="true"
          class="root"
          fill-rule="evenodd"
          style="width: 32px; height: 32px;"
          viewBox="0 0 40 40"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          y="0px"
        >
          <path
            d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
            opacity="0.2"
          />
          <path
            d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"
          >
            <animatetransform
              attributeName="transform"
              attributeType="xml"
              dur="1.5s"
              from="0 20 20"
              repeatCount="indefinite"
              to="360 20 20"
              type="rotate"
            />
          </path>
        </svg>
        <span
          class="text"
        >
          loading
        </span>
      </div>
    `);
  });

  it('renders a fast Loader with a spinner icon', () => {
    props.spinnerFill = false;
    props.spinner = true;
    props.fast = true;

    const { container } = render(<Loader {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-is-overlay="false"
      >
        <svg
          aria-hidden="true"
          class="root"
          fill-rule="evenodd"
          style="width: 32px; height: 32px;"
          viewBox="0 0 50 50"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          y="0px"
        >
          <path
            d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          >
            <animatetransform
              attributeName="transform"
              attributeType="xml"
              dur="0.5s"
              from="0 25 25"
              repeatCount="indefinite"
              to="360 25 25"
              type="rotate"
            />
          </path>
        </svg>
        <span
          class="text"
        />
      </div>
    `);
  });

  it('renders a slow Loader with bars in the center', () => {
    props.spinnerFill = false;
    props.barCenter = true;
    props.slow = true;

    const { container } = render(<Loader {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-is-overlay="false"
      >
        <svg
          aria-hidden="true"
          class="root"
          fill-rule="evenodd"
          style="width: 32px; height: 32px;"
          viewBox="0 0 24 30"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          y="0px"
        >
          <rect
            height="10"
            opacity="0.2"
            width="4"
            x="0"
            y="10"
          >
            <animate
              attributeName="opacity"
              attributeType="XML"
              begin="0s"
              dur="3s"
              repeatCount="indefinite"
              values="0.2; 1; .2"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              begin="0s"
              dur="3s"
              repeatCount="indefinite"
              values="10; 20; 10"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              begin="0s"
              dur="3s"
              repeatCount="indefinite"
              values="10; 5; 10"
            />
          </rect>
          <rect
            height="10"
            opacity="0.2"
            width="4"
            x="8"
            y="10"
          >
            <animate
              attributeName="opacity"
              attributeType="XML"
              begin="0.15s"
              dur="3s"
              repeatCount="indefinite"
              values="0.2; 1; .2"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              begin="0.15s"
              dur="3s"
              repeatCount="indefinite"
              values="10; 20; 10"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              begin="0.15s"
              dur="3s"
              repeatCount="indefinite"
              values="10; 5; 10"
            />
          </rect>
          <rect
            height="10"
            opacity="0.2"
            width="4"
            x="16"
            y="10"
          >
            <animate
              attributeName="opacity"
              attributeType="XML"
              begin="0.3s"
              dur="3s"
              repeatCount="indefinite"
              values="0.2; 1; .2"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              begin="0.3s"
              dur="3s"
              repeatCount="indefinite"
              values="10; 20; 10"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              begin="0.3s"
              dur="3s"
              repeatCount="indefinite"
              values="10; 5; 10"
            />
          </rect>
        </svg>
        <span
          class="text"
        />
      </div>
    `);
  });

  it('renders a Loader with bars at the top', () => {
    props.spinnerFill = false;
    props.barTop = true;
    const { container } = render(<Loader {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root"
        data-is-overlay="false"
      >
        <svg
          aria-hidden="true"
          class="root"
          fill-rule="evenodd"
          style="width: 32px; height: 32px;"
          viewBox="0 0 24 24"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          y="0px"
        >
          <rect
            height="7"
            width="4"
            x="0"
            y="0"
          >
            <animatetransform
              attributeName="transform"
              attributeType="xml"
              begin="0s"
              dur="1.5s"
              repeatCount="indefinite"
              type="scale"
              values="1,1; 1,3; 1,1"
            />
          </rect>
          <rect
            height="7"
            width="4"
            x="10"
            y="0"
          >
            <animatetransform
              attributeName="transform"
              attributeType="xml"
              begin="0.2s"
              dur="1.5s"
              repeatCount="indefinite"
              type="scale"
              values="1,1; 1,3; 1,1"
            />
          </rect>
          <rect
            height="7"
            width="4"
            x="20"
            y="0"
          >
            <animatetransform
              attributeName="transform"
              attributeType="xml"
              begin="0.4s"
              dur="1.5s"
              repeatCount="indefinite"
              type="scale"
              values="1,1; 1,3; 1,1"
            />
          </rect>
        </svg>
        <span
          class="text"
        />
      </div>
    `);
  });
});
