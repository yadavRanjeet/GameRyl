import React from "react";
import user from "../Images/user.jpg";
export const MyMatchesTable = ({ tableData }) => {
  return (
    <div className="mx-auto w-9/12 border-yellow-400 border-2  rounded-2xl overflow-hidden ">
      <div className="w-[100%] bg-black py-1">
        <p className="text-center text-white font-bold">
          {tableData.royalGameName}
        </p>
      </div>
      <table className="w-[100%]">
        <thead className=" px-12 w-[100%]   ">
          <tr className="bg-[#0F0728]  ">
            <th className="text-white font-bold text-left w-[30%] py-1 pl-4">
              {tableData.tableData[0].gameName}
            </th>
            <th className="text-white font-bold text-left w-[14%] py-1">
              {tableData.tableData[0].betAmount}
            </th>
            <th className="text-white font-bold  w-[14%] py-1 ">
              {tableData.tableData[0].betNumber}
            </th>
            <th className="text-white font-bold pr-2 w-[14%] py-1">
              {tableData.tableData[0].time}
            </th>
            <th className="text-white font-bold pr-2 w-[14%] py-1">
              {tableData.tableData[0].date}
            </th>
            <th className="text-white font-bold pr-2 w-[14%] py-1">
              {tableData.tableData[0].rewards}
            </th>
          </tr>
          {tableData.tableData.slice(1).map((item, index) => {
            return (
              <tr
                key={index}
                className={`
                ${index === 1 && "bg-gradient-to-b from-[#FFD700] to-[#998100]"}
                ${index === 2 && "bg-gradient-to-b from-[#05FF00] to-[#039900]"}
                ${index === 0 && "bg-gradient-to-b from-[#FF0000] to-[#990000]"}
               
                `}
              >
                <td className="py-1 text-white font-semibold pl-4">
                  <div className="flex flex-row gap-4 align-middle content-center items-center">
                    <img
                      src={user}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white"
                    />
                    {item.gameName}
                  </div>
                </td>
                <td className=" pl-10 py-1 text-white font-semibold">
                  {item.betAmount}
                </td>
                <td className="text-center py-1 text-white font-semibold">
                  {item.betNumber}
                </td>
                <td className="text-center py-1 text-white font-semibold">
                  {item.time}
                </td>
                <td className="text-center py-1 text-white font-semibold">
                  {item.date}
                </td>
                <td className="text-center py-1 text-white font-semibold">
                  {item.rewards}
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};
