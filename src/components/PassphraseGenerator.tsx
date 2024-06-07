'use client';

import { generatePassphrase } from '@/password';
import { Button, Checkbox, Slider, TextInput } from '@mantine/core';
import { matches, useForm } from '@mantine/form';
import { useState } from 'react';
import styled from 'styled-components';
import PasswordOutput from './PasswordOutput';

export default function PassphraseGenerator() {
  const [passphrase, setPassphrase] = useState<string>('');
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      wordsCount: 3,
      separator: '-',
      upper: false,
      numbers: false,
    },
    validate: {
      separator: matches(
        /^[\ .,:;!?\-+=#~_*()\[\]{}<>\/|@$%&]$/,
        'Separator has to be one of these: .,:;! ?-+=#~_*(){}[]<>/|@$%&'
      ),
    },
  });

  return (
    <Container>
      <PasswordOutput password={passphrase} />

      <Form
        onSubmit={form.onSubmit((values) => {
          setPassphrase(generatePassphrase(values));
        })}>
        <h3>Number of words</h3>
        <Slider
          min={2}
          max={6}
          marks={[
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ]}
          color="violet"
          size="lg"
          thumbSize={24}
          {...form.getInputProps('wordsCount')}
        />

        <TextInput
          label="Separator"
          labelProps={{}}
          placeholder="-"
          key={form.key('separator')}
          {...form.getInputProps('separator')}
        />

        <Checkbox
          size="lg"
          variant="outline"
          color="violet"
          label="Include uppercase"
          key={form.key('upper')}
          {...form.getInputProps('upper')}
        />
        <Checkbox
          size="lg"
          variant="outline"
          color="violet"
          label="Include numbers"
          key={form.key('numbers')}
          {...form.getInputProps('numbers')}
        />

        <Button type="submit" color="violet" size="lg">
          Generate password
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 24px;
  padding-bottom: 0; */
  gap: 18px;
`;
