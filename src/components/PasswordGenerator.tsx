'use client';

import { generatePassword } from '@/password';
import { Button, Checkbox, Slider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import styled from 'styled-components';
import PasswordOutput from './PasswordOutput';

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>('');
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      length: 12,
      upper: false,
      numbers: false,
      symbols: false,
    },
  });

  return (
    <Container>
      <PasswordOutput password={password} />

      <Form
        onSubmit={form.onSubmit((values) =>
          setPassword(generatePassword(values))
        )}>
        <h3>Password length</h3>
        <Slider
          min={4}
          max={32}
          color="violet"
          size="lg"
          thumbSize={24}
          {...form.getInputProps('length', { type: 'input' })}
        />

        <Checkbox
          size="lg"
          variant="outline"
          color="violet"
          label="Include uppercase"
          key={form.key('upper')}
          {...form.getInputProps('upper', { type: 'checkbox' })}
        />
        <Checkbox
          size="lg"
          variant="outline"
          color="violet"
          label="Include numbers"
          key={form.key('numbers')}
          {...form.getInputProps('numbers', { type: 'checkbox' })}
        />
        <Checkbox
          size="lg"
          variant="outline"
          color="violet"
          label="Include symbols"
          key={form.key('symbols')}
          {...form.getInputProps('symbols', { type: 'checkbox' })}
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
  padding: 24px;
  padding-bottom: 0;
  gap: 18px;
`;
