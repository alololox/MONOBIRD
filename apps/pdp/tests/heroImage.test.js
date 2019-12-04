import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({adapter : new Adapter() });

import HeroImage from '../components/heroImage';

describe( "HeroImage", () => {
 
  test( "Discounted price contains discounted class", () => {
    const heroPath = "https://images-dynamic-arcteryx.imgix.net/F19/450x625/Alpha-SV-Jacket-Trail-Blaze.png?auto=format";
    const renderedComponent = renderer
      .create( <HeroImage  src={heroPath} /> )
      .toJSON();
    expect( renderedComponent )
      .toMatchSnapshot();
  });
});

