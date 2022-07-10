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
      <SectionHeader text="Sections" />

      <div className="PageSize">
        <section class="Sections">
          <div>
            <Link href={"/Sections/Beavers"}>
              <a>
                <div>
                  <h4>Beavers</h4>
                  <span>6 to 8</span>
                </div>
                <div>
                  <span className="Image">
                    <Image
                      src={BeaversSectionHeaderImage}
                      layout={"responsive"}
                    />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>
              </a>
            </Link>
            <Link href={"/Sections/Cubs"}>
              <a>
                <div>
                  <h4>Cubs</h4>
                  <span>8 to 10.5</span>
                </div>
                <div>
                <span className="Image">
                    <Image
                      src={CubSectionHeaderImage}
                      layout={"responsive"}
                    />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>
              </a>
            </Link>
            <Link href={"/Sections/Scouts"}>
              <a>
                <div>
                  <h4>Scouts</h4>
                  <span>10.5 to 14</span>
                </div>
                <div>
                <span className="Image">
                    <Image
                      src={ScoutsSectionHeaderImage}
                      layout={"responsive"}
                    />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>
              </a>
            </Link>
            <Link href={"/Sections/Explorers"}>
              <a>
                <div>
                  <h4>Explorers</h4>
                  <span>14 to 18</span>
                </div>
                <div>
                <span className="Image">
                    <Image
                      src={ExplorersSectionHeaderImage}
                      layout={"responsive"}
                    />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>
              </a>
            </Link>
            <Link href={"/Sections/Network"}>
              <a>
                <div>
                  <h4>Network</h4>
                  <span>18 to 25</span>
                </div>
                <div>
                <span className="Image">
                    <Image
                      src={NetworkSectionHeaderImage}
                      layout={"responsive"}
                    />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
