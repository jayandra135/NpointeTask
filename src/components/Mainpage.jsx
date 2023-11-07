import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

import new1 from "../assests/new1.jpg";
import new2 from "../assests/new2.jpg";
import new3 from "../assests/new3.jpg";
import new4 from "../assests/new4.jpg";
import pop1 from "../assests/pop1.jpg";
import pop2 from "../assests/pop2.jpg";
import pop3 from "../assests/pop3.jpg";
import pop4 from "../assests/pop4.jpg";
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
                <h1>Welcome</h1>
                <h3>Millions of movies and people to discover. Explore now.</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionTop">
        <Container className="Container">
          <h1>New Release</h1>
          <Row>
            {newRelease.map((ele, index) => {
              return (
                <Col lg={3} md={4} sm={6} xs={6} key={index} className="mb-4">
                  <div className="wrapper">
                    <div className="card">
                      <img src={ele.image} alt="" />
                      <div className="descriptions">
                        <h5>{ele.label}</h5>
                        {/*     <p>{ele.overview}</p> */}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="sectionTop mb-5">
        <Container className="Container">
          <h1>Popular</h1>
          <Row>
            {popular.map((ele, index) => {
              return (
                <Col lg={3} md={4} sm={6} xs={6} className="mb-4" key={index}>
                  <div className="wrapper">
                    <div className="card">
                      <img src={ele.image} alt="" />
                      <div className="descriptions">
                        <h5>{ele.label}</h5>
                        {/*     <p>{ele.overview}</p> */}
                      </div>
                    </div>
                  </div>
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
