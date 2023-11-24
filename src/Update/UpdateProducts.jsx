import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();

  const findData = loadedData?.find((data) => data._id == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand_name = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newProducts = {
      photo,
      name,
      brand_name,
      type,
      price,
      description,
      rating,
    };
    console.log(newProducts);
    fetch(
      `     https://brand-shop-server-lkgon3fo0-sharif355.vercel.app/products/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProducts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Products updated Successfully",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" lg:px-80 ">
        <form onSubmit={handleSubmit} className="  px-20 shadow-xl ">
          {/* photo */}
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered w-full"
                name="photo"
                defaultValue={findData.photo}
              />
            </label>
          </div>
          {/* name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                name="name"
                defaultValue={findData.name}
              />
            </label>
          </div>
          {/* brand name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full"
                name="brand"
                defaultValue={findData.brand_name}
              />
            </label>
          </div>
          {/* type */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Movie,Series,Song"
                className="input input-bordered w-full"
                name="type"
                defaultValue={findData.type}
              />
            </label>
          </div>
          {/* price  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Price"
                className="input input-bordered w-full"
                name="price"
                defaultValue={findData.price}
              />
            </label>
          </div>
          {/* description  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-full"
                name="description"
                defaultValue={findData.description}
              />
            </label>
          </div>
          {/* rating  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full"
                name="rating"
                defaultValue={findData.rating}
              />
            </label>
          </div>
          {/* btn  */}

          <input
            type="submit"
            placeholder=""
            value="Add Products"
            className="input input-bordered btn w-full mt-5 mb-2"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
