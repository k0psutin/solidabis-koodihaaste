import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CarProps } from '../types';
import {
  formatTravelTime,
  calcTotalConsumption,
  calcConsumptionDifference,
  calcTimeDifference,
} from '../utils';
import InputGroup from './InputGroup';
import TextGroup from './TextGroup';

const CarCard = ({ car }: CarProps) => {
  const [consumption, setConsumption] = useState<number>(0);
  const [speedA, setSpeedA] = useState<number>(0);
  const [speedB, setSpeedB] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  return (
    <>
      <Row>
        <Col md={{ span: 6 }}>
          <Card>
            <Card.Header>
              Car
              {' '}
              {String.fromCharCode(car + 65)}
            </Card.Header>
            <Card.Body>
              <InputGroup text="Fuel Consumption / 100km @ 1km/h" eventHandler={setConsumption} />
              <Row>
                <Col md={{ span: 4 }}>
                  <InputGroup text="Driving speed A (km/h)" eventHandler={setSpeedA} />
                </Col>
                <Col md={{ span: 4 }}>
                  <InputGroup text="Driving speed B (km/h)" eventHandler={setSpeedB} />
                </Col>
                <Col>
                  <InputGroup text="Distance (km)" eventHandler={setDistance} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 6 }}>
          <Card>
            <Card.Header>
              Statistics
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={{ span: 4 }}>
                  <TextGroup text="Total Fuel Consumption A (l)" result={calcTotalConsumption(distance, consumption, speedA)} />
                </Col>
                <Col md={{ span: 4 }}>
                  <TextGroup text="Total Fuel Consumption B (l)" result={calcTotalConsumption(distance, consumption, speedB)} />
                </Col>
                <Col md={{ span: 4 }}>
                  <TextGroup className="red" text="Fuel Consumption Difference (l)" result={calcConsumptionDifference(distance, consumption, speedA, speedB)} />
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 4 }}>
                  <TextGroup text="Travel Time A" result={formatTravelTime(distance, speedA)} />
                </Col>
                <Col md={{ span: 4 }}>
                  <TextGroup text="Travel Time B" result={formatTravelTime(distance, speedB)} />
                </Col>
                <Col md={{ span: 4 }}>
                  <TextGroup className="green" text="Travel Time Difference" result={calcTimeDifference(distance, speedA, speedB)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CarCard;
