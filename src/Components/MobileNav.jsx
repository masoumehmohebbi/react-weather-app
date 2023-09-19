import {
  IoDocumentTextOutline,
  IoHomeOutline,
  IoLogoGithub,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <nav className="sm:hidden mt-11 px-9 py-2 flex items-center justify-around fixed bottom-0 left-0 right-0 rounded-t-full bg-purple-100 shadow-md">
      <a
        href="https://github.com/masoumehmohebbi"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoGithub
          className="w-6 h-6 cursor-pointer transform hover:scale-110
            transition duration-500 text-pink-900"
        />
      </a>
      <Link to="/">
        <IoHomeOutline
          className="w-6 h-6 cursor-pointer transform hover:scale-110
            transition duration-500 text-pink-900"
        />
      </Link>
      <Link to={"about"}>
        <a href="#">
          <IoDocumentTextOutline
            className="w-6 h-6 cursor-pointer transform hover:scale-110
            transition duration-500 text-pink-900"
          />
        </a>
      </Link>
    </nav>
  );
}

export default MobileNav;
