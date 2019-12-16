import React from "react";
import { Section, Paragraph } from "../components/style";
import Title from "../components/Title";
import HeroImage from "../components/heroImage";
import { Header } from "monobird-test-components";
import styled from "styled-components";
import { getProductData, PageNotFound } from "../components/helpers";

const Test = styled.div`
  color: red;
`;

function Index(props) {
  return (
    <Section {...props}>
      <Header title="monobird" />
      <Title name={props.product.name} />
      <Paragraph align="center">
        {props.product.details.translatedDescr}
      </Paragraph>
      <HeroImage {...props} />
    </Section>
  );
}

Index.getInitialProps = async ({ query, asPath, pathname, res }) => {
  const { slug } = query;
  const surrogateKey = pathname.replace("/", "");
  let product = {};

  product = await getProductData(slug);

  if (product == null) {
    if (res) {
      res.statusCode = 404;
      res.end(PageNotFound);
      return false;
    }
  }

  return {
    slug,
    product,
    asPath,
    surrogateKey
  };
};

export default Index;
