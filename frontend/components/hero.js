import React from "react";
import Image from 'next/image';

const Hero = ({ image, imgWidth, imgHeight, title }) => {

    return (
        <>
            <style>
                {`
      .heroimage {
          display: inline-block;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .heroimage > div {
          pointer-events: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
        }

        .heroimage .HeaderSpacer {
          height: 80px;
          display: block;
        }

        `}
            </style>

            <div className="heroimage">
                <div>
                    {/* /Images/Fire.jpg  3456  4608 */}
                    <Image src={image} alt="Hero Image" width={imgWidth} height={imgHeight} layout={"responsive"} />
                </div>

                <span className="HeaderSpacer"></span>

                <h1>{title}</h1>
            </div>
        </>


    );
};

export default Hero;