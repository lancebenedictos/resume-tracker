import { Link, Outlet } from "react-router-dom";
import RightPane from "./RightPane";
import useUser from "@/hooks/useUser";

function Navbar() {
  const { user, isError, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <nav className="fixed top-0 h-[40px] z-10 bg-white w-full shadow-md">
        <div className="w-[90%] h-full mx-auto flex items-center  p-2">
          <Link to="/">Home</Link>

          <RightPane user={user} isError={isError} />
        </div>
      </nav>

      <div className="mt-[40px]">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
