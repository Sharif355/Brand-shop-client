import Lottie from "lottie-react";
import error from "../error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 space-y-2 bg- ">
      <Lottie className=" w-96 md:w-[500px]" animationData={error}></Lottie>
      <h1 className="text-lg font-semibold">
        The Page You Looking Doesn&apos;t exist.
      </h1>
      <Link to="/">
        <button className="btn normal-case rounded-lg">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
