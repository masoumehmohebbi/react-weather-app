/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { iconUrlFromCode } from "./Details";
import { DateTime } from "luxon";
import Loader from "./Loader";

function ForeCast({ title, query }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async (location) => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=70e424f655b9c47fae9ea4df400c4cca`;
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
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 w-full mt-4">
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
