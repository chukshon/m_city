import React from "react";
import DataTable from "../../../components/DataTable/DataTable";
import { Wrapper } from "../Matches/style";

const AdminPlayers = () => {
  return (
    <Wrapper>
      <h2>The Players</h2>
      <DataTable />
    </Wrapper>
  );
};

export default AdminPlayers;
