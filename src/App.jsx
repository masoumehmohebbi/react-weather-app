import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Components/Layout";
import { useState } from "react";

function App() {
  const [isOpenNav, setIsOpenNav] = useState(true);

  return (
    <Routes>
      <Route
        element={<Layout isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />}
      >
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
