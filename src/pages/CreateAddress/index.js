import React, { useState } from 'react';

import sjcl from 'sjcl';
import { Formik, Form } from 'formik';

import iota from 'api';

import Input from 'common/Form/Input';
import Button from 'common/Form/Button';

import { Validation } from './validations';
import { Container, Content } from './styles';

function CreateAddress() {
  const [seed, setAddress] = useState('');

  const handleSetSeed = () => {
    let seed = '';

    for (
      ;
      seed.length < 81;
      seed += sjcl.codec.base64.fromBits(sjcl.random.randomWords(33, 10)).replace(/[^A-Z9]+/g, '')
    ) {}

    setAddress(seed.substring(0, 81));
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const address = await iota.getNewAddress(values.seed, { index: 0, total: 1 });

      console.log('Your address is: ' + address);
      console.log('Paste this address into https://faucet.devnet.iota.org');
      setSubmitting(false);
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  };

  const renderForm = () => (
    <Content>
      <Formik initialValues={{ seed }} enableReinitialize validationSchema={Validation} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Input type="seed" name="seed" maxLength={81} />
            <Button type="submit" text="Create address" isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Content>
  );

  return (
    <Container>
      <Button text="Create new seed" onClick={handleSetSeed} size="big" />
      <p>(This seed is generated in your browser and not sent anywhere.)</p>
      {seed && renderForm()}
    </Container>
  );
}

export default CreateAddress;
