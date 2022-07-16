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
                  <span className="Text">
                   Get a first taste of scouting at Beavers. Beavers is all about having fun and making freinds. 
                   Building a lifelong love of the outdoors and teaching young people to be responsible and caring.
                   Crafts and an early introduction to scouting activites help to build confidence and skills.
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
                  <span className="Text">
                   Skills, fun and resillence. The expereinces gained at Cubs stay with you for life. 
                   Campfires, games and learning to cook are just a few of the activites we do at Cubs.
                   We also offer an introduction to camping and nights away from home at a variety of local sites.
                   Start your scouting journey at Cubs.
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
                  <span className="Text">
                    Scouts is a fun and safe environment to learn new skills. 
                    Building fires, outdoor games and making wooden structures are just some of the exciting activities kids can discover at Scouts.
                    Each skill is awarded with a badge and a sense of accomplishment.
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
                  <span className="Text">
                    Explorers is the place to form life long friendships in a diverse environment.
                    Experince activites such as cliff diving, surfing, rock climbing and more in a safe and encouraging envioronment.
                    
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
                  <span className="Text">
                    Moving onto adulthood doesn't have to be boring.
                    Network scouts meet weekly for sessions and plan/execute their own expeditions.
                    With the chance to earn nationally recognised awards such as Queen scout award and Duke of Edinburgh Gold.
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
