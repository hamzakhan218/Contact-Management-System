import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await setUser(null);
    localStorage.clear();
    navigate(0);
    navigate("/", { replace: true });
  };
  return (
    <div className="bg-black text-white px-5">
      <div className="flex  justify-between align-bottom">
        <Link to={"/"} className="flex items-center">
          <div>
            <h1 className="text-xl ">Contact Management System</h1>
          </div>
        </Link>
        {!user && (
          <>
            <Link to={"/login"} className="text-xs flex items-center">
              <div>
                <h1 className="h-full align-bottom">LOGIN</h1>
              </div>
            </Link>
            <Link to={"/register"} className="text-xs flex items-center">
              <div>
                <h1 className="align-bottom h-full py-2">REGISTER</h1>
              </div>
            </Link>
          </>
        )}
        {user && (
          <button
            className="bg-[#ad1010] text-white px-5 my-2 rounded-2xl py-1"
            onClick={async () => {
              await handleLogout();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
