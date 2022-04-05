import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "./ImageCards";
import {Row, Col} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Row xs={1} md={6} xl={10}>
        <Col xs={2} md={6} xl={10}>
          <SingleCard />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
