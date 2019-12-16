import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Bar = styled.div`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  background: ${props =>
    props.fancy
      ? "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,79,9,1) 35%, rgba(0,212,255,1) 100%)"
      : "#000"};
  display: flex;
  justify-content: flex-start;
  padding: 0 10px;
`;

const Logo = styled.img`
  max-width: 50px;
  margin-right: 20px;
`;

const Ul = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  color: white;
  font-family: Helvetica, sans-serif;
  margin: 15px 10px;
  list-style: none;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Header = ({ title, fancy }) => (
  <Bar fancy={fancy}>
    <Logo src="//images.arcteryx.com/foundation-ui/svgs/ArcBirdWhite.svg" />
    <Ul>
      <Li>
        <Anchor href="/">{title}</Anchor>
      </Li>
      <Li>
        <Anchor href="/c/mens">Mens</Anchor>
      </Li>
      <Li>
        <Anchor href="/c/womens">Womens</Anchor>
      </Li>
      <Li>
        <Anchor href="/explore">Explore</Anchor>
      </Li>
    </Ul>
  </Bar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
