import Footer from "./footer";
import MetaDataHead from "./metaDataHead";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <MetaDataHead />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
