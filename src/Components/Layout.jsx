import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import MobileNav from "./MobileNav";

function Layout({ isOpenNav, setIsOpenNav }) {
  return (
    <section className="flex justify-center">
      <div
        className={`
        ${isOpenNav && "sm:rounded-tr-none"}
        w-11/12 px-5 lg:w-3/5 my-4 mb-11 py-5 lg:px-20 bg-contain bg-white text-slate-800 border border-[#e9d5ff] rounded-md h-fit shadow-xl`}
      >
        <Outlet />
        <MobileNav />
      </div>
      <SideNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
    </section>
  );
}
export default Layout;
