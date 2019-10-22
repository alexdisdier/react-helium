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

const loaderFn = () => {
  // put welcome screen at the top of the list so it's the first one displayed
  const allExports = [require("./welcome.stories.tsx")];
  // automatically import all story ts files that end with *.stories.tsx
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
