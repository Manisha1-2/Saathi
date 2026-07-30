import HeroSlider from "./HeroSlider";

export default function Hero() {

  return (
    <HeroSlider>

      <div className="container mx-auto px-6 text-white">

        <h1 className="text-6xl font-bold">
          Welcome to NewsPulse
        </h1>

        <p className="mt-5 text-xl">
          Get the latest news and updates.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg">
          Read More
        </button>

      </div>

    </HeroSlider>
  );
}