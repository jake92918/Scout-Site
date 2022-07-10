import Footer from "./footer";
import MetaDataHead from "./metaDataHead";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <MetaDataHead />
    <div className="WholePageHeight">
      <Nav />
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
