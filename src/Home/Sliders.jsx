import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({ images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto">
      <Slider {...sliderSettings}>
        {images?.map((image, index) => (
          <div key={index}>
            <img className="h-[450px] w-full" src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
