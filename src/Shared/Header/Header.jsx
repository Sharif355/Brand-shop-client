import { useLocation } from "react-router-dom";

import Banner from "../../Home/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const location = useLocation();

  return (
    <div
      style={{
        backgroundImage:
          location.pathname === "/"
            ? "url(https://i.ibb.co/VqQZGRZ/money-heist-mask-poster-0izx60zqph7qdjsx.jpg)"
            : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: location.pathname === "/" ? "600px" : "",
      }}
    >
      <Navbar />
      {location.pathname === "/" && <Banner />}{" "}
    </div>
  );
};

export default Header;
