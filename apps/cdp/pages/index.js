import {
  Section,
  ProductTileWrapper,
  Title,
  Paragraph
} from "../components/style";

import { Header, ProductTile } from "monobird-test-components";

const product = { 
  name: 'Alpha SV Jacket Men\'s',
  url: '/shop/mens/alpha-sv-jacket' 
};

const Index = () => (
  <Section>
    <Header title="Home" />
    <Title>Men's > Shell Jackets</Title>
    <ProductTileWrapper>
      <ProductTile product={product} />
    </ProductTileWrapper>
  </Section>
);

export default Index;
