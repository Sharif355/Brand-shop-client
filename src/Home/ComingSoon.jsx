/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";

const ComingSoon = () => {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(
      "     https://brand-shop-server-lkgon3fo0-sharif355.vercel.app/coming"
    )
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto my-20">
        <h1 className="text-center text-3xl my-10 font-bold">
          Coming Soon to StarShoppe
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
          {loadedData?.map((data) => (
            <div key={data._id}>
              <div className="relative flex flex-col  text-black   shadow-md w-full rounded-xl bg-clip-border">
                <div className="relative h-56 px-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <img
                    src={data.photo}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.name}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {data.release}
                  </p>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-justify">
                    {data.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
