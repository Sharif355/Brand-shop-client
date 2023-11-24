import { Helmet } from "react-helmet-async";

const AddProducts = () => {
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
      "     https://brand-shop-server-lkgon3fo0-sharif355.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProducts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Product Added Successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>StarShoppe | Add Products</title>
      </Helmet>
      <div className=" lg:px-80 ">
        <form
          onSubmit={handleSubmit}
          className="  lg:px-20 shadow-xl bg-stone-200 px-2 rounded-lg"
        >
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

export default AddProducts;
