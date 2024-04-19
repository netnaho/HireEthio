import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NahomImage from "../assets/Nahom.jpg";

const NavBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  //   const currentUser = undefined;

  // useEffect(() => {
  //   window.addEventListener("click", (event) => {
  //     if (!profileRef.current?.contains(event.target)) setProfileOpen(false);
  //   });
  //   return window.removeEventListener("click", (event) => {
  //     if (profileRef.current && !profileRef.current?.contains(event.target)) {
  //       setProfileOpen(false);
  //     }
  //   });
  // }, [profileRef]);
  const currentUser = {
    id: 1,
    userName: "Nahom",
    isClient: false,
  };

  return (
    <div className=" bg-[#22577A] py-2">
      <div className="flex w-full px-3 md:w-[80%] mx-auto justify-between items-center text-white">
        <div className="text-3xl font-bold font-mono">
          <Link to="/">HireEthio</Link>
        </div>
        <div>
          <ul className="flex justify-between gap-x-4">
            {!currentUser && <li className="">Explore Jobs</li>}
            {currentUser ? (
              currentUser.isClient ? (
                <>
                  <li>
                    <Link to="/posts">Job posts</Link>
                  </li>
                  <li>
                    <Link to="/applicants">Applicants</Link>
                  </li>
                  <li>
                    <Link to="/messages">Messages</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/jobs">Explore Jobs</Link>
                  </li>
                  <li>
                    <Link to="/applications">Applications</Link>
                  </li>
                  <li>
                    <Link to="/messages">Messages</Link>
                  </li>
                </>
              )
            ) : (
              <>
                <li>About Us</li>
              </>
            )}
          </ul>
        </div>
        <div>
          {currentUser ? (
            <>
              <div className="flex items-center justify-center gap-x-4 relative">
                <div
                  onClick={() => {
                    setProfileOpen(!profileOpen);
                  }}
                  className=" w-10 h-10 rounded-full bg-[#E5E0FF] overflow-hidden cursor-pointer"
                >
                  <img src={NahomImage} alt="" />
                </div>
                <div>
                  <span className=" text-lg font-bold">nahom_net</span>
                </div>
                {profileOpen && (
                  <div
                    ref={profileRef}
                    className=" bg-[#3d7b4c] absolute top-[45px] right-0 text-slate-300 w-[150px] flex flex-col py-3 px-2 rounded-[7px]"
                  >
                    <span>Profile</span>
                    {currentUser.isClient ? (
                      <>
                        <span>Post a job</span>
                        <span>
                          <Link to="/hires">Hired Jobs</Link>
                        </span>
                      </>
                    ) : (
                      <span>
                        <Link to="/contracts">My Contracts</Link>
                      </span>
                    )}
                    <span>
                      <Link>Log out</Link>
                    </span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link>
                <button className="bg-[#38A3A5] px-4 py-1 rounded-full mr-3 font-medium">
                  Log in
                </button>
              </Link>
              <Link>
                <button className="bg-[#38A3A5] px-4 py-1 rounded-full mr-3 font-medium">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
