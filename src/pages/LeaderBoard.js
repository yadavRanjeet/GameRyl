import React from "react";
import { LeaderBoardHeader } from "../components/LeaderBoardHeader";
import { leaderboardtableData } from "../utils/dataobjects";
import { LeaderBoardTable } from "../components/LeaderBoardTable";
export const LeaderBoard = () => {
  return (
    <div className="bg-[#0f0728] min-h-screen">
      <div className="pt-20">
        <LeaderBoardHeader />
      </div>

      <div className="pt-16 pb-16">
        <LeaderBoardTable tableData={leaderboardtableData} />
      </div>
    </div>
  );
};
