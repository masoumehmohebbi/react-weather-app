import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Components/Layout";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import toast from "react-hot-toast";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [isOpenNav, setIsOpenNav] = useState(true);
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "tehran" });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${apiUrl}/weather?q=${query.q}&appid=${apiKey}`)
        .then((res) => {
          toast.success((t) => (
            <div className="relative grid grid-cols-4 gap-2">
              <span className="col-span-3">
                {`Successfully fetched weather for ${res.data.name},${res.data.sys.country}.`}
              </span>
              <button
                className="col-span-1 text-red-600 text-xl absolute right-0 top-0 flex items-center justify-center"
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
    <Routes>
      <Route
        element={
          <Layout
            isOpenNav={isOpenNav}
            setIsOpenNav={setIsOpenNav}
            weather={weather}
          />
        }
      >
        <Route
          path="/"
          exact
          element={<Home weather={weather} setQuery={setQuery} query={query} />}
        />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
