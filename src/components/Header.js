import React, { useEffect, useState } from "react";
import { IoCaretForward } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate hook
import logo from "../Images/royal_games_logo.png";
import { FaUser } from "react-icons/fa6";
import pricing from "../Images/pricing.png";
import withdraw from "../Images/withdraw.png";
import { IoIosInformationCircle } from "react-icons/io";
import support from "../Images/support.png";
function Header() {
  const [login, setLogin] = useState(true); // State to manage login
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate(); // Create a navigate function
  const [homeBtn, setHomeBtn] = useState(false);
  const [myMatchBtn, setMyMatchBtn] = useState(false);
  const [leaderboardBtn, setLeaderboardBtn] = useState(false);
  const [moreBtn, setMoreBtn] = useState(false);
  useEffect(() => {
    if ((location.pathname = "/")) {
      setHomeBtn(true);
    }
  }, []);
  const handleLogout = () => {
    // Handle logout logic here
    setLogin(false);
    setDropdownOpen(false); // Close the dropdown on logout
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="z-20 top-0 sticky">
      <div className="bg-gradient-to-r from-[#140934] to-[#35188c] flex py-4 px-8">
        {/* Logo */}
        <div className="w-4/12 flex items-center">
          <img className="h-16" src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="w-4/12 flex gap-6 justify-center items-center">
          <button
            className={`text-white hover:text-yellow-400 font-bold ${
              homeBtn === true ? "text-yellow-400" : "text-white"
            }`}
            onClick={() => {
              setMoreDropdownOpen(false);
              setHomeBtn(true);
              setMyMatchBtn(false);
              setLeaderboardBtn(false);
              setMoreBtn(false);
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className={`text-white hover:text-yellow-400 font-bold ${
              myMatchBtn === true ? "text-yellow-400" : "text-white"
            }`}
            onClick={() => {
              setMoreDropdownOpen(false);
              setHomeBtn(false);
              setMyMatchBtn(true);
              setLeaderboardBtn(false);
              setMoreBtn(false);
              navigate("/mymatches");
            }}
          >
            My matches
          </button>
          <button
            className={`text-white hover:text-yellow-400 font-bold ${
              leaderboardBtn === true ? "text-yellow-400" : "text-white"
            }`}
            onClick={() => {
              setMoreDropdownOpen(false);
              setHomeBtn(false);
              setMyMatchBtn(false);
              setLeaderboardBtn(true);
              setMoreBtn(false);
              navigate("/leaderboard");
            }}
          >
            Leaderboard
          </button>
          <div className="flex justify-center items-center space-x-2 ">
            <button
              className={`text-white  font-bold flex flex-row group ${
                moreBtn === true ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => {
                setMoreBtn(!moreBtn);
                setMoreDropdownOpen(!moreDropdownOpen);
                setHomeBtn(false);
                setMyMatchBtn(false);
                setLeaderboardBtn(false);
              }}
            >
              <p
                className={`text-white group-hover:text-yellow-400 ${
                  moreBtn === true ? "text-yellow-400" : "text-white"
                }`}
              >
                More
              </p>
              <IoCaretForward
                className={`text-white w-6 h-6 group-hover:text-yellow-400 transition-transform  ${
                  moreBtn === true ? "text-yellow-400" : "text-white"
                }
                ${moreBtn && "rotate-90"} `}
              />
            </button>
            {moreDropdownOpen && (
              <div className=" absolute right-[410px]  mt-24 w-40 bg-[#0F0728] shadow-lg rounded-md z-10">
                <ul className="py-2">
                  <li
                    onClick={() => {
                      setMoreDropdownOpen(false);
                      navigate("/pricing");
                    }}
                    className="px-4 py-2 flex flex-row text-white cursor-pointer text-center gap-2"
                  >
                    <img alt="" src={pricing} className={`h-7`} />
                    Pricing
                  </li>
                  <li
                    onClick={() => {
                      setMoreDropdownOpen(false);
                      navigate("/withdraw");
                    }}
                    className="px-4 py-2 flex flex-row text-white  cursor-pointer text-center gap-2"
                  >
                    <img alt="" src={withdraw} className={`h-7 `} />
                    Withdraw
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* User Information and Notifications */}
        <div className="w-4/12 flex justify-end items-center gap-4 relative">
          {/* Balance Button */}
          <button className="border-solid border-2 border-[#edb83a] text-[#edb83a] px-4 py-1 rounded-r-xl rounded-l-xl">
            ₹ 2000
          </button>

          {/* Notification Icon */}
          <FaBell className="text-yellow-400 w-6 h-6" />

          {/* Conditional Rendering for Login/User */}
          {login ? (
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">Username</span>
              {/* Dropdown Toggle */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white hover:text-yellow-400 font-bold flex items-center space-x-1"
                >
                  <IoCaretForward
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen && "rotate-90"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="  absolute right-0 mt-2 w-44 bg-[#0F0728] shadow-lg rounded-md z-10">
                    <ul className="py-2">
                      <li
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate("/account");
                        }}
                        className="px-4 py-2 text-white cursor-pointer text-center flex flex-row justify-center items-center gap-2"
                      >
                        <FaUser className="text-white " size={18} />
                        Account
                      </li>
                      <li
                        // onClick={handleLogout}
                        className="px-4 py-2 text-white cursor-pointer text-center flex flex-row justify-center items-center gap-2"
                      >
                        <IoIosInformationCircle
                          className="text-white"
                          size={20}
                        />
                        About us
                      </li>
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 text-white cursor-pointer text-center flex flex-row justify-center items-center gap-2"
                      >
                        <img src={support} alt="" className="h-5" />
                        Support
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={handleLoginClick} // Redirect to login page
              className="text-white hover:text-yellow-400 font-bold"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
