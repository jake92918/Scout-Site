import Link from "next/link";

const SectionTiles = () => {
  return (
    <section class="ageSection">
      <h3>Aged 6 to 25?</h3>

      <div>
        <Link href={"/Sections"}>
          <a>
            <div>
              <h4>Beavers</h4>
              <span>6 to 8</span>
            </div>
            <div>
              <span>Find out more</span>
            </div>
          </a>
        </Link>
        <Link href={"/Sections"}>
          <a>
            <div>
              <h4>Cubs</h4>
              <span>8 to 10.5</span>
            </div>
            <div>
              <span>Find out more</span>
            </div>
          </a>
        </Link>
        <Link href={"/Sections"}>
          <a>
            <div>
              <h4>Scouts</h4>
              <span>10.5 to 14</span>
            </div>
            <div>
              <span>Find out more</span>
            </div>
          </a>
        </Link>
        <Link href={"/Sections"}>
          <a>
            <div>
              <h4>Explorers</h4>
              <span>14 to 18</span>
            </div>
            <div>
              <span>Find out more</span>
            </div>
          </a>
        </Link>
        <Link href={"/Sections"}>
          <a>
            <div>
              <h4>Network</h4>
              <span>18 to 25</span>
            </div>
            <div>
              <span>Find out more</span>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default SectionTiles;
