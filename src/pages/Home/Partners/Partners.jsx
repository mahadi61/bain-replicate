import Marquee from "react-fast-marquee";

const partnersLogo = [
  {
    image:
      "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/brand-1.png",
  },
  {
    image:
      "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/brand-5.png",
  },
  {
    image:
      "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/brand-1.png",
  },
  {
    image:
      "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/brand-6.png",
  },
  {
    image:
      "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/brand-2.png",
  },
  {
    image:
      "https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/brand-4.png",
  },
];

const Partners = () => {
  return (
    <>
      <section className="my-6">
        <h1 className="text-center text-5xl mb-7 font-bold">Our Partners</h1>
        <Marquee>
          {partnersLogo.map((p, i) => (
            <img key={i} src={p?.image} alt="" className="w-40 mx-5" />
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Partners;
