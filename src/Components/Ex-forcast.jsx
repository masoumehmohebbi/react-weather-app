/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { iconUrlFromCode } from "./Details";
import dayjs from "dayjs";
import { DateTime } from "luxon";

function ForeCast({ title, query }) {
  const [weatherData, setWeatherData] = useState(null);
  // const ul =
  //   "https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric";
  // console.log(ul);
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

  console.log(weatherData);
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const uniqueWeekDays = new Set();
  const weekDayTemps = {};
  const weekDayImages = {};

  weatherData.forEach((item) => {
    const weekDay = formatToLocalTime(item.dt, item.timezone, "hh:mm a");
    uniqueWeekDays.add(weekDay);
    if (!weekDayTemps[weekDay]) {
      weekDayTemps[weekDay] = item.main.temp;
    }
    if (!weekDayImages[weekDay]) {
      weekDayImages[weekDay] = iconUrlFromCode(item.weather[0].icon);
    }
  });

  const weekDays = Array.from(uniqueWeekDays);

  return (
    <div>
      <h1 className="uppercase font-bold">{title}</h1>
      <hr className="my-2" />
      <div className="flex justify-around">
        {weekDays.map((weekDay) => (
          <div key={weekDay} className="flex flex-col items-center">
            <h2>{weekDay}</h2>
            <img src={weekDayImages[weekDay]} className="w-12 my-1" alt="" />
            <span>{`${weekDayTemps[weekDay].toFixed()}°`}</span>
          </div>
        ))}
      </div>
    </div>
    // return (
    //   <div>
    //     <h1 className="uppercase font-bold">{title}</h1>
    //     <hr className="my-2" />
    //     <div className="flex justify-around">
    //       {weatherData.map((item) => (
    //         <div key={item.dt} className="flex flex-col ">
    //           {/* <h2>{dayjs(item.dt_txt).format("dddd")}</h2> */}
    //           {/* <h2>{formatToLocalTime(item.dt, item.timezone, "hh:mm a")}</h2>  //hourly */}
    //           <h2>{formatToLocalTime(item.dt, item.timezone, "ccc")}</h2>
    //           <img
    //             src={iconUrlFromCode(item.weather[0].icon)}
    //             className="w-12 my-1"
    //             alt=""
    //           />
    //           <span>{`${item.main.temp.toFixed()}°`}</span>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
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
