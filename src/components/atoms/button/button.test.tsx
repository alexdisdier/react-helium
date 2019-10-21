import React from "react";
import { shallow } from "enzyme";

import { ClassNameMap } from "react-jss";

import { Button } from "../button";

type Props = {
  classes: ClassNameMap<string>;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

describe("Button", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      classes: {},
      children: <div>A child</div>,
      onClick: jest.fn()
    };
  });

  it("renders a button", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <button
        onClick={[MockFunction]}
      >
        <div>
          A child
        </div>
      </button>
    `);
  });

  it("triggers an onClick", () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate("click");
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
