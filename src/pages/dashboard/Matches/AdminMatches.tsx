import React from "react";
import DataTable from "../../../components/DataTable/DataTable";
import { Wrapper } from "./style";

const AdminMatches = () => {
  return (
    <Wrapper>
      <h2>The Matches</h2>
      <DataTable />
    </Wrapper>
  );
};

export default AdminMatches;
