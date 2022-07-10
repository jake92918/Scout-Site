import Link from "next/link";

const BoxOverlay = () => {
  return (
    <div className="box">
      <div>
        <h1>Skills for Life</h1>
        <p>
          2nd Uxbridge (St Margarets) Scout Group is a thriving group providing
          Scouting in North Uxbridge. It is one of the largest groups in the
          County!
        </p>

        <div>
          <Link href={"/Sections"}>
            <a className="SecondaryButton">Find out more</a>
          </Link>

          <Link href={"/ContactUs"}>
            <a className="PrimaryButton">Join Today</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxOverlay;
