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
      </div>
    </>
  );
};

export default Home;
