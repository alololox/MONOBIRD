import React from "react";
import { storiesOf } from "@storybook/react";

import { ProductTile } from "./index.js";

storiesOf("ProductTile", module).add("text test", () => {
  const product = { 
    name: 'Alpha SV Jacket Men\'s',
    url: '/shop/mens/alpha-sv-jacket' 
  };

  return <>
    <ProductTile product={ product } />
  </>
});
