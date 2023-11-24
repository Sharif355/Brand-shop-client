import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { signUp, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const box = form.check.checked;
    console.log(name, photo, email, pass, box);

    if (pass.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Password length should be more than 6 character",
        confirmButtonText: "Ok",
      });
    } else if (/^(?![A-Z])[^A-Z]*$/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Password length should have a Capital letter",
        confirmButtonText: "Ok",
      });
    } else if (/^(?![!@#$%^&*()_+])[\w\d]*$/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Password length should have a Special Character",
        confirmButtonText: "Ok",
      });
    } else {
      signUp(email, pass)
        .then((res) => {
          console.log(res.user);
          Swal.fire({
            icon: "success",
            title: "SignUp completed successfully",
            confirmButtonText: "Ok",
          });
          updateProfile(res.user, {
            displayName: name,
            photoURL: photo,
          });
          form.reset();
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonText: "Ok",
          });
        });
    }
  };

  const handleGoogle = () => {
    googleSignIn()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Nice to meet you! Enter your details to register.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                  name="photo"
                />
              </div>

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
                  <input type="checkbox" name="check" id="" />
                  <a href="#"> I Agree with your Terms & Conditions. </a>
                </p>
              </div>
              <div className="form-control mt-3 ">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center pb-3">
              Already have an Account?{" "}
              <Link to="/signIn">
                <button>Login</button>
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

export default SignUp;
