import React from "react";
import { WithdrawMoneyCard } from "../components/WithdrawMoneyCard";

export const WithdrawMoney = () => {
  return (
    <div className="bg-[#0f0728] min-h-screen">
      <div className="pt-20">
        <h1 className="text-white text-5xl font-bold text-center">
          Withdraw your money
        </h1>
      </div>
      <div className="pt-16">
        <WithdrawMoneyCard />
      </div>
    </div>
  );
};
