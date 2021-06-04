import React from 'react';
import Row from 'react-bootstrap/Row';
import CarCard from './CarCard';

const CarList = () => (
  <Row>
    <CarCard car={0} />
    <CarCard car={1} />
    <CarCard car={2} />
  </Row>
);

export default CarList;
