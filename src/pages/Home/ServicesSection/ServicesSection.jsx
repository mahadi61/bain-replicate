import { Link } from "react-router-dom";

const ServicesSection = () => {
  const serviceDetails = [
    {
      background:
        "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/people10.jpg",
      serviceName: "Business Partner",
      serviceDetails:
        "The world is changing faster than ever. New customer demands, urgent sustainability imperatives, and breakthrough technologies have left many businesses scrambling to keep up.",
    },
    {
      background:
        "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/people21.jpg",
      serviceName: "People and Organization",
      serviceDetails:
        "The world is changing faster than ever. New customer demands, urgent sustainability imperatives, and breakthrough technologies have left many businesses scrambling to keep up.",
    },
    {
      background:
        "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/people32.jpg",
      serviceName: "Sales & Marketing",
      serviceDetails:
        "The world is changing faster than ever. New customer demands, urgent sustainability imperatives, and breakthrough technologies have left many businesses scrambling to keep up.",
    },
  ];

  return (
    <>
      <section className="my-16 max-w-7xl mx-auto">
        <h1 className="text-center text-5xl mb-7 font-bold">Our Services</h1>
        <div className="grid grid-cols-3 gap-3">
          {serviceDetails.map((service, i) => (
            <div
              key={i}
              className="relative shadow-xl rounded-2xl text-white  hover:text-black"
            >
              <img
                src={service?.background}
                alt="Photo"
                className="w-full object-cover rounded-2xl transition-opacity duration-300 hover:opacity-0"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full flex justify-center h-full bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 pt-12">
                <Link to="" className="btn bg-[#05afec]">
                  Learn More
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 w-full  px-3 pb-4">
                <h2 className="card-title  text-4xl font-semibold">
                  {service?.serviceName}
                </h2>
                <p className="  mt-4 font-semibold">
                  {service?.serviceDetails}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
