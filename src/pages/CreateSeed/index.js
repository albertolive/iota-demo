import React, { memo, useState } from 'react';

import sjcl from 'sjcl';
import { Formik } from 'formik';
import { Row, Col } from 'react-flexbox-grid';

import Button from 'common/Form/Button';
import TextField from 'common/Form/Input';

import { Validation } from './validations';
import { Container } from './styles';

function CreateSeed({ onCreateSeed }) {
  const [seed, setSeed] = useState('');

  const handleCreateSeed = () => {
    let seed = '';

    for (
      ;
      seed.length < 81;
      seed += sjcl.codec.base64.fromBits(sjcl.random.randomWords(33, 10)).replace(/[^A-Z9]+/g, '')
    ) {}

    setSeed(seed.substring(0, 81));
  };

  const handleSubmit = async ({ name, seed }, { setSubmitting, resetForm }) => {
    try {
      onCreateSeed({ name, seed });
      setSubmitting(false);
      resetForm();
      setSeed('');
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  };

  const renderForm = () => (
    <Formik initialValues={{ name: '', seed }} enableReinitialize validationSchema={Validation} onSubmit={handleSubmit}>
      {({ isSubmitting, handleSubmit }) => (
        <>
          <Row bottom="xs" middle="xs">
            <Col xs={12} md={4} lg={2}>
              <TextField type="name" name="name" label="Name" maxLength={20} />
            </Col>
            <Col xs={12} md={4} lg={8}>
              <TextField type="seed" name="seed" label="Seed" maxLength={81} />
            </Col>
            <Col xs={12} md={4} lg={2}>
              <Button type="submit" text="Save seed" isSubmitting={isSubmitting} onClick={handleSubmit} />
            </Col>
          </Row>
          <Row center="xs">
            <Col xs>
              <p>
                Seed is stored in your browser. If you want to use it in a different device, save it somewhere else.
              </p>
            </Col>
          </Row>
        </>
      )}
    </Formik>
  );

  return (
    <Container>
      <Row center="xs">
        <Button text="Generate new seed" onClick={handleCreateSeed} size="big" />
      </Row>
      <Row center="xs">
        <p>(This seed is generated in your browser and not sent anywhere.)</p>
      </Row>
      {seed && renderForm()}
    </Container>
  );
}

export default memo(CreateSeed);
