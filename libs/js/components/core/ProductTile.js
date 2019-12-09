import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;


const ProductTile = ({product}) => (
  <Anchor href={product.url}>
    <h3>{product.name}</h3>
    <img src="//placehold.it/250x250" />
  </Anchor>
);

export default ProductTile;
