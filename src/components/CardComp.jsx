import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import imgNA from "../assests/imageNA.png";
import CircularProgress from "@mui/material/CircularProgress";
import { MyNewContext } from "./contextApi/MyContext";

const CardComp = () => {
  const imgPath = "https://image.tmdb.org/t/p/w500";

  const { discoverData } = useContext(MyNewContext);

  return (
    <>
      {discoverData && discoverData.length > 0 ? (
        <Row>
          {discoverData &&
            discoverData.map((ele, index) => {
              return (
                <Col lg={3} md={4} xs={6} key={index} className="mb-4">
                  <div className="wrapper">
                    <div className="card">
                      <img
                        src={
                          ele.poster_path === null
                            ? imgNA
                            : imgPath + ele.poster_path
                        }
                        alt=""
                      />
                      <div className="descriptions">
                        <h5>{ele.title}</h5>
                        {/*     <p>{ele.overview}</p> */}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      ) : (
        <Row className="d-flex justify-content-center">
          <CircularProgress />
        </Row>
      )}
    </>
  );
};

export default CardComp;
