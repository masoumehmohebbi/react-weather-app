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
  const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;
  return (
    <section className="flex justify-between mt-8 items-center text-white">
      <img
        src={iconUrlFromCode(weather.weather[0].icon)}
        alt=""
        className="w-20"
      />
      <h2 className="text-5xl font-medium">{`${temp
        .toFixed()
        .slice(0, 2)}°`}</h2>
      <div className="flex items-start flex-col space-y-4">
        <div className="flex justify-center items-center space-x-1">
          <WiThermometerExterior size={24} />
          <h4>real feel:</h4>
          <span>{`${feels_like.toFixed().slice(0, 2)}°`}</span>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <WiHumidity size={24} />
          <h4>humidity:</h4>
          <span>{`${humidity.toFixed()}%`}</span>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <WiStrongWind size={24} />
          <h4>wind:</h4>
          <span>{`${weather.wind.speed.toFixed()} km/h`}</span>
        </div>
      </div>
    </section>
  );
}
export function Temperature({ weather }) {
  return (
    <section className="text-white space-x-3 flex my-8">
      <div className="flex space-x-1 items-center">
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
        <p>|</p>
      </div>
      <div className="flex space-x-1 items-center">
        <WiSunset size={25} />
        <h4>Set</h4>
        {formatToLocalTime(weather.sys.sunset, weather.sys.timezone, "hh:mm a")}
        <p>|</p>
      </div>
      <div className="flex space-x-1 items-center">
        <WiDirectionUp size={25} />
        <h4>High</h4>
        <span>{`${weather.main.temp_max.toFixed().slice(0, 2)}°`}</span>
        <p>|</p>
      </div>
      <div className="flex space-x-1 items-center">
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
