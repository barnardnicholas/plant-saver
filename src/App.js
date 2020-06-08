import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import DateTest from "./components/DateTest";
import DateAxis from "./components/DateAxis";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <header>
                <h1>Plant Saver</h1>
              </header>

              {/* <DateTest date={new Date()} /> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <DateAxis length={14} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
