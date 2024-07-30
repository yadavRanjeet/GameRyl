import React from "react";
import user from "../Images/user.jpg";
export const LeaderBoardTable = ({ tableData }) => {
  return (
    <div className="mx-auto w-9/12 border-yellow-400 border-2  rounded-2xl overflow-hidden ">
      <table className="w-[100%]">
        <thead className=" px-12 w-[100%]   ">
          <tr className="bg-black  ">
            <th className="text-white font-bold w-[10%] py-1">
              {tableData[0].rank}
            </th>
            <th className="text-white font-bold text-left w-[50%] py-1">
              {tableData[0].name}
            </th>
            <th className="text-white font-bold  w-[20%] py-1 ">
              {tableData[0].TotalBets}
            </th>
            <th className="text-white font-bold pr-2 w-[20%] py-1">
              {tableData[0].RoyalWins}
            </th>
          </tr>
          {tableData.slice(1).map((item, index) => {
            return (
              <tr
                key={index}
                className={`
                ${index === 0 && "bg-gradient-to-b from-[#FFD700] to-[#998100]"}
                ${index === 1 && "bg-gradient-to-b from-[#05FF00] to-[#039900]"}
                ${index === 2 && "bg-gradient-to-b from-[#FF0000] to-[#990000]"}
                ${index % 2 === 0 ? "bg-[#37188E]" : "bg-[#210E55] "}
                `}
              >
                <td className="text-center py-1 text-white font-semibold ">
                  {item.rank}
                </td>
                <td className="py-1 text-white font-semibold">
                  <div className="flex flex-row gap-4 align-middle content-center items-center">
                    <img
                      src={user}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white"
                    />
                    {item.name}
                  </div>
                </td>
                <td className="text-center py-1 text-white font-semibold">
                  {item.TotalBets}
                </td>
                <td className="text-center py-1 text-white font-semibold">
                  {item.RoyalWins}
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};
