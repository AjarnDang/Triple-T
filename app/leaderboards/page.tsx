import React from "react";
import RankTable from "../components/RankTable";
import RankTopThree from "../components/RankTop3";

export default function page() {
  return (
    <div className="grow">
      <div className="my-8">
        <RankTopThree />
      </div>
      <div className="my-8">
        <RankTable />
      </div>
    </div>
  );
}
