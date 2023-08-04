import moment from "moment/moment";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, date, category, image } = news;

  return (
    <>
      <div className="border shadow-sm duration-500 hover:shadow-2xl p-3">
        <div className="p-4 relative">
          <img src={image} alt="" className="rounded-lg" />
          <p className="absolute bottom-0 right-11 w-16 h-20 p-2 text-2xl font-semibold text-white bg-[#05afec]">
            {moment(date).format("MMM Do")}
          </p>
        </div>

        <div className="mt-3">
          <p className="text-gray-400 text-xl uppercase font-semibold">
            {category}
          </p>
          <h1 className="text-3xl text-black font-semibold hover:underline">
            {title}
          </h1>
          <div className="mt-2">
            <Link to="" className="text-xl text-[#05afec] font-semibold">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
