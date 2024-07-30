import React from "react";
import { RoyalMoneyCards } from "../components/RoyalMoneyCards";

export const Pricing = () => {
  return (
    <div className="bg-[#0f0728] min-h-screen">
      <div className="pt-20">
        <h1 className="text-yellow-400 text-5xl font-bold text-center">
          Royal Money ₹
        </h1>
      </div>
      <div className="pt-16">
        <RoyalMoneyCards />
      </div>
    </div>
  );
};
