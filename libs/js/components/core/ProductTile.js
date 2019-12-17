import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Image = styled.img`
  max-width: 230px;
`;

const ProductTile = ({ product }) => (
  <Anchor href={product.url}>
    <h3>{product.name}</h3>
    <Image src={product.heroImage || "//placehold.it/250x250"} />
  </Anchor>
);

export default ProductTile;
