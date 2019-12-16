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

const HeroImage = props => (
  <div className="product-image">
    <figure>
      <Image
        src={props.product.details.largeImageUrl}
        itemType="image"
        alt="Axe Keeper Black"
        data-colour-name="Black"
        data-large-image={props.product.details.largeImageUrl}
        data-small-image={props.product.details.largeImageUrl}
      />
      <Figcaption>{props.product.name}k</Figcaption>
    </figure>
  </div>
);
export default HeroImage;
