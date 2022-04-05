import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "./ImageCards";
import {Row, Col} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Row xs={1} md={3} xl={6}>
      <SingleCard />
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
