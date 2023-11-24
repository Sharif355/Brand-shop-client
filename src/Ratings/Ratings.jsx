import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
const Ratings = ({ rating }) => {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starIcons.push(
        <span key={i} className="flex">
          <FaRegStar></FaRegStar>
        </span>
      );
    } else if (i - rating < 1) {
      starIcons.push(
        <span key={i}>
          <FaRegStarHalf className="block"></FaRegStarHalf>
        </span>
      );
    } else {
      starIcons.push(<span key={i}>☆</span>);
    }
  }

  return <div className="flex text-yellow-400">{starIcons}</div>;
};

export default Ratings;
