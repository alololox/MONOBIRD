import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const colorMap = {
  green: "#038e34"
};
const Btn = styled.button`
  position: relative;
  display: inline-block;
  background: ${props => (props.color ? colorMap[props.color] : "#000")};
  color: #fff !important;
  text-decoration: none !important;
  border-radius: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  min-width: 142px;
  max-width: 400px;
  height: 42px;
  font-family: "Avenir LT W01 65 Medium", arial, sans-serif !default;
  font-size: 16px !important;
  line-height: 1.7em !important;
  padding: 8px 20px;
  margin: 0 0 1.5em 0;
  text-transform: uppercase;
  cursor: pointer;

  button {
    line-height: normal;
  }

  &:hover {
    border: none;
    background-image: linear-gradient(#373737, $black);
    transition: background-color 400ms ease-in;
    text-decoration: none !important;
  }

  &:active {
    border: none;
    text-decoration: none !important;
    background-image: linear-gradient($black, #373737);
    transition: background-color 400ms ease-in;
    text-decoration: none !important;
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.3;
    color: #ccc !important;
    cursor: default;
    cursor: not-allowed;
  }
  &.form--submitted {
    pointer-events: none;
    &:after {
      content: " ";
      -webkit-animation: rotate 0.8s infinite linear;
      animation: rotate 0.8s infinite linear;
      border: 3px solid #fff;
      border-right-color: transparent;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      position: absolute;
      left: 47.5%;
      top: 10px;
      transform: translate(50%);
      z-index: 99;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Button = ({ children, disabled, color }) => (
  <Btn color={color} disabled={disabled ? true : false}>
    {children}
  </Btn>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any
};

export default Button;
