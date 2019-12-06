import React from "react";
import { render } from "@testing-library/react";

import Grid from "./Grid";
import GridItem from "./GridItem";

import "jest-styled-components";

describe("Dirty Little Grid Test", () => {
  it("Renders Grid", () => {
    const { asFragment } = render(<Grid />);

    expect(asFragment()).toMatchSnapshot();
  });
});
