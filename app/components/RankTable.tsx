import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import rankData from "../api/mocks/score";

const RankTable = () => {
  const columns: GridColDef[] = [
    {
      field: "rank",
      headerName: "Rank",
      width: 150,
      sortable: true,
    },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      sortable: true,
    },
    {
      field: "mostScore",
      headerName: "Most Score",
      width: 150,
      sortable: true,
    },
    {
      field: "losses",
      headerName: "Losses",
      width: 150,
      sortable: true,
    },
    {
      field: "avgWinRate",
      headerName: "Avg Win Rate (%)",
      width: 200,
      sortable: true,
    },
    {
      field: "region",
      headerName: "Region",
      width: 150,
      sortable: true,
    },
  ];

  const rows = rankData.map((item, index) => ({
    id: index + 1,
    rank: index + 1,
    username: item.username,
    mostScore: item.mostScore,
    losses: item.losses,
    avgWinRate: item.avgWinRate,
    region: item.region,
  }));

  return (
    <Box sx={{ height: 500, width: "100%", minWidth: 200, overflow: "hidden", }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        sx={{
          color: "#fff",
        }}
      />
    </Box>
  );
};

export default RankTable;
