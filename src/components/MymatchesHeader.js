import React from "react";
import casino from "../Images/casino.png";
export const MymatchesHeader = () => {
  return (
    <div className="mx-auto w-9/12 border-yellow-400 border-2  rounded-2xl px-16 bg-gradient-to-b from-[#35188c] to-[#140934] flex flex-row justify-between ">
      <div className="flex flex-col align-middle justify-center mt-[-15px]">
        <h1 className="text-yellow-400 text-5xl font-bold">My Matches</h1>
        <p className="text-white font-semibold text-xs">
          Review Your Bets: Relive the Thrill of Every Match!
        </p>
      </div>
      <div className="">
        <img src={casino} className="h-44" alt="" />
      </div>
    </div>
  );
};
