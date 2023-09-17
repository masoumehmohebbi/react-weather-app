import { CiSearch } from "react-icons/ci";
import { formatToLocalTime } from "./Details";
import { useState } from "react";

function Header({ children }) {
  return <div>{children}</div>;
}

export default Header;

export const NavBar = ({ setQuery }) => {
  const [activeMenu, setActiveMenu] = useState(1);
  const cities = [
    {
      id: 1,
      title: "Tehran",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  const handleButton = (cityId, cityTitle) => {
    setQuery({ q: cityTitle });
    setActiveMenu(cityId);
  };

  return (
    <nav className="flex justify-around text-purple-800 font-bold text-xs lg:text-lg mb-11">
      {cities &&
        cities.map((city) => (
          <div key={city.id} className="flex flex-col">
            <button
              onClick={() => handleButton(city.id, city.title)}
              className={`cursor-pointer transform hover:scale-110
            transition duration-500 ${
              activeMenu === city.id && "text-pink-500"
            }`}
            >
              {city.title}
            </button>
            <span
              className={`h-[2px] w-full none bg-pink-500 duration-150 ${
                activeMenu === city.id ? "h-[2px]" : "h-0"
              }`}
            ></span>
          </div>
        ))}
    </nav>
  );
};

export const SearchBar = ({ setQuery }) => {
  const handleInput = (value) => {
    setQuery({ q: value });

    if (value === "") {
      setQuery({ q: "tehran" });
    }
  };
  return (
    <section className="my-8 flex w-full">
      <div className="w-full flex items-center justify-center relative">
        <input
          onChange={(e) => handleInput(e.target.value)}
          className="outline-none text-xl capitalize font-light p-1 lg:p-2 w-full border-2 bg-purple-200 focus:bg-purple-300 placeholder:text-purple-400 text-purple-800 border-purple-300 rounded-md placeholder:lowercase placeholder:text-sm lg:placeholder:text-lg pr-11 lg:pr-11"
          type="text"
          placeholder="search for city..."
        />

        <CiSearch
          className="mx-2 cursor-pointer absolute right-0 pl-1
            text-purple-500 text-3xl lg:text-4xl border-l border-purple-400"
        />
      </div>
    </section>
  );
};

export const TimeAndLocation = ({ weather }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="capitalize text-xs lg:text-base mb-4">
        {formatToLocalTime(weather.dt, weather.sys.timezone)}
      </p>
      <h1 className="text-3xl lg:text-4xl font-medium text-fuchsia-600">{`${weather.name}, ${weather.sys.country}`}</h1>
      <p className="text-xl">{weather.weather[0].main}</p>
    </div>
  );
};
