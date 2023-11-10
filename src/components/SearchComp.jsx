import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import CardComp from "./CardComp";
import { MyNewContext } from "./contextApi/MyContext";
import { getDiscoverMovies, searchMovies } from "./Api";

const SearchComp = () => {
  const { setDiscoverData } = useContext(MyNewContext);
  const [searchQuery] = useState("");
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
      <section className=" sectionTop" style={{ backgroundColor: "#222b31" }}>
        <Container>
          <CardComp />
        </Container>
      </section>
    </>
  );
};

export default SearchComp;
