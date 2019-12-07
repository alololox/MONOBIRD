import React from "react";
import { storiesOf } from "@storybook/react";

import { ProductTile } from "./index.js";

storiesOf("ProductTile", module).add("text test", () => (
  <>
    <ProductTile />
  </>
));
