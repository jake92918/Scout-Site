import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Link from "next/link";
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Hero image={"/Images/Fire.jpg"} imgWidth={3456} imgHeight={4608} title="Adventure Awaits" />

    </Layout>
  );
};

export default Home;
