import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://www.bain.com/contentassets/e0d70c764ee6470cbaefc5d0ab4e3c8b/19473-responsible-generative-ai-1440x810-16_9.jpg?width=1080&height=612&mode=crop"
          className="w-full "
        />
        <div className="absolute flex items-center pt-14 lg:pt-0 pl-8 h-full w-full bottom-0 bg-[#0000008b]">
          <div className="text-white space-y-2 lg:space-y-7 w-full lg:w-2/3">
            <h2 className="text-xl lg:text-6xl font-bold uppercase">
              Five Principles for Generative AI in Financial Services
            </h2>
            <p>Five Principles for Generative AI in Financial Services</p>
            <div>
              <Link
                to="/classes"
                className="btn text-white hover:text-black hover:bg-white btn-sm lg:btn-lg border-0 lg:mr-4 bg-[#05afec]"
              >
                Learn About Five Principle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
