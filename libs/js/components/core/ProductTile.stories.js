import React from "react";
import { storiesOf } from "@storybook/react";

import { ProductTile } from "./index.js";

storiesOf("ProductTile", module).add("text test", () => {
  const product = {
    name: "Alpha SV Jacket Men's",
    url: "/shop/mens/alpha-sv-jacket",
    heroImage:
      "https://images.arcteryx.com/F19/350w/Alpha-SV-Jacket-Labyrinth.jpg"
  };

  return (
    <>
      <ProductTile product={product} />
    </>
  );
});
