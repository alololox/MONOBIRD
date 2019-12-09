import styled from "styled-components";
import React from "react";
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
        src="https://images-dynamic-arcteryx.imgix.net/F19/450x625/Axe-Keeper-Black.png?auto=format"
        itemType="image"
        alt="Axe Keeper Black"
        data-colour-name="Black"
        data-large-image="https://images-dynamic-arcteryx.imgix.net/F19/1350x1710/Axe-Keeper-Black.jpg?auto=format&amp;w=1350"
        data-small-image="https://images-dynamic-arcteryx.imgix.net/F19/450x625/Axe-Keeper-Black.png?auto=format"
      />
      <Figcaption>Axe Keeper Black</Figcaption>
    </figure>
  </div>
);
export default HeroImage;
