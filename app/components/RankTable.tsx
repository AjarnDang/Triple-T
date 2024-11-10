"use client";

import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import rankData from "../api/mocks/score";

interface Data {
  username: string;
  mostScore: number;
  losses: number;
  avgWinRate: number;
  region: string;
}

type Order = "asc" | "desc";

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: "rank", numeric: false, label: "Rank" },
  { id: "username", numeric: false, label: "Username" },
  { id: "mostScore", numeric: true, label: "Most Score" },
  { id: "losses", numeric: true, label: "Losses" },
  { id: "avgWinRate", numeric: true, label: "Average Win Rate (%)" },
  { id: "region", numeric: false, label: "Region" },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function RankTable() {
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("mostScore");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      [...rankData]
        .sort(getComparator(order, orderBy))
        .slice(3 + page * rowsPerPage, 3 + page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          backgroundColor: "transparent",
          color: "#ffffff",
          boxShadow: "none",
          overflow: "hidden",
          //   border: "1px solid #333",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 520,
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#333333",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#cfcfcf",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#cccccc",
            },
          }}
        >
          <Table stickyHeader aria-labelledby="tableTitle" size="medium">
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    sortDirection={orderBy === headCell.id ? order : false}
                    sx={{
                      color: "#cfcfcf !important",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      backgroundColor: "#161b22",
                      borderBottom: "none",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={(event) => handleRequestSort(event, headCell.id)}
                      sx={{
                        "&:hover": {
                          color: "#cfcfcf !important",
                          "& .MuiTableSortLabel-icon": {
                            fill: "#cfcfcf !important",
                          },
                        },
                        "&.Mui-active": {
                          color: "#cfcfcf",
                          "& .MuiTableSortLabel-icon": {
                            fill: "#cfcfcf",
                          },
                        },
                      }}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.username);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.username)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.username}
                    selected={isItemSelected}
                    sx={{
                      color: "#ffffff",
                      padding: "10px",
                      backgroundColor: isItemSelected
                        ? alpha("#ff8c00", 0.2)
                        : "transparent",
                      border: "none",
                      "&:hover": {
                        backgroundColor: alpha("#ff8c00", 0.1),
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "#ffffff",
                        padding: "10px",
                        borderBottom: "none",
                      }}
                    >
                      {page * rowsPerPage + index + 4}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      sx={{
                        color: "#ffffff",
                        padding: "10px",
                        borderBottom: "none",
                      }}
                    >
                      {row.username}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "#ffffff",
                        padding: "10px",
                        borderBottom: "none",
                      }}
                    >
                      {row.mostScore}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "#ffffff",
                        padding: "10px",
                        borderBottom: "none",
                      }}
                    >
                      {row.losses}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "#ffffff",
                        padding: "10px",
                        borderBottom: "none",
                      }}
                    >
                      {row.avgWinRate}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: "#ffffff",
                        padding: "10px",
                        borderBottom: "none",
                      }}
                    >
                      {row.region}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rankData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            backgroundColor: "#161b22",
            color: "#cfcfcf",
            "& .MuiTablePagination-select": {
              color: "#cfcfcf",
            },
          }}
        />
      </Paper>
    </Box>
  );
};
