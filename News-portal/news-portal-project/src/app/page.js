import BreakingNews from "@/Section/BreakingNews";
import CategoryNews from "@/Section/CategoryNews/CategoryNews";
import HeroSlider from "@/Section/Hero/HeroSlider";
import LatestNews from "@/Section/LatestNews/LatestNews";
import TrendingNews from "@/Section/TrendingNews/TrendingNews";
import politicsNews from "@/data/politics";
import technologyNews from "@/data/technology";
import sportsNews from "@/data/sports";
import businessNews from "@/data/business";
import healthNews from "@/data/health";
import ShareButtons from "@/section/Article/ShareButtons";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BreakingNews />
      <LatestNews />
      <TrendingNews />

   <CategoryNews
  title="Politics"
  news={politicsNews}
  href="/category/politics"
/>

<CategoryNews
  title="Technology"
  news={technologyNews}
  href="/category/technology"
/>

<CategoryNews
  title="Sports"
  news={sportsNews}
  href="/category/sports"
/>

<CategoryNews
  title="Business"
  news={businessNews}
  href="/category/business"
/>

<CategoryNews
  title="Health"
  news={healthNews}
  href="/category/health"
/>
    </>
  );
}
