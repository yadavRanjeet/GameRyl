import React from "react";
import { IoCaretForward } from "react-icons/io5";

export const WithdrawMoneyCard = () => {
  return (
    <div className="mx-auto w-10/12 border-yellow-400 border-2  rounded-2xl px-16 bg-gradient-to-b from-[#35188c] to-[#140934] pt-20     ">
      <div className="flex w-[100%] flex-col items-center">
        <div className="pb-36 flex flex-col items-center w-[100%]">
          <div className="w-[35%]">
            <input
              type="text"
              placeholder="Enter Amount"
              className="border-2 border-yellow-400  rounded-lg w-[100%] py-2 px-4 bg-[#100828] text-white placeholder-white font-semibold "
            />
          </div>

          <div className="pt-4 w-[35%]">
            <p className="text-white font-semibold pb-2 text-center">
              Send Your Payment Request
            </p>
            <button className="w-[100%] border-2 border-yellow-400 bg-gradient-to-b from-[#35188c] to-[#140934] rounded-lg py-2 text-left px-4 text-white">
              <div className="flex flex-row justify-between">
                <p className="font-bold">Select</p>
                <IoCaretForward className={`text-white w-6 h-6 `} />
              </div>
            </button>
          </div>
        </div>
        <div>
          <button className="text-center text-white bg-gradient-to-b from-[#FFD700] to-[#998100]  px-24 font-semibold text-lg rounded-lg py-2 mb-2 ">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
