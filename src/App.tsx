import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import CarList from './components/CarList';

document.title = 'Fuel Consumption Calculator';

const App = () => (
  <Container className="p-3">
    <Alert show variant="secondary">
      <Alert.Heading className="text-center">Fuel Cost Estimator</Alert.Heading>
    </Alert>
    <CarList />
  </Container>
);

export default App;
