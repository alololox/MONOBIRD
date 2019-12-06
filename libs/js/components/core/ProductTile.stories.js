import React from "react";
import { storiesOf } from "@storybook/react";

import { ProductTile } from "./index.js";
import { GlobalStyle } from "./index.js";

storiesOf("ProductTile", module).add("text test", () => (
  <>
    <GlobalStyle />
    <ProductTile />
  </>
));
