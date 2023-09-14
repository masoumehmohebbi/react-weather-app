import ForeCast from "./Components/ForeCast";
import Header from "./Components/Header";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-cyan-600 bg-gradient-to-br h-fit shadow-xl shadow-gray-400">
      <Header />
      <ForeCast title={"Hourly forcast"} />
      <ForeCast title={"daily forcast"} />
    </div>
  );
}

export default App;
