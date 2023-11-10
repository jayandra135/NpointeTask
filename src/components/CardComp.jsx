import React, { useContext } from "react";
import { Row, Col, CardBody, Card, CardFooter } from "react-bootstrap";
import imgNA from "../assests/imageNA.png";
import CircularProgress from "@mui/material/CircularProgress";
import { MyNewContext } from "./contextApi/MyContext";
import poster from "../assests/new1.jpg";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const CardComp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const imgPath = "https://image.tmdb.org/t/p/w500";

  const { discoverData } = useContext(MyNewContext);
  console.log(discoverData);

  return (
    <>
      {discoverData && discoverData.length > 0 ? (
        <>
          <Row>
            <Col className="TabRow1" style={{ display: "none" }}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{
                      color: "white",
                      whiteSpace: "nowrap",
                      width: "100%",
                    }}
                  >
                    <Tab
                      label="New Release"
                      {...a11yProps(0)}
                      style={{ color: "white" }}
                    />
                    <Tab
                      label="Trending"
                      {...a11yProps(1)}
                      style={{ color: "white", whiteSpace: "nowrap" }}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Row>
                    {discoverData &&
                      discoverData.map((ele, index) => {
                        return (
                          <Col
                            lg={3}
                            md={4}
                            xs={6}
                            sm={6}
                            key={index}
                            className="mb-4"
                          >
                            <Card className="searchCard">
                              <CardBody className="cardBody">
                                <img
                                  src={
                                    ele.poster_path === null
                                      ? imgNA
                                      : imgPath + ele.poster_path
                                  }
                                  alt=""
                                />
                              </CardBody>
                              <p className="price">{ele.vote_average}</p>
                              <CardFooter>
                                <h2>{ele.title}</h2>
                                <p>{ele.release_date}</p>
                              </CardFooter>
                            </Card>
                          </Col>
                        );
                      })}
                  </Row>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Row>
                    {discoverData &&
                      discoverData.map((ele, index) => {
                        return (
                          <Col
                            lg={3}
                            md={4}
                            xs={6}
                            sm={6}
                            key={index}
                            className="mb-4"
                          >
                            <Card className="searchCard">
                              <CardBody className="cardBody">
                                <img
                                  src={
                                    ele.poster_path === null
                                      ? imgNA
                                      : imgPath + ele.poster_path
                                  }
                                  alt=""
                                />
                              </CardBody>
                              <p className="price">{ele.vote_average}</p>
                              <CardFooter>
                                <h2>{ele.title}</h2>
                                <p>{ele.release_date}</p>
                              </CardFooter>
                            </Card>
                          </Col>
                        );
                      })}
                  </Row>
                </CustomTabPanel>
              </Box>
            </Col>
          </Row>
          <Row>
            {discoverData &&
              discoverData.map((ele, index) => {
                return (
                  <Col
                    lg={3}
                    md={4}
                    xs={6}
                    sm={6}
                    key={index}
                    className="mb-4 TabRow2"
                    style={{ display: "block" }}
                  >
                    <Card className="searchCard">
                      <CardBody className="cardBody">
                        <img
                          src={
                            ele.poster_path === null
                              ? imgNA
                              : imgPath + ele.poster_path
                          }
                          alt=""
                        />
                      </CardBody>
                      <p className="price">{ele.vote_average}</p>
                      <CardFooter>
                        <h2>{ele.title}</h2>
                        <p>{ele.release_date}</p>
                      </CardFooter>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </>
      ) : (
        <Row className="d-flex justify-content-center">
          <CircularProgress />
        </Row>
      )}
    </>
  );
};

export default CardComp;
