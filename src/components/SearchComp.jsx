import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import CardComp from "./CardComp";
import { MyNewContext } from "./contextApi/MyContext";
import { getDiscoverMovies, searchMovies } from "./Api";

const SearchComp = () => {
  const { setDiscoverData } = useContext(MyNewContext);
  const [searchQuery, setSearchQuery] = useState("");
  function getSearchData() {
    searchMovies(searchQuery)
      .then((response) => setDiscoverData(response.data.results))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getDiscoverMovies()
      .then((response) => setDiscoverData(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="search-section sectionTop">
        <Container>
          <Row className="mb-5">
            <Col lg={12}>
              <div className="search-content">
                <input
                  placeholder="search movie"
                  className="inputfield"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  variant="success"
                  onClick={getSearchData}
                  type="button"
                  className="searchBtn"
                >
                  search
                </Button>
              </div>
            </Col>
          </Row>

          <CardComp />
        </Container>
      </section>
    </>
  );
};

export default SearchComp;
