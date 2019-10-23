import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBarStyled = styled.div`
  background: #0e2f5a;
  padding: 10px;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const TopBar = () => <TopBarStyled><Link to="/">Images Manager</Link></TopBarStyled>;

export default TopBar;
