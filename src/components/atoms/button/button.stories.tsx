import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import Button from ".";

const stories = storiesOf("button", module);

stories.addDecorator(withKnobs);

stories.add(
  "default",
  () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ),
  {
    info: {
      text: "This is a button component"
    }
  }
);
