"use client";

import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { DataTable } from "simple-datatables";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import "simple-datatables/dist/style.css";
import rankData from "../api/mocks/score";

const RankTable = () => {
  const tableRef = useRef(null);

  const columns = [
    "Rank",
    "Username",
    "Most Score",
    // "Losses",
    "Win Rate",
    "Region",
  ];

  const rows = rankData.map((item, index) => [
    index + 1,
    item.username,
    item.mostScore,
    // item.losses,
    item.avgWinRate + ' %',
    item.region,
  ]);

  useEffect(() => {
    if (tableRef.current) {
      new DataTable(tableRef.current, {
        searchable: false,
        fixedHeight: true,
      });
    }
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <div className="table-wrapper overflow-x-auto">
          <table
            ref={tableRef}
            className="min-w-[400px]"
            id="default-table"
          >
            <thead>
              <tr>
                {columns.map((item, index) => (
                  <th key={index}>
                    <span className="flex items-center">
                      {item}
                      <UnfoldMoreIcon />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
};

export default RankTable;
