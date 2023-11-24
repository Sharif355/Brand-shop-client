import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Signin = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;

    signIn(email, password)
      .then((res) => {
        const loggedInUser = res.user;
        const user = { email };
        Swal.fire({
          title: "Hurrah!",
          text: "You are logged in Successfully",
          confirmButtonText: "Ok",
        });
        // navigate(location?.state ? location?.state : "/");
        //get access token
        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: error.message,
          confirmButtonText: "Ok",
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Hurrah!",
          text: "You are logged in Successfully",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log in</h1>
            <p className="py-6">
              Nice to meet you! Enter your details to Login.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="pass"
                />
                <p className="pt-5">
                  <a href="#"> Forget Password? </a>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center pb-3">
              New Here ?{" "}
              <Link to="/signUp">
                <button>Sign up</button>
              </Link>{" "}
            </p>
            <div className="px-5 space-y-2 mb-3">
              <hr className="border-black border-3 " />
              <p className="text-center text-lg">or</p>
              <button onClick={handleGoogle} className="btn w-full  ">
                {" "}
                <FcGoogle className="text-xl"></FcGoogle> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
