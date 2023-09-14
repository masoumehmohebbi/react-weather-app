import { CiLocationOn, CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div>
      <NavBar />
      <SeatchBar />
      <TimeAndLocation />
    </div>
  );
}

export default Header;

const NavBar = () => {
  const cities = [
    {
      id: 1,
      title: "London",
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
    <nav className="text-white flex justify-around">
      {cities &&
        cities.map((city) => (
          <button className="cursor-pointer" key={city.id}>
            {city.title}
          </button>
        ))}
    </nav>
  );
};

const SeatchBar = () => {
  return (
    <section className="my-8 flex w-full">
      <div className="w-3/4 flex items-center">
        <input
          className="focus:outline-none text-xl font-light p-2 w-full shadow-xl  capitalize placeholder:lowercase"
          type="text"
          placeholder="search for city..."
        />
        <CiSearch size={28} className="text-white mx-2" />
        <CiLocationOn size={28} className="text-white mx-1" />
      </div>
      <div className="flex text-white flex-row w-1/4 items-center justify-center">
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

const TimeAndLocation = () => {
  return (
    <div className="flex flex-col text-white items-center space-y-4">
      <p className="uppercase">tusday, 31 may 2022 | local time : 000 PM</p>
      <p className="text-xl">Clear</p>
    </div>
  );
};
