import { CarCardProps, SearchParamsProps } from "@/components/type";

export const fetchCars = async ({
  manufacturer,
  year,
  fuel,
  limit,
  model,
}: SearchParamsProps) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b897c1500fmsh4c92f6f49eb1b9ap132b5ejsncabc232185c0",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerPay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerPay.toFixed(0);
};

export const generateCarImageUrl = (car: CarCardProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getImage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newpathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newpathName;
};
