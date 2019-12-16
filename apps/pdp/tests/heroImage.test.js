import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import HeroImage from "../components/heroImage";

describe("HeroImage", () => {
  test("Discounted price contains discounted class", () => {
    const productData = {
      slug: "atom lt hoody men's",
      product: {
        name: "Atom LT Hoody Men's",
        details: {
          productNo: 24477,
          largeImageUrl:
            "https://images.arcteryx.com/F19/162x205/Atom-LT-Hoody-Black.gif",
          isUnisex: false,
          translatedDescr:
            "Exceptionally versatile insulated hoody that excels as a midlayer or standalone. Atom Series: Synthetic insulated midlayers | LT: Lightweight."
        }
      }
    };
    const renderedComponent = renderer
      .create(<HeroImage {...productData} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
