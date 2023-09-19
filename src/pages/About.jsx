function About() {
  return (
    <section>
      <h1 className="font-bold text-lg flex items-center">
        React Weather App{" "}
        <span className="hidden sm:block ml-3">⊚⃝⸜(｡∵｡) ⋆｡°✩</span>
      </h1>
      <hr className="my-5" />
      <p>
        This is a Weather application. which I developed it with the TailwindCss
        library and the ReactJs library.This app built on top of the
        OpenWeatherMap API.
      </p>
      <hr className="my-5" />
      <p>
        <h2 className="font-bold">Built in hooks:</h2>
        <ul className="mt-3">
          <li>useState</li>
          <li>useEffect</li>
        </ul>
      </p>
      <hr className="my-5" />
      <p>
        <h2 className="font-bold">Custom hook:</h2>
        <ul className="mt-3">
          <li>useWeather</li>
        </ul>
      </p>
      <hr className="my-5" />
      <div>
        <h2 className="font-bold">Technologies used in this App:</h2>
        <ul className="mt-3">
          <li>HTML</li>
          <li>Tailwind css</li>
          <li>React Js</li>
          <li>Loader Spinner</li>
          <li>Axios</li>
          <li>React Router Dom</li>
          <li>Luxon</li>
          <li>React Hot Toast</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
