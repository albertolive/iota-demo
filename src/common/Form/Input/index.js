import React, { memo } from 'react';

import { Field, ErrorMessage } from 'formik';

import { Container, Label } from './styles';

function InputField({ type, name, maxLength, value, disabled }) {
  return (
    <Container disabled={disabled}>
      <input type={type} name={name} maxLength={maxLength} value={value} disabled={disabled} />
    </Container>
  );
}

export const Input = memo(InputField);

function TextField({ type, name, maxLength, disabled, label }) {
  return (
    <Container disabled={disabled}>
      <Label>{label}</Label>
      <Field type={type} name={name} maxLength={maxLength} />
      <ErrorMessage name={name} component="span" />
    </Container>
  );
}

export default memo(TextField);
