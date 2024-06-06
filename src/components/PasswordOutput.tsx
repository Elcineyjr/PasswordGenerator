'use client';

import { ActionIcon } from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';
import styled from 'styled-components';

interface PasswordOutputProps {
  password: string;
}

export default function PasswordOutput({ password }: PasswordOutputProps) {
  return (
    <Container>
      <h2>{password}</h2>

      <ActionIcon variant="outline" color="violet" size="xl" ml="auto">
        <IconCopy size={32} />
      </ActionIcon>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 12px;
`;

const Text = styled.div``;
