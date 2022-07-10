import React from "react";
import Hero from "/components/hero";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../../components/SectionHeader";

const Home = () => {
  return (
    <>
      <SectionHeader text="Contact Us" />

      <div className="PageSize">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc3WyMDvVCtVyDv_-rKNmNczxlcOQ1YpJYsVSQQ4Xzwvyh4YA/viewform?embedded=true"
          width="640"
          height="1110"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Home;
