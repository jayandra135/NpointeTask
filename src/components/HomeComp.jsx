import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const HomeComp = () => {
  return (
    <>
      <Row className="homeRow">
        <Col>
          <Sidebar>
            <Outlet />
          </Sidebar>
        </Col>
      </Row>
    </>
  );
};

export default HomeComp;
