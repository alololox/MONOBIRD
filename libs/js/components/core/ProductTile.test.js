import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductTile } from "./index.js";

afterEach(cleanup);

describe("Dirty Little ProductTile Test", () => {
  it("Renders ProductTile", () => {
    const { asFragment } = render(<ProductTile />);

    expect(asFragment()).toMatchSnapshot();
  });
});
