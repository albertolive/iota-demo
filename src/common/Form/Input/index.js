import React from 'react';

import { Field, ErrorMessage } from 'formik';

import { Container } from './styles';

function Input({ type, name, maxLength }) {
  return (
    <Container>
      <Field type={type} name={name} maxLength={maxLength} />
      <ErrorMessage name={name} component="span" />
    </Container>
  );
}

export default Input;
