import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Hero
        image={"/Images/Fire.jpg"}
        imgWidth={3456}
        imgHeight={4608}
        title="Adventure Awaits"
      />
      <div className="PageSize">
        <div className="box">
          <div>
            <h1>Skills for Life</h1>
            <p>
              2nd Uxbridge (St Margarets) Scout Group is a thriving group
              providing Scouting in North Uxbridge. It is one of the largest
              groups in the County!
            </p>

            <div>
              <Link href={"/Sections"}><a className="SecondaryButton">Find out more</a></Link>

              <Link href={"/ContactUs"}><a className="PrimaryButton">Join Today</a></Link>
            </div>
          </div>
          <div></div>
        </div>

        <p>test data</p>
      </div>
    </Layout>
  );
};

export default Home;
