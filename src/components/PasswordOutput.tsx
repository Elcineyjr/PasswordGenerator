'use client';

import { ActionIcon, CopyButton } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import styled from 'styled-components';

interface PasswordOutputProps {
  password: string;
}

export default function PasswordOutput({ password }: PasswordOutputProps) {
  return (
    <Container>
      <h2>{password}</h2>

      <CopyButton value={password} timeout={1000}>
        {({ copied, copy }) => (
          <ActionIcon
            onClick={() => (password ? copy() : null)}
            variant="transparent"
            color="violet"
            size="xl"
            ml="auto"
            mr="-6">
            {copied ? <IconCheck size={32} /> : <IconCopy size={32} />}
          </ActionIcon>
        )}
      </CopyButton>
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

  h2 {
    margin-left: auto;
    margin-right: -6px;
  }
`;
