import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Homepage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-[#3d3d3d] text-white">
      <div className="px-36 py-36">
        {user && (
          <div className="text-center">
            <h2>{user.name} </h2>
            <h2>{user.email}</h2>
          </div>
        )}
        {!user && (
          <div className="text-center">
            <h2 className="text-[#737070]">No user is logged in</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
