import React from "react";
import Hero from "/components/hero";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../../components/SectionHeader";
import BeaversSectionHeaderImage from "/public/Images/BeaversSectionHeader.jpg";
import CubSectionHeaderImage from "/public/Images/CubSectionHeader.jpeg";
import ScoutsSectionHeaderImage from "/public/Images/ScoutsSectionHeader.jpg";
import ExplorersSectionHeaderImage from "/public/Images/ExplorersSectionHeader.jpg";
import NetworkSectionHeaderImage from "/public/Images/NetworkSectionHeaderImage.jpg";

const Home = () => {
  return (
    <>
      <SectionHeader text="Beavers" />
    </>
  );
};

export default Home;
