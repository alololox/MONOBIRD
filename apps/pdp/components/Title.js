import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 24px;
  line-height: 1.25em;
  text-transform: uppercase;
  margin: 30px 0 15px 0;
  text-align: center;
`;

function Title(props) {
  return <H1>{props.name}</H1>;
}

export default Title;
