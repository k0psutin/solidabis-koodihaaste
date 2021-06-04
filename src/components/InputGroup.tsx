import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroupProps } from '../types';

const InputGroup = ({ text, eventHandler }: InputGroupProps) => (
  <Form.Group>
    <Form.Label>
      {text}
    </Form.Label>
    <Form.Control
      onChange={
        (event: React.ChangeEvent<HTMLInputElement>) => eventHandler(Number(event.target.value))
}
      type="number"
      min="0"
    />
  </Form.Group>
);

export default InputGroup;
