import CardCard from "@/components/CardCard";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { featchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await featchCars();
  // console.log("allcarts", allCars);
  const emptyCars = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        {!emptyCars ? (
          <section>
            <div className="home_cars-wrapper">
              {allCars?.map((car) => (
                <CardCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
