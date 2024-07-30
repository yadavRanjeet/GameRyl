import React from "react";
import { PayNowCard } from "../components/PayNowCard";

export const PayNow = () => {
  return (
    <div className="bg-[#0f0728] min-h-screen">
      <div className="pt-20">
        <h1 className="text-white text-5xl font-bold text-center">Pay Now</h1>
      </div>
      <div className="pt-16">
        <PayNowCard />
      </div>
    </div>
  );
};
