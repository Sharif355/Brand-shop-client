import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import Review from "./Review";
import ComingSoon from "./ComingSoon";

const Home = () => {
  const loaderData = useLoaderData();

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>StarShoppe | Home</title>
      </Helmet>
      {/* <Banner></Banner> */}
      <h1 className="text-center text-3xl my-10 font-bold">
        Our Trusted Brand&apos;s
      </h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.keys(loaderData).map((key) => (
          <Categories key={key} data={loaderData[key]}></Categories>
        ))}
      </div>
      <ComingSoon></ComingSoon>
      <Review></Review>
    </div>
  );
};

export default Home;
