import React from "react";
import upload from "../Images/upload.png";
import qrCode from "../Images/qrdemo.png";
import { IoCaretForward } from "react-icons/io5";

export const PayNowCard = () => {
  return (
    <div className="mx-auto w-10/12 border-yellow-400 border-2  rounded-2xl px-16 bg-gradient-to-b from-[#35188c] to-[#140934] pt-20     ">
      <div className="flex w-[100%] flex-col items-center">
        <div className="pb-20 flex flex-row w-[100%]">
          <div className="w-[50%]">
            <div>
              <p className="text-yellow-400 font-semibold pb-2">
                Enter Your Details
              </p>
              <input
                type="text"
                placeholder="UPR Number"
                className="border-2 border-yellow-400  rounded-lg w-[50%] py-2 px-4 bg-[#100828] text-white placeholder-white font-semibold "
              />
            </div>

            <div className="pt-4">
              <p className="text-yellow-400 font-semibold pb-2">
                Send Payment Request
              </p>
              <button className="w-[50%] border-2 border-yellow-400 bg-gradient-to-b from-[#35188c] to-[#140934] rounded-lg py-2 text-left px-4 text-white">
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Select</p>
                  <IoCaretForward className={`text-white w-6 h-6 `} />
                </div>
              </button>
            </div>

            <div className="pt-4">
              <p className="text-yellow-400 font-semibold pb-2">
                Add ScreenShot
              </p>

              <button className="border-2 border-yellow-400  rounded-lg  py-2 px-4 bg-[#100828] text-white font-semibold ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={upload} className="h-7" />
                  <p className="">UPLOAD</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[50%] items-end ">
            <p className="text-yellow-400  font-semibold pb-2 text-lg pr-12">
              Amount ₹ 100
            </p>
            <img src={qrCode} alt="" className="h-52 w-52 rounded-lg" />
            <p className="text-white font-semibold pt-2 pr-16 text-xl">
              xyz@upi
            </p>
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
