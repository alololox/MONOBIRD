import React from "react";
import { storiesOf } from "@storybook/react";

import Grid from "./Grid";
import GridItem from "./GridItem";

storiesOf("Grid", module).add("Layout", () => (
  <>
    <Grid />
  </>
));
