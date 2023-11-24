import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const loadedData = useLoaderData();
  const [carts, setCart] = useState(loadedData);

  const handleDelete = (_id) => {
    fetch(
      `     https://brand-shop-server-lkgon3fo0-sharif355.vercel.app/carts/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = carts.filter((carts) => carts._id !== _id);
            setCart(remaining);
          });
        }
      });
  };

  return (
    <div className="container mx-auto  mt-20">
      <Helmet>
        <title>StarShoppe | My Cart</title>
      </Helmet>
      <div className="grid grid-cols1 md:grid-cols-2 gap-5">
        {carts?.map((data) => (
          <div key={data._id}>
            <div className="flex flex-col md:flex-row ">
              <div className="w-full">
                <img
                  className="w-[300px] md:w-[550px] h-60 rounded-l-lg"
                  src={data.item.photo}
                  alt={data.item.name}
                />
              </div>
              <div className="border w-full flex justify-between rounded-r-lg px-2 py-2">
                <div className="space-y-3">
                  <h1>
                    <span className="font-semibold">Name:</span>{" "}
                    {data.item.name}
                  </h1>
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {data.item.type}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span>
                    {data.item.price}
                  </p>
                  <p>
                    <span className="font-semibold">Rating:</span>
                    {data.item.rating}
                  </p>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className=" mb-3 normal-case flex items-center gap-2 border p-2 rounded-lg btn-error text-white "
                  >
                    Delete <AiFillDelete className="text-lg"></AiFillDelete>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
