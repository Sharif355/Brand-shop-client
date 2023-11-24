import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="  px-3 lg:px-0 font-roboto">
        {/* <Navbar></Navbar> */}
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
