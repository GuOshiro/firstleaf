import React from "react";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Counter = (): JSX.Element => (
  <Layout>
    <Header />
    <ProductGrid />
  </Layout>
);

export default Counter;
