'use client';

import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
`;
