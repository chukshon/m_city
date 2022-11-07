import React from "react";
import DataTable from "../../../components/DataTable/DataTable";
import { Wrapper } from "./style";

const AdminMatches = () => {
  return (
    <Wrapper>
      <div className="heading">
        <h1>The Matches</h1>
        <DataTable />
      </div>
    </Wrapper>
  );
};

export default AdminMatches;
