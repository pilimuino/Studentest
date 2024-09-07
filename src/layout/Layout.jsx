import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Layout = () => {

    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
