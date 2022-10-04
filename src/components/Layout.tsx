import { Outlet } from "react-router-dom";
import { errors } from "../store/errors";
import { useSelector } from "../store/store";
import Error from "./Error";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = () => {
    // Error Messageを表示するかどうか判定
    const errorsMessage = useSelector(errors);

    return (
        <>
            <Navbar />
            <main className="py-16">
                {errorsMessage.ErrorCode ? <Error /> : <></>}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
