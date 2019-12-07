import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductTileWrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1515px;
  margin: 0 auto;
  position: relative;
`;

export const ProductTile = styled.div`
  border: 1px solid black;
`;

export const Paragraph = styled.p(props => ({
  fontSize: "15px",
  lineHeight: "15px",
  color: "#000",
  maxWidth: "650px",
  margin: "0 0 1.5em 0",
  textAlign: props.align ? props.align : "left"
}));

export const Title = styled.h1`
  font-size: 24px;
  line-height: 1.25em;
  text-transform: uppercase;
  margin: 0 0 15px 0;
  text-align: center;
`;
