import React from "react";
import { useNavigate } from "react-router-dom";
const cardsList = [
  { money: "100" },
  { money: "500" },
  { money: "1000" },
  { money: "5000" },
  { money: "10000" },
  { money: "20000" },
];
const RoyalMoneyCard = (item) => {
  const navigate = useNavigate();
  return (
    <div className=" border-yellow-400 border-2  rounded-3xl px-16  flex flex-col justify-center bg-gradient-to-b from-[#35188c] to-[#140934] pt-2 pb-6">
      <p className="text-center font-bold text-white text-3xl">
        ₹ {item.item.money}
      </p>
      <button
        className=" border-yellow-400 border-t-2  rounded-3xl py-2 mt-20  bg-[#37188E]"
        onClick={() => navigate("/payNow")}
      >
        <p className="text-center font-bold text-yellow-400 text-xl">Buy Now</p>
      </button>
    </div>
  );
};

export const RoyalMoneyCards = () => {
  return (
    <div className="mx-auto w-10/12 border-yellow-400 border-2  rounded-2xl px-16 bg-gradient-to-b from-[#35188c] to-[#140934]   ">
      <div className="w-[100%] flex flex-row flex-wrap px-12 justify-between gap-y-10 py-12">
        {cardsList.map((item, index) => (
          <div key={index} className="w-[31%]">
            <RoyalMoneyCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
