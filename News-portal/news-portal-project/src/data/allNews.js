import breakingNews from "./breakingNews";
import latestNews from "./latestNews";
import politicsNews from "./politics";
import technologyNews from "./technology";
import sportsNews from "./sports";
import businessNews from "./business";
import healthNews from "./health";
import nationalNews from "./national";

const allNews = [
  ...breakingNews,
  ...latestNews,
  ...nationalNews,
  ...politicsNews,
  ...technologyNews,
  ...sportsNews,
  ...businessNews,
  ...healthNews,
];
export default allNews;