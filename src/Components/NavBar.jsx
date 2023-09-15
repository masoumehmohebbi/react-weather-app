import { WiCloud } from "react-icons/wi";
import { IoLogoGithub } from "react-icons/io5";
function NavBar() {
  return (
    <nav className="flex justify-between p-2 px-24 text-slate-800">
      <h1 className="text-xl font-bold flex items-center">
        <WiCloud size={35} className="mr-1" /> reactWeatherApp
      </h1>
      <div className="flex space-x-11 items-center">
        <h2 className="text-xl font-semibold">About</h2>
        <a href="#">
          <IoLogoGithub size={35} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
