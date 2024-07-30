import React from "react";
import user from "../Images/user.jpg";
import crown from "../Images/crown.png";
export const LeaderBoardHeader = () => {
  return (
    <div className="mx-auto w-9/12 border-yellow-400 border-2  rounded-2xl px-16 bg-gradient-to-b from-[#35188c] to-[#140934] flex flex-row justify-between pt-16">
      <div className="flex flex-col align-middle justify-center mt-[-30px]">
        <h1 className="text-yellow-400 text-6xl font-bold">Leaderboard</h1>
        <p className="text-white font-semibold text-xs">
          Rise to the Top: Track Your Betting Brilliance on the Leaderboard!
        </p>
      </div>
      <div className="flex gap-x-5">
        <div className="flex flex-col gap-1 justify-end ">
          <img
            src={user}
            alt=""
            className="h-20 w-20 rounded-full border-[#FF0000] border-4 "
          />
          <div className="w-20 bg-[#FF0000] rounded-t-full h-10 text-center  justify-center content-center">
            <p className="text-black font-bold">3</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-end ">
          <img
            src={user}
            alt=""
            className="h-20 w-20 rounded-full border-[#05FF00] border-4 "
          />
          <div className="w-20 bg-[#05FF00] rounded-t-full h-16 justify-center content-center align-middle">
            <p className="text-black font-bold text-center">2</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-end">
          <img src={crown} alt="" className="relative ml-[-20px] mb-[-6px]  " />
          <img
            src={user}
            alt=""
            className="h-20 w-20 rounded-full border-[#FFD700] border-4 "
          />
          <div className="w-20 bg-[#FFD700] rounded-t-full h-24 justify-center content-center align-middle">
            <p className="text-black font-bold text-center">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
