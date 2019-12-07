import React from "react";
import { render } from "@testing-library/react";
import { ProductTile } from "./index.js";

describe("Dirty Little ProductTile Test", () => {
  it("Renders ProductTile", () => {
    const { asFragment } = render(<ProductTile />);

    expect(asFragment()).toMatchSnapshot();
  });
});
