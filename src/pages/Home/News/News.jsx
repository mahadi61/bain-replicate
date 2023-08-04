import NewsCard from "./NewsCard";

const News = () => {
  const newsData = [
    {
      id: "news010",
      title: "Automaker Unveils Electric SUV with Longest Range Yet",
      date: "2023-08-13",
      category: "Business",
      content:
        "A leading automaker has revealed its latest electric SUV model with the longest driving range on a single charge. The SUV's extended battery capacity allows it to travel over 500 miles, making it a compelling option for eco-conscious consumers. The automaker aims to accelerate the adoption of electric vehicles and contribute to sustainable transportation solutions.",
      image:
        "https://www.bain.com/contentassets/77265f0c56ae44cbac8768d07772afd7/20429-payments-for-banks-infographic_promo-16x9.png?width=1440&height=810&mode=crop",
    },
    {
      id: "news011",
      title: "Investors Anticipate Stock Market Rally Amid Economic Recovery",
      date: "2023-08-14",
      category: "Business",
      content:
        "As the global economy shows signs of recovery, investors are optimistic about a potential stock market rally. Positive economic indicators and corporate earnings reports have fueled confidence among investors, leading to increased buying activity in the stock market. Analysts predict a bullish trend in the coming months, driven by economic growth and favorable market conditions.",
      image:
        "https://www.bain.com/contentassets/04559a72c56543b488f8b6c35146e83f/17780-future-of-payments-1440x810.jpg?width=1440&height=810&mode=crop",
    },
    {
      id: "news012",
      title: "Medical Breakthrough: Researchers Develop Promising Vaccine",
      date: "2023-08-15",
      category: "Health",
      content:
        "Scientists have made a significant medical breakthrough, developing a promising vaccine against a previously challenging disease. The vaccine has shown high efficacy in early trials, providing protection against the disease and reducing its severity. Health authorities and researchers are hopeful that the vaccine will contribute to public health efforts and help control the spread of the disease.",
      image:
        "https://www.bain.com/contentassets/ff0931edafc64b6eb5614c2e544d49ee/fs_decrabonisation-webinar1-1440-x-810.jpg?width=1440&height=810&mode=crop",
    },
    {
      id: "news013",
      title: "Athletes Prepare for the Grand Sporting Event",
      date: "2023-08-16",
      category: "Sports",
      content:
        "Elite athletes from around the world are gearing up for the grand sporting event, known for its legacy of excellence and camaraderie. The event showcases various sports, attracting the world's best athletes to compete on a global stage. The athletes' dedication and hard work have brought them to this prestigious event, where they aim to achieve personal bests and make their countries proud.",
      image:
        "https://www.bain.com/contentassets/1618a82f8e86436eaf28d070578ccb2d/gettyimages-1251059233-16_9.jpg?width=1440&height=810&mode=crop",
    },
    {
      id: "news014",
      title: "Space Exploration: Historic Mission to Explore New Frontier",
      date: "2023-08-17",
      category: "Science",
      content:
        "A historic space exploration mission is set to embark on a journey to explore a new frontier in the cosmos. The mission aims to study celestial phenomena and gather valuable data to deepen our understanding of the universe. Scientists and space enthusiasts eagerly await the findings from this pioneering endeavor, which may provide insights into the mysteries of space and inspire future generations of space exploration.",
      image:
        "https://www.bain.com/contentassets/b1d6d6cd2a724c96af2ac5e3c3635a8e/gettyimages-638763016_16-9.jpg?width=768&height=432&mode=crop",
    },
    {
      id: "news015",
      title: "Music Festival Returns with Spectacular Lineup",
      date: "2023-08-18",
      category: "Entertainment",
      content:
        "After a hiatus, the much-loved music festival is making a triumphant return with a spectacular lineup of artists from diverse genres. The festival promises a weekend of music, art, and unforgettable experiences for attendees. Music enthusiasts and festival-goers are thrilled to reunite and celebrate the joy of live music in an atmosphere of creativity and unity.",
      image:
        "https://www.bain.com/contentassets/08d49266d45d446eb9c96873d49bd251/gettyimages-1336136316-16_9.jpg?width=768&height=432&mode=crop",
    },
  ];
  return (
    <>
      <section className="mb-9">
        <h1 className="text-center text-5xl mb-7 font-bold">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {newsData.map((news) => (
            <NewsCard key={news?.id} news={news}></NewsCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;
