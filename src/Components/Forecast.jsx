import { WiDayCloudy } from "react-icons/wi";
function ForeCast({ title }) {
  return (
    <section className="mt-8 text-white">
      <h1 className="uppercase font-bold">{title}</h1>
      <hr className="my-2" />
      <div className="flex space-x-8">
        <p className="flex flex-col items-center">
          <h5>02:00 PM</h5>
          <WiDayCloudy className="my-4" size={35} />
          <h5>19°</h5>
        </p>
      </div>
    </section>
  );
}

export default ForeCast;
