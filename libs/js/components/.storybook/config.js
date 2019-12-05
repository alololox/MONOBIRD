import { configure } from "@storybook/react";

configure(
  [
    require.context("../", true, /^\.\/(.+?)\/.*stories\.js?$/),
    require.context("../", true, /^\.\/(.+?)\/.*stories\.mdx?$/)
  ],
  module
);
