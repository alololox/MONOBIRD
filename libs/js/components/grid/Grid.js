import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  padding: 0 1rem;
  width: 88%;
  margin: 0 auto;
  max-width: 140rem;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Item = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: grey;
`;

const Grid = () => (
  <Wrapper>
    <Row>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
    </Row>

    <Row>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Row>
  </Wrapper>
);

export default Grid;
