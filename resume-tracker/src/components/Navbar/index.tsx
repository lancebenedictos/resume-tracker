import { Link, Outlet, useLocation } from "react-router-dom";
import RightPane from "./RightPane";
import useUser from "@/hooks/useUser";
import Loader from "../ui/Loader";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function Navbar() {
  const { user, isError, isLoading } = useUser();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // execute on location change

    setIsOpen(false);
  }, [location]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <nav className="fixed top-0 h-[40px] z-10 bg-white w-full shadow-md">
        <div className="w-[90%] h-full mx-auto flex items-center justify-between p-2">
          <Link to="/">Home</Link>

          <div className="hidden md:block">
            <RightPane user={user} isError={isError} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" text-2xl flex items-center justify-center"
            >
              {isOpen ? <HiOutlineXMark /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      <div className="mt-[40px] ">
        <Outlet />
      </div>

      {isOpen && (
        <div className=" fixed top-0 left-0 w-screen h-screen bg-slate-200 md:hidden">
          <RightPane user={user} isError={isError} isVertical />
        </div>
      )}
    </>
  );
}

export default Navbar;
