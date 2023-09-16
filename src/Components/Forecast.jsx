/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { WiDayCloudy } from "react-icons/wi";
import { iconUrlFromCode } from "./Details";
import dayjs from "dayjs";

function ForeCast({ title, query }) {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=70e424f655b9c47fae9ea4df400c4cca`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  };

  useEffect(() => {
    const location = query.q;
    setWeatherData(null);
    getWeatherData(location).then((data) => {
      setWeatherData(data.list);
    });
  }, [query]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  console.log(weatherData);
  const groupedObjects = _.groupBy(weatherData, "dt_txt");

  return (
    <div>
      <h1 className="uppercase font-bold">{title}</h1>
      <hr className="my-2" />
      <div className="flex justify-around">
        {Object.values(groupedObjects).map((item) => (
          <div key={item.dt} className="flex flex-col ">
            <h2>{dayjs(item.dt_txt).format("dddd")}</h2>
            <img
              src={iconUrlFromCode(item.weather[0].icon)}
              className="w-12 my-1"
              alt=""
            />
            <span>{`${item.main.temp.toFixed()}°`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// return (
//   <section className="mt-8 text-white">
//     <h1 className="uppercase font-bold">{title}</h1>
//     <hr className="my-2" />
//     <div className="flex space-x-8">
//       <div className="flex flex-col items-center">
//         <h5>02:00 PM</h5>
//         <WiDayCloudy className="my-4" size={35} />
//         <h5>19°</h5>
//       </div>
//     </div>
//   </section>
// );
// }

export default ForeCast;
