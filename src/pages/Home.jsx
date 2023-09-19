import Details, { Detail, Temperature } from "../Components/Details";
import Header, {
  NavBar,
  SearchBar,
  TimeAndLocation,
} from "../Components/Header";
import ForeCast from "../Components/Forecast";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
// import Loader from "../Components/Loader";

// const apiKey = import.meta.env.VITE_API_KEY;
// const apiUrl = import.meta.env.VITE_API_URL;

function Home({ weather, setQuery, query }) {
  const [activeMenu, setActiveMenu] = useState(1);
  // const [query, setQuery] = useState({ q: "tehran" });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get(`${apiUrl}/weather?q=${query.q}&appid=${apiKey}`)
  //       .then((res) => {
  //         toast.success((t) => (
  //           <div className="relative grid grid-cols-4 gap-2">
  //             <span className="col-span-3">
  //               {`Successfully fetched weather for ${res.data.name},${res.data.sys.country}.`}
  //             </span>
  //             <button
  //               className="col-span-1 text-red-600 text-xl absolute right-0 top-0 flex items-center justify-center"
  //               onClick={() => toast.dismiss(t.id)}
  //             >
  //               X
  //             </button>
  //           </div>
  //         ));
  //         return setWeather(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);

  // if (weather === null) {
  //   return (
  //     <div className="pt-64">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <>
      <Toaster position="top-right" />
      <Header>
        <NavBar
          setQuery={setQuery}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <SearchBar setQuery={setQuery} setActiveMenu={setActiveMenu} />
        <TimeAndLocation weather={weather} />
      </Header>
      <Details>
        <Detail weather={weather} />
        <Temperature weather={weather} />
      </Details>
      <ForeCast title={"Hourly forcast"} query={query} />
    </>
  );
}

export default Home;
