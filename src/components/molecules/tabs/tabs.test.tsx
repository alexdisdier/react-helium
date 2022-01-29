import React from "react";
import { render } from "@testing-library/react";

import { Tabs } from ".";

describe("Tabs", () => {
  let props;

  // Spy and mock useState hook
  const setActiveTab = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((activeTab) => [activeTab, setActiveTab]);

  beforeEach(() => {
    props = {
      tabs: [
        {
          label: "tab1",
          component: (
            <div>
              <p>
                To put or arrange in a tabular, systematic, or condensed form;
                formulate tabularly.
              </p>
            </div>
          ),
        },
        {
          label: "tab2",
          component: (
            <div>
              <p>To operate the tab key on a typewriter; to tab.</p>
            </div>
          ),
        },
      ],
      centered: false,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Actions", () => {
    it("switches tab", () => {
      setActiveTab("tab2");

      expect(setActiveTab).toHaveBeenCalled();
      expect(setActiveTab).toHaveBeenCalledWith("tab2");
    });

    it("centers the tabulation content", () => {
      props.centered = true;
      const { container } = render(<Tabs {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <ol
          class="root"
        >
          <div
            class="tabsWrapper"
          >
            <div>
              <li
                class="root"
                data-is-active="true"
              >
                tab1
              </li>
            </div>
            <div>
              <li
                class="root"
                data-is-active="false"
              >
                tab2
              </li>
            </div>
          </div>
          <div
            class="slider"
            style="left: 0px; width: 0px;"
          />
        </ol>
      `);
    });
  });

  it("render the full component", () => {
    const { container } = render(<Tabs {...props} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <ol
        class="root"
      >
        <div
          class="tabsWrapper"
        >
          <div>
            <li
              class="root"
              data-is-active="true"
            >
              tab1
            </li>
          </div>
          <div>
            <li
              class="root"
              data-is-active="false"
            >
              tab2
            </li>
          </div>
        </div>
        <div
          class="slider"
          style="left: 0px; width: 0px;"
        />
      </ol>
    `);
  });
});
