import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="py-16">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;