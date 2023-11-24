import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Review = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-3xl my-10 font-bold">
        Testimonials from our users
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:flex-row gap-10">
        {/* first review */}
        <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border  shadow-lg p-3 ">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden  bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/x3vTzpr/blog2.jpg"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl  font-semibold leading-snug tracking-normal text-blue-gray-900 ">
                  Andrew Mathews
                </h5>
                <div className="flex items-center gap-0 5">
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Creator @ DailyHacks
              </p>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              &quot;An incredible selection of entertainment from the best in
              the business. Thanks to this platform, I&quot;m never short of
              amazing movies, series, and music.It&quot;s like having Netflix,
              Spotify, and Amazon under one roof. !!!&quot;
            </p>
          </div>
        </div>
        {/* Second review */}
        <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border  shadow-lg px-3 py-7">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden  bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/vwSzywr/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Natasha Tania
                </h5>
                <div className="flex items-center gap-0 5">
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Students @ Harvard
              </p>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              &quot;Unmatched variety and quality. I&quot;ve found all my
              favorite shows and songs here, making it my go-to source for
              entertainment. Impressed with the extensive collection of content.
              Amazing service. !!!&quot;
            </p>
          </div>
        </div>
        {/* Third review */}
        <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border  shadow-lg p-3">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden  bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/09F4T62/sigmund-a19-OVaa2rz-A-unsplash.jpg"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Thomas Frank
                </h5>
                <div className="flex items-center gap-0 5">
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <AiFillStar className="text-yellow-400 text-lg"></AiFillStar>
                  <BsStarHalf className="text-yellow-400 text-sm"></BsStarHalf>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Designer @ LeeBay
              </p>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              &quot;Quality content at your convenience. A true treasure trove
              of movies, series, and music.The convenience of accessing content
              from multiple leading brands in one place is a game-changer.
              Highly recommended. !!!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
