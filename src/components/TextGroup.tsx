import React from 'react';
import Form from 'react-bootstrap/Form';
import { TextGroupProps } from '../types';

const TextGroup = ({ className = '', text, result }:TextGroupProps) => (
  <Form.Group>
    <Form.Label>
      {text}
    </Form.Label>
    <Form.Control className={className} type="text" value={result} readOnly />
  </Form.Group>
);

export default TextGroup;
