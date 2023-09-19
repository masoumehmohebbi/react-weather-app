import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useWeather(apiUrl, apiKey) {
  const [query, setQuery] = useState({ q: "tehran" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      await axios
        .get(`${apiUrl}/weather?q=${query.q}&appid=${apiKey}`, { signal })
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
    return () => {
      controller.abort();
    };
  }, [query]);
  return { query, setQuery, weather };
}

export default useWeather;
