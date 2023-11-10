import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardFooter,
} from "react-bootstrap";
import "../App.css";

import new1 from "../assests/new1.jpg";
import new2 from "../assests/new2.jpg";
import new3 from "../assests/new3.jpg";
import new4 from "../assests/new4.jpg";
import pop1 from "../assests/pop1.jpg";
import pop2 from "../assests/pop2.jpg";
import pop3 from "../assests/pop3.jpg";
import pop4 from "../assests/pop4.jpg";
import profile from "../assests/profileImg.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { AiOutlineWifi } from "react-icons/ai";

const Mainpage = () => {
  const newRelease = [
    {
      label: "Five Nights at fridays",
      image: new1,
    },
    {
      label: "Muzzle",
      image: new2,
    },
    {
      label: "sawz",
      image: new3,
    },
    {
      label: "Retribution",
      image: new4,
    },
  ];
  const popular = [
    {
      label: "Avengers code red",
      image: pop1,
    },
    {
      label: "Endgame",
      image: pop2,
    },
    {
      label: "Infinity war",
      image: pop3,
    },
    {
      label: "Kang",
      image: pop4,
    },
  ];
  return (
    <div className="main-section">
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="hero-content">
                <button className="heroLiveBtn">
                  Live
                  <AiOutlineWifi style={{ marginLeft: "10px" }} />
                </button>
                <div className="d-flex flex-column gap-5 ">
                  <div className="d-flex flex-column">
                    <h1>Netflix</h1>
                    <h3>The Pale Blue Eye</h3>
                  </div>
                  <button className="heroWatchBtn">Watch</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionTop">
        <Container className="Container">
          <Row>
            <div className="continueWatch">
              <h1 className="HeadingHome">Continue Watching</h1>

              <select className="selectForm">
                <option default value={10}>
                  Popular
                </option>
                <option value={10}>Trending</option>
                <option value={10}>Most Watched</option>
              </select>
            </div>
          </Row>
          <Row className="mt-5">
            {newRelease.map((ele, index) => {
              return (
                <Col lg={3} md={4} sm={12} xs={12} key={index} className="mb-4">
                  <Card className="homeCard">
                    <CardBody>
                      <img src={ele.image} alt="" />
                    </CardBody>
                    <CardFooter>
                      <h5>{ele.label}</h5>
                      <div className="homeFooterContent ">
                        <img src={profile} alt="" />
                        <h6>
                          ikakaot{" "}
                          <BsFillCheckCircleFill className="homeCheckIcons" />
                        </h6>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="sectionTop mb-5">
        <Container className="Container">
          <h1 className="HeadingHome">Popular</h1>
          <Row className="mt-5">
            {popular.map((ele, index) => {
              return (
                <Col lg={3} md={4} sm={12} xs={12} className="mb-4" key={index}>
                  <Card className="homeCard">
                    <CardBody>
                      <img src={ele.image} alt="" />
                    </CardBody>
                    <CardFooter>
                      <h5>{ele.label}</h5>
                      <div className="homeFooterContent ">
                        <img src={profile} alt="" />
                        <h6>
                          ikakaot{" "}
                          <BsFillCheckCircleFill className="homeCheckIcons" />
                        </h6>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Mainpage;
