"use client";
import Reat, { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { CarCardProps } from "@/components/type";
import { fuels, yearsOfProduction } from "@/constants";

export default function Home() {
  // after the navigation is performed, the current page.js will receive an updated searchParams prop.
  // console.log('searchParams', searchParams);
  // const cars = await fetchCars({
  //   manufacturer: searchParams.manufacture || "",
  //   year: searchParams.year || 2023,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });
  // console.log("first", cars);

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search state
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2023);

  //pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const results = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2023,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setCars(results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, fuel, limit, year, model]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y max-width mt-12" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter setFilter={setFuel} title="fuel" options={fuels} />
            <CustomFilter
              setFilter={setYear}
              title="year"
              options={yearsOfProduction}
            />
          </div>
        </div>
        {cars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car: CarCardProps, index: any) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex flex-center">
                <Image
                  alt="loader"
                  src={"/loader.svg"}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > cars.length}
              setLimit= {setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops. There is no cars
            </h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
