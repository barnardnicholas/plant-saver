import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  timeValues,
  monthValues,
  suffixValues,
  getLastNDates,
} from "../data/utils";

export default function DateAxis(props) {
  const { length } = props;
  const daysArray = getLastNDates(length);
  return (
    <Container fluid>
      <Row noGutters>
        <Col>
          <ul>
            {daysArray.map((day, idx) => {
              const thisDay = new Date(day);
              return (
                <li key={idx}>
                  <Container fluid>
                    <Row noGutters>
                      <Col>{`${thisDay.getDate()}${
                        suffixValues[thisDay.getDate()]
                      } ${monthValues[thisDay.getMonth()]}`}</Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Container>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
