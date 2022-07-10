import React from "react";
import Hero from "../components/hero";
import Link from "next/link";
import Image from "next/image";
import BoxOverlay from "../components/BoxOverlay";
import SectionTiles from "../components/SectionsTiles";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="PageSize">
        <BoxOverlay />

        <SectionTiles />
        <iframe src="https://player.vimeo.com/video/430792771" width="640" className="campfirevideo" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </>
  );
};

export default Home;
