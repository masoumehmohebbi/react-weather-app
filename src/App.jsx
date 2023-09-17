import { useEffect, useState } from "react";
import Details, { Detail, Temperature } from "./Components/Details";
import Header, { SearchBar, TimeAndLocation } from "./Components/Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ForeCast from "./Components/Forecast";

function App() {
  const [query, setQuery] = useState({ q: "rasht" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query.q}&appid=70e424f655b9c47fae9ea4df400c4cca`
        )
        .then((res) => {
          toast(
            `Successfully fetched weather for ${res.data.name}, ${res.data.sys.country}.`
          );
          return setWeather(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (weather === null) {
    return "Loading weather...";
  }

  return (
    <section className="flex justify-center bg-[#faf5ff]">
      <div className="mx-auto w-3/5 my-4 py-5 px-20 bg-contain bg-white text-slate-800 border border-[#e9d5ff] rounded-md h-fit shadow-xl">
        <Toaster />
        <Header>
          <SearchBar setQuery={setQuery} />
          <TimeAndLocation weather={weather} />
        </Header>
        <Details>
          <Detail weather={weather} />
          <Temperature weather={weather} />
        </Details>
        <ForeCast title={"Hourly forcast"} query={query} />
        {/* <ForeCast title={"daily forcast"} query={query} /> */}
      </div>
    </section>
  );
}

export default App;
