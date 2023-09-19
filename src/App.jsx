import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Components/Layout";
import Loader from "./Components/Loader";
import useWeather from "./hooks/useWeather";
import { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [isOpenNav, setIsOpenNav] = useState(true);

  const { query, setQuery, weather } = useWeather(apiUrl, apiKey);

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
