/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { iconUrlFromCode } from "./Details";
import { DateTime } from "luxon";
import Loader from "./Loader";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

function ForeCast({ title, query }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async (location) => {
      const url = `${apiUrl}/forecast?q=${location}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      const data = response.data;
      return data;
    };

    const location = query.q;
    setWeatherData(null);
    getWeatherData(location).then((data) => {
      setWeatherData(data.list);
    });
  }, [query]);

  console.log(weatherData);
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  if (!weatherData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className="mt-8 w-full">
      <h1 className="uppercase font-bold">{title}</h1>
      <hr className="my-2" />
      <div className="grid grid-cols-2 px-4 lg:px-0 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full mt-4  justify-center ">
        {weatherData.slice(6, 12).map((item) => (
          <div
            key={item.dt}
            className="flex flex-col bg-purple-500 text-slate-50 px-3 shadow-lg p-1 items-center rounded-sm"
          >
            {/* hourly */}
            <h2>{formatToLocalTime(item.dt, item.timezone, "hh:mm a")}</h2>

            <img
              src={iconUrlFromCode(item.weather[0].icon)}
              className="w-12 my-1"
              alt=""
            />
            <span>{`${item.main.temp.toFixed()}°`}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ForeCast;
