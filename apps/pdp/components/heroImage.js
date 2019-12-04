import styled from "styled-components";
import React from 'react';
const Image = styled.img`
  height: auto;
  width: auto;

  @media screen and (min-width: 480px) {
    max-height: 72vh;
  }
`;

const Figcaption = styled.figcaption`
  display: none;
`;

const HeroImage = () => (
  <div className="product-image">
    <figure>
      <Image
        src= "https://images-dynamic-arcteryx.imgix.net/F19/450x625/Alpha-SV-Jacket-Trail-Blaze.png?auto=format"
        itemType="image"
        alt="Alpha SV Jacket Men's Trail Blaze"
        data-colour-name="Trail"
        data-large-image="https://images-dynamic-arcteryx.imgix.net/F19/1350x1710/Alpha-SV-Jacket-Trail-Blaze.jpg?auto=format&amp;w=1350"
        data-small-image="https://images-dynamic-arcteryx.imgix.net/F19/450x625/Alpha-SV-Jacket-Trail-Blaze.png?auto=format"
       />
      <Figcaption>Alpha SV Jacket</Figcaption>
    </figure>
  </div>
);

export default HeroImage;
