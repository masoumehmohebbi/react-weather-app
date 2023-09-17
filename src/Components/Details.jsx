import { DateTime } from "luxon";
import {
  WiDirectionUp,
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometerExterior,
} from "react-icons/wi";

export default function Details({ children }) {
  return <section className="flex flex-col ">{children}</section>;
}

export function Detail({ weather }) {
  const { feels_like, humidity, temp } = weather.main;

  return (
    <section className="flex flex-wrap justify-between mt-8 items-center">
      <img src={iconUrlFromCode(weather.weather[0].icon)} alt="" />
      <h2 className="text-4xl lg:text-5xl font-medium">{`${temp
        .toFixed()
        .slice(0, 2)}°`}</h2>
      <div className="flex items-start flex-col space-y-4 mx-auto lg:mx-0">
        <div className="flex justify-center items-center space-x-1">
          <WiThermometerExterior className="text-pink-600" size={26} />
          <h4>real feel:</h4>
          <span>{`${feels_like.toFixed().slice(0, 2)}°`}</span>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <WiHumidity className="text-pink-600" size={26} />
          <h4>humidity:</h4>
          <span>{`${humidity.toFixed()}%`}</span>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <WiStrongWind className="text-pink-600" size={26} />
          <h4>wind:</h4>
          <span>{`${weather.wind.speed.toFixed()} km/h`}</span>
        </div>
      </div>
    </section>
  );
}
export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
export function Temperature({ weather }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-8">
      <div className="flex space-x-1 items-center justify-center sm:justify-normal bg-purple-300 p-1">
        <WiSunrise size={25} />
        <h4>Rise</h4>
        <span>
          {" "}
          {formatToLocalTime(
            weather.sys.sunrise,
            weather.sys.timezone,
            "hh:mm a"
          )}
        </span>
      </div>
      <div className="flex space-x-1 items-center justify-center sm:justify-normal bg-fuchsia-300 p-1">
        <WiSunset size={25} />
        <h4>Set</h4>
        {formatToLocalTime(weather.sys.sunset, weather.sys.timezone, "hh:mm a")}
      </div>
      <div className="flex space-x-1 items-center justify-center sm:justify-normal bg-purple-300 p-1">
        <WiDirectionUp size={25} />
        <h4>High</h4>
        <span>{`${weather.main.temp_max.toFixed().slice(0, 2)}°`}</span>
      </div>
      <div className="flex space-x-1 items-center justify-center sm:justify-normal bg-fuchsia-300 p-1">
        <WiDirectionUp size={25} className="rotate-180" />
        <h4>Low</h4>
        <span>{`${weather.main.temp_min.toFixed().slice(0, 2)}°`}</span>
      </div>
    </section>
  );
}

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export { formatToLocalTime };
