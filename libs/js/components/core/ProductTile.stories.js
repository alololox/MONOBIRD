import React from "react";
import { storiesOf } from "@storybook/react";

import ProductTile from "./ProductTile";

storiesOf("ProductTile", module).add("text test", () => (
  <>
    <ProductTile />{" "}
  </>
));
