import React from "react";
import { Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
const Search = () => {
  return (
    <Row>
      <Col>
        <SearchBar>
          <Outlet />
        </SearchBar>
      </Col>
    </Row>
  );
};

export default Search;
