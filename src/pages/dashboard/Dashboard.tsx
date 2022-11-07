import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Wrapper, SideBarStyled, OutletStyled } from "./style";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <SideBarStyled>
        <ul>
          <li>
            <Link to="/dashboard">Matches</Link>
          </li>
          <li>
            <Link to="admin-players">Players</Link>
          </li>
          <li
            onClick={() => {
              navigate("/login");
            }}
          >
            Logout
          </li>
        </ul>
      </SideBarStyled>
      <OutletStyled>
        <Outlet />
      </OutletStyled>
    </Wrapper>
  );
};

export default Dashboard;
