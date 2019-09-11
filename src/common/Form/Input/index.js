import React from 'react';

import { Field, ErrorMessage } from 'formik';

import { Container, Label } from './styles';

export function Input({ type, name, maxLength, value, disabled }) {
  return (
    <Container disabled={disabled}>
      <input type={type} name={name} maxLength={maxLength} value={value} disabled={disabled} />
    </Container>
  );
}

function TextField({ type, name, maxLength, disabled, label }) {
  return (
    <Container disabled={disabled}>
      <Label>{label}</Label>
      <Field type={type} name={name} maxLength={maxLength} />
      <ErrorMessage name={name} component="span" />
    </Container>
  );
}

export default TextField;
