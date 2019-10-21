import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider, JssProvider } from "react-jss";

import theme from "../src/style/globalStyle";

addDecorator(
  withInfo({
    inline: true,
    styles: {
      infoBody: {
        padding: 0,
        lineHeight: "2"
      }
    }
  })
);

addParameters({
  options: {
    panelPosition: "right"
  }
});

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`;

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <JssProvider generateClassName={generateClassName}>{story()}</JssProvider>
  </ThemeProvider>
));

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
