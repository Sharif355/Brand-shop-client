import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import DarkMode from "../../Darkmode/Darkmode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="font-medium text-lg ">
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
              backgroundColor: isActive ? "rgb(100, 149, 237)" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="font-medium text-lg ">
        <NavLink
          to="/addProduct"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
              backgroundColor: isActive ? "rgb(100, 149, 237)" : "",
            };
          }}
        >
          Add Product
        </NavLink>
      </li>
      <li className="font-medium text-lg ">
        <NavLink
          to="/myCart"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
              backgroundColor: isActive ? "rgb(100, 149, 237)" : "",
            };
          }}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(
        Swal.fire({
          icon: "success",
          title: "Logged Out Successfully",
          confirmButtonText: "Ok",
        })
      )
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: error.message,
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="container mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}

              <Link to="/signIn">
                <button className="ml-3">Log in</button>
              </Link>
            </ul>
          </div>
          <img
            className=" w-14 rounded-full"
            src="https://i.ibb.co/mTJ6m68/film-162028-1920.png"
            alt=""
          />
          <a className=" text-2xl normal-case font-semibold ml-2">StarShoppe</a>
        </div>

        <div className="navbar-center ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navLinks}
          </ul>
        </div>
        <div className="ml-16 md:ml-0">
          <DarkMode></DarkMode>
        </div>
        <div className="navbar-end hidden md:flex">
          {user ? (
            <div className="flex items-center gap-2">
              {" "}
              <img
                className="w-10 rounded-full"
                src={user.photoURL}
                alt=""
              />{" "}
              <p className="text-white">{user.displayName}</p>
              <button
                onClick={handleLogOut}
                className="btn bg-[#6495ED] text-white"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/signIn">
              <button className="btn bg-[#6495ED] text-white">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
