import { useEffect, useState } from "react";
import Details, { Detail, Temperature } from "./Components/Details";
import Header, {
  NavBar,
  SearchBar,
  TimeAndLocation,
} from "./Components/Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ForeCast from "./Components/Forecast";
import Loader from "./Components/Loader";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [query, setQuery] = useState({ q: "tehran" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${apiUrl}/weather?q=${query.q}&appid=${apiKey}`)
        .then((res) => {
          toast.success((t) => (
            <div className="relative">
              <span>
                `Successfully fetched weather for ${res.data.name},$
                {res.data.sys.country}.`
              </span>
              <button
                className="p-2 text-red-500 absolute right-0 top-0 flex items-center justify-center"
                onClick={() => toast.dismiss(t.id)}
              >
                X
              </button>
            </div>
          ));
          return setWeather(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (weather === null) {
    return (
      <div className="pt-64">
        <Loader />
      </div>
    );
  }

  return (
    <section className="flex justify-center bg-[#faf5ff]">
      <div className="mx-auto w-11/12 px-5 lg:w-3/5 my-4 py-5 lg:px-20 bg-contain bg-white text-slate-800 border border-[#e9d5ff] rounded-md h-fit shadow-xl">
        <Toaster position="top-right" />
        <Header>
          <NavBar setQuery={setQuery} />
          <SearchBar setQuery={setQuery} />
          <TimeAndLocation weather={weather} />
        </Header>
        <Details>
          <Detail weather={weather} />
          <Temperature weather={weather} />
        </Details>
        <ForeCast title={"Hourly forcast"} query={query} />
      </div>
    </section>
  );
}

export default App;
