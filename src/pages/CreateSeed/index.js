import React, { useState } from 'react';

import sjcl from 'sjcl';
import { Formik } from 'formik';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from 'common/Form/Button';
import TextField, { Input } from 'common/Form/Input';

import { setItem, getItem } from 'utils/localStorage';

import { Validation } from './validations';
import { Container, SeedRow } from './styles';

function CreateSeed() {
  const [seed, setSeed] = useState('');

  const seeds = getItem('seeds') || [];

  const handleSetSeed = () => {
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
      const newSeeds = [...seeds, { name, seed }];

      setItem('seeds', newSeeds);
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
          <Row bottom="xs">
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

  const renderSeeds = () => {
    if (!seeds.length) return null;

    return (
      <>
        <h1>Seeds</h1>
        {seeds.map(({ name, seed }, i) => (
          <SeedRow key={i}>
            <Row middle="xs">
              <Col xs={12} md={2}>
                <div>{name}</div>
              </Col>
              <Col xs={12} md={10}>
                <Input name={name} value={seed} disabled />
              </Col>
            </Row>
          </SeedRow>
        ))}
      </>
    );
  };

  return (
    <Container>
      <Grid fluid>
        <Row center="xs">
          <Button text="Generate seed" onClick={handleSetSeed} size="big" />
        </Row>
        <Row center="xs">
          <p>(This seed is generated in your browser and not sent anywhere.)</p>
        </Row>
        {seed && renderForm()}
        {renderSeeds()}
      </Grid>
    </Container>
  );
}

export default CreateSeed;
