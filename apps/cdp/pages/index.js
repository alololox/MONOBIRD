import {
  Section,
  ProductTileWrapper,
  Title,
  Paragraph
} from "../components/style";

import { Header, ProductTile } from "monobird-test-components";

const products = [
  {
    name: "Sabre LT Jacket Men's",
    url: "/shop/mens/sabre-lt-jacket",
    heroImage:
      "https://images.arcteryx.com/F19/350w/Sabre-LT-Jacket-Adrenaline.jpg"
  },
  {
    name: "Sabre AR Jacket Men's",
    url: "/shop/mens/sabre-ar-jacket",
    heroImage:
      "https://images.arcteryx.com/F19/350w/Sabre-AR-Jacket-Midnight-Sun.jpg"
  },
  {
    name: "Rush Jacket Men's",
    url: "/shop/mens/rush-jacket",
    heroImage: "https://images.arcteryx.com/F19/350w/Rush-Jacket-Zeus.jpg"
  },
  {
    name: "Sidewinder Jacket Men's",
    url: "/shop/mens/sidewinder-jacket",
    heroImage:
      "https://images.arcteryx.com/F19/350w/Sidewinder-Jacket-24K-Black.jpg"
  }
];

const Index = () => (
  <Section>
    <Header title="Home" />
    <Title>Men's > Shell Jackets</Title>
    <ProductTileWrapper>
      <ProductTile product={products[0]} />
      <ProductTile product={products[1]} />
      <ProductTile product={products[2]} />
      <ProductTile product={products[3]} />
    </ProductTileWrapper>
  </Section>
);

export default Index;
