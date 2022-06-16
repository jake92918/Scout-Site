import React from "react";
import Hero from "/components/hero";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>

    <div className="SectionHeader">

      <h1>Contact Us</h1>
    </div>


      <div className="PageSize">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc3WyMDvVCtVyDv_-rKNmNczxlcOQ1YpJYsVSQQ4Xzwvyh4YA/viewform?embedded=true"
          width="640"
          height="1040"
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
