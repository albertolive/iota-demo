import React from 'react';

import { Field, ErrorMessage } from 'formik';

import { Container } from './styles';

function Input({ type, name }) {
  return (
    <Container>
      <Field type={type} name={name} />
      <ErrorMessage name={name} component="div" />
    </Container>
  );
}

export default Input;
