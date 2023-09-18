import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

function Layout({ isOpenNav, setIsOpenNav }) {
  return (
    <section className="flex justify-center bg-[#faf5ff]">
      <div
        className={`
        ${isOpenNav && "lg:rounded-tr-none"}
        w-11/12 px-5 lg:w-3/5 my-4 py-5 lg:px-20 bg-contain bg-white text-slate-800 border border-[#e9d5ff] rounded-md h-fit shadow-xl`}
      >
        <Outlet />
      </div>
      <SideNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
    </section>
  );
}
export default Layout;
