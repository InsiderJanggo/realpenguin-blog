import { FC, Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC = ({ children }): JSX.Element => {
    return(
        <Fragment>
            <Navbar />
            <main id="main-body">{children}</main>
            <Footer />
        </Fragment>
    )
}   

export default Layout;