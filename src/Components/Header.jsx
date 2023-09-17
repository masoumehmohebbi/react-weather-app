import { CiLocationOn, CiSearch } from "react-icons/ci";
import { formatToLocalTime } from "./Details";

function Header({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Header;

const NavBar = () => {
  const cities = [
    {
      id: 1,
      title: "Rasht",
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

  return (
    <nav className="flex justify-around text-purple-800 font-bold">
      {cities &&
        cities.map((city) => (
          <button className="cursor-pointer" key={city.id}>
            {city.title}
          </button>
        ))}
    </nav>
  );
};

export const SearchBar = ({ setQuery }) => {
  return (
    <section className="my-8 flex w-full">
      <div className="w-3/4 flex items-center">
        <input
          onChange={(e) => setQuery({ q: e.target.value })}
          className="focus:outline-none text-xl capitalize font-light p-2 w-full focus:border-2 bg-purple-200 text-slate-50 placeholder:text-purple-400 focus:border-purple-300 rounded-md placeholder:lowercase placeholder:text-lg"
          type="text"
          placeholder="search for city..."
        />
        <CiSearch size={28} className="mx-2" />
        <CiLocationOn size={28} className="mx-1" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl font-light transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl mx-1">|</p>
        <button
          name="imperial"
          className="text-xl font-light transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </section>
  );
};

export const TimeAndLocation = ({ weather }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="capitalize">
        {formatToLocalTime(weather.dt, weather.sys.timezone)}
      </p>
      <h1 className="text-4xl font-medium text-fuchsia-600">{`${weather.name}, ${weather.sys.country}`}</h1>
      <p className="text-xl">{weather.weather[0].main}</p>
    </div>
  );
};
