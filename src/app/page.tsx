'use client';

import DarkTheme from '@/style/theme';
import styled, { ThemeProvider } from 'styled-components';

export default function Home() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;
