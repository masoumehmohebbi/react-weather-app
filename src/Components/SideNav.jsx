import {
  IoClose,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoLogoGithub,
} from "react-icons/io5";
function SideNav({ isOpenNav, setIsOpenNav }) {
  return (
    <nav
      className={`
    ${isOpenNav ? "hidden lg:flex" : "hidden lg:flex lg:opacity-0"}
    bg-purple-200 my-4 h-fit space-y-5 p-1 rounded-r-md ease-in-out transition-opacity flex-col sticky top-0`}
    >
      <IoClose
        onClick={(isOpen) => setIsOpenNav(!isOpen)}
        size={25}
        className="text-red-600 cursor-pointer transform hover:scale-110
        transition duration-500"
      />
      {/* <Link to="/"> */}
      <IoHomeOutline
        size={25}
        className="cursor-pointer transform hover:scale-110
            transition duration-500"
      />
      {/* </Link> */}
      <a href="https://github.com/masoumehmohebbi">
        <IoLogoGithub
          size={25}
          className="cursor-pointer transform hover:scale-110
            transition duration-500"
        />
      </a>
      {/* <Link to={"/"}>A</Link> */}
      <a href="#">
        <IoDocumentTextOutline
          size={25}
          className="cursor-pointer transform hover:scale-110
            transition duration-500"
        />
      </a>
    </nav>
  );
}

export default SideNav;
