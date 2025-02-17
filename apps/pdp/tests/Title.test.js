import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Title from "../components/Title";
const title = "Test Title";
let wrapped = shallow(<Title name={title} />);
describe("Title", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("renders the Titles children", () => {
    expect(wrapped.find("Title__H1").text()).toEqual(title);
  });
});
