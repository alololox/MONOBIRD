import React from "react";
import { render } from "@testing-library/react";
import { ProductTile } from "./index.js";

describe("Dirty Little ProductTile Test", () => {
  it("Renders ProductTile", () => {
    const product = {
      name: "Alpha SV Jacket Men's",
      url: "/shop/mens/alpha-sv-jacket",
      heroImage:
        "https://images.arcteryx.com/F19/350w/Alpha-SV-Jacket-Labyrinth.jpg"
    };
    const { asFragment } = render(<ProductTile product={product} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
