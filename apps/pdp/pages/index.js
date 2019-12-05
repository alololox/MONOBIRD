import React from "react";
import { Section, Title, Paragraph } from "../components/style";
import HeroImage from "../components/heroImage";
import { Header } from "monobird-test-components";
import styled from "styled-components";

const Test = styled.div`
  color: red;
`;
const data = {};
const Index = () => (
  <Section>
    <Header title="monobird" />
    <Title>Alpha SV Jacket Men's</Title>
    <Paragraph align="center">
      Hardwearing GORE-TEX Pro hardshell for extended use in severe alpine
      conditions. Alpha Series: Climbing and alpine focused systems | SV: Severe
      Weather.
    </Paragraph>
    <HeroImage data={data} />
  </Section>
);

export default Index;
