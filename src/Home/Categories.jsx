import { Link } from "react-router-dom";

const Categories = ({ data }) => {
  const { brand_name, brand_image, bg_color } = data;

  return (
    <div
      className=" p-4 space-y-4 rounded-lg  shadow-lg "
      style={{ backgroundColor: `${bg_color}` }}
    >
      <Link to={`/categories/${brand_name}`}>
        <img
          className="w-[300px] md:w-[500px] h-80 rounded-t-lg  "
          src={brand_image}
          alt={brand_name}
        />
        <h1 className="text-xl font-semibold text-center text-white">
          {" "}
          {brand_name}{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Categories;
