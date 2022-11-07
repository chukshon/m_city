import React from "react";
import TableBody from "@mui/material/TableBody";
import {
  TableContainerStyled,
  TableStyled,
  TableHeadStyled,
  TableHeadRowStyled,
  TableHeadCellStyled,
  TableBodyRowStyled,
  TableBodyCellStyled,
} from "./style";

type Props = {
  userData?: string[];
  loading: boolean;
  success?: boolean;
  error?: boolean;
};

const data = [
  {
    id: 1,
    date: "2022-01-01",
    Home: "Tottenham",
    Away: "Everton",
    scoreHome: 1,
    scoreAway: 2,
    played: true,
  },
  {
    id: 2,
    date: "2022-01-01",
    home: "Tottenham",
    away: "Everton",
    scoreHome: 1,
    scoreAway: 2,
    played: true,
  },
  {
    id: 3,
    date: "2022-01-01",
    Home: "Tottenham",
    Away: "Everton",
    scoreHome: 1,
    scoreAway: 2,
    played: true,
  },
];

const DataTable = ({ userData }: Props) => {
  const headers = ["Date", "Match", "Result", "Final"];
  const tableData = data.map((result) => {
    return {
      Date: result.date,
      Match: `${result.home} - ${result.away}`,
      Result: `${result.scoreHome} - ${result.scoreAway}`,
      Final: result.played ? "Played" : "Not-Played Yet",
    };
  });
  return (
    <TableContainerStyled>
      <TableStyled
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="table_styled"
      >
        <TableHeadStyled>
          <TableHeadRowStyled className={"table_head_row"}>
            {headers.map((item, index) => {
              return (
                <TableHeadCellStyled className={"table_head_cell"} key={index}>
                  <span>
                    <p>{item}</p>
                  </span>
                </TableHeadCellStyled>
              );
            })}
          </TableHeadRowStyled>
        </TableHeadStyled>
        <TableBody>
          {tableData &&
            tableData.map((row: any, index: any) => (
              <TableBodyRowStyled key={row.id}>
                {headers.map((item, index) => {
                  return (
                    <TableBodyCellStyled
                      key={index}
                      className="table_body_cell"
                    >
                      <div>{row[item]}</div>
                    </TableBodyCellStyled>
                  );
                })}
              </TableBodyRowStyled>
            ))}
        </TableBody>
      </TableStyled>
    </TableContainerStyled>
  );
};

export default DataTable;
