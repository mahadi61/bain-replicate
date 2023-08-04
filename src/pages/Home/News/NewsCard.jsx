import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, date, category, image } = news;

  return (
    <>
      <div className="border shadow-sm duration-500 hover:shadow-2xl p-3">
        <div className="p-4">
          <img src={image} alt="" className="rounded-lg" />
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
