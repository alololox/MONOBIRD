import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./index.js";
import "jest-styled-components";

describe("Header Test", () => {
  it("Renders Header", () => {
    const { asFragment } = render(<Header title="Monobird" />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Renders Fancy Header", () => {
    const { asFragment } = render(<Header fancy={true} title="Fancy" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
