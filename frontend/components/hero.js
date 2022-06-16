import React from "react";
// import Image from "next/image";

// const Hero = ({ image, imgWidth, imgHeight, title }) => {
const Hero = ({ image, imgWidth, imgHeight, title }) => {
  return (
    <>
      <div className="heroimage">
        {/* <span className="HeaderSpacer"></span> */}

        {/* <div>
                    /Images/Fire.jpg  3456  4608
                    <Image src={image} alt="Hero Image" width={imgWidth} height={imgHeight} layout={"responsive"} />
                </div> */}

        <video autoPlay muted loop>
          <source src="media/Hero.m4v" type="video/mp4" />
        </video>

        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Hero;
