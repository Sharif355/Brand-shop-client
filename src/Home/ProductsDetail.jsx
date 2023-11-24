import { useLoaderData, useParams } from "react-router-dom";
import { AiFillStar, AiFillDollarCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { RiMovie2Line } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductsDetail = () => {
  const { user } = useContext(AuthContext);

  const userId = user.uid;

  const { id } = useParams();
  const loadedData = useLoaderData();

  const showDetails = loadedData.filter((data) => data._id == id);

  const handleCart = (item) => {
    fetch(
      `     https://brand-shop-server-lkgon3fo0-sharif355.vercel.app/carts`,
      {
        // use the put method for updating the data
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ item, userId }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: "Go to 'My Cart' to show the Product!",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="container mx-auto flex justify-center mt-16">
      {showDetails?.map((detail) => (
        <div key={detail._id}>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border lg:w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <img src={detail.photo} className=" w-full h-full" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {detail.name}
                </p>
                <p className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 flex items-center gap-2">
                  <AiFillStar className="text-lg text-yellow-400"></AiFillStar>{" "}
                  {detail.rating}
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 text-justify">
                {detail.description}
              </p>
              <div className="flex items-center justify-between my-2">
                <p className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 flex items-center gap-2">
                  <AiFillDollarCircle className="text-xl"></AiFillDollarCircle>{" "}
                  {detail.price}
                </p>
                <p className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 flex items-center gap-2">
                  <RiMovie2Line className="text-xl"></RiMovie2Line>
                  {detail.type}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => handleCart(detail)}
                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all bg-slate-200 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsDetail;
