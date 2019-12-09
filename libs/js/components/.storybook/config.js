import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../core/index.js";

addDecorator(storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
));

configure(
  [
    require.context("../", true, /^\.\/(.+?)\/.*stories\.js?$/),
    require.context("../", true, /^\.\/(.+?)\/.*stories\.mdx?$/)
  ],
  module
);
