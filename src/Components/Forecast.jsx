/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { WiDayCloudy } from "react-icons/wi";
function ForeCast({ title, weather }) {
  console.log(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=70e424f655b9c47fae9ea4df400c4cca`
  );
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=70e424f655b9c47fae9ea4df400c4cca`
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    fetchData;
  }, []);
  return (
    <section className="mt-8 text-white">
      <h1 className="uppercase font-bold">{title}</h1>
      <hr className="my-2" />
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <h5>02:00 PM</h5>
          <WiDayCloudy className="my-4" size={35} />
          <h5>19°</h5>
        </div>
      </div>
    </section>
  );
}

export default ForeCast;
