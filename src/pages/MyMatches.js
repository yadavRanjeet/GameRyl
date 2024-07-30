import React from "react";
import { MymatchesHeader } from "../components/MymatchesHeader";
import { harupGameTableData, jodiGameTableData } from "../utils/dataobjects";
import { MyMatchesTable } from "../components/MyMatchesTable";

export const MyMatches = () => {
  return (
    <div className="bg-[#0f0728] min-h-screen">
      <div className="pt-20">
        <MymatchesHeader />
      </div>

      <div className="pt-16">
        <MyMatchesTable tableData={harupGameTableData} />
      </div>
      <div className="pt-16 pb-16">
        <MyMatchesTable tableData={jodiGameTableData} />
      </div>
    </div>
  );
};
