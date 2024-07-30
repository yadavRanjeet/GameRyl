import React from "react";
import { AccountDetailCard } from "../components/AccountDetailCard";

export const AccountInfo = () => {
  return (
    <div className="bg-[#0f0728] min-h-screen">
      <div className="pt-20">
        <h1 className="text-white text-5xl font-bold text-center">
          Account Details
        </h1>
      </div>
      <div className="pt-16">
        <AccountDetailCard />
      </div>
    </div>
  );
};
