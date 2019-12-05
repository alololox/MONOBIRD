import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Header } from "./index.js";

afterEach(cleanup);

describe("Dirty Little Header Test", () => {
  it("Renders Header", () => {
    const { asFragment } = render(<Header title="Monobird" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
