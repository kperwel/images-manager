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

  h1 {
    font-size: 15px;
  }
`;

const TopBar = () => <TopBarStyled><Link to="/"><h1>Images Manager</h1></Link></TopBarStyled>;

export default TopBar;
