import Banner from "../Banner/Banner";
import News from "../News/News";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <div className="max-w-7xl mx-auto">
          <ServicesSection></ServicesSection>
          <News />
        </div>
      </div>
    </>
  );
};

export default Home;
