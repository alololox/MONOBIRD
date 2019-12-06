import React from "react";
import { storiesOf } from "@storybook/react";

import Grid from "./Grid";
import GridItem from "./GridItem";
import { GlobalStyle } from "../core/index.js";

storiesOf("Grid", module).add("Layout", () => (
  <>
    <GlobalStyle />
    <Grid />
  </>
));
