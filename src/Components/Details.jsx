import {
  WiDirectionUp,
  WiHumidity,
  WiMoonAltNew,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometerExterior,
} from "react-icons/wi";
function Details() {
  return (
    <section className="flex flex-col ">
      <Detail />
      <Temperature />
    </section>
  );
}

export default Details;

function Detail() {
  return (
    <section className="flex justify-between mt-8 items-center text-white">
      <WiMoonAltNew size={50} className="text-red-500" />
      <h2 className="text-5xl font-medium">19°</h2>
      <div className="flex items-start flex-col space-y-4">
        <p className="flex justify-center items-center space-x-1">
          <WiThermometerExterior size={24} />
          <h4>real feel:</h4>
          <span>18°</span>
        </p>
        <p className="flex justify-center items-center space-x-1">
          <WiHumidity size={24} />
          <h4>humidity:</h4>
          <span>3km/h</span>
        </p>
        <p className="flex justify-center items-center space-x-1">
          <WiStrongWind size={24} />
          <h4>wind:</h4>
          <span>43%</span>
        </p>
      </div>
    </section>
  );
}
function Temperature() {
  return (
    <div className="text-white space-x-3 flex my-8">
      <p className="flex space-x-1 items-center">
        <WiSunrise size={25} />
        <h4>Rise</h4>
        <span>04:50</span>
        <span>AM</span>
        <p>|</p>
      </p>
      <p className="flex space-x-1 items-center">
        <WiSunset size={25} />
        <h4>Set</h4>
        <span>04:50</span>
        <span>AM</span>
        <p>|</p>
      </p>
      <p className="flex space-x-1 items-center">
        <WiDirectionUp size={25} />
        <h4>High</h4>
        <span>04:50</span>
        <span>AM</span>
        <p>|</p>
      </p>
      <p className="flex space-x-1 items-center">
        <WiDirectionUp size={25} className="rotate-180" />
        <h4>Low</h4>
        <span>04:50</span>
        <span>AM</span>
      </p>
    </div>
  );
}
