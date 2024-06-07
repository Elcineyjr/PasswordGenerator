'use client';

import PassphraseGenerator from '@/components/PassphraseGenerator';
import PasswordGenerator from '@/components/PasswordGenerator';
import DarkTheme from '@/style/theme';
import { Tabs } from '@mantine/core';
import styled, { ThemeProvider } from 'styled-components';

export default function Home() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <PageContainer>
        <PageTitle>Generate your password</PageTitle>

        <MainContainer>
          <Tabs color="violet" defaultValue="password">
            <Tabs.List h={60} grow>
              <Tabs.Tab className="tab" value="password" fz="lg">
                Password
              </Tabs.Tab>
              <Tabs.Tab className="tab" value="passphrase" fz="lg">
                Pass-phrase
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="password">
              <TabContent>
                <PasswordGenerator />
              </TabContent>
            </Tabs.Panel>

            <Tabs.Panel value="passphrase">
              <TabContent>
                <PassphraseGenerator />
              </TabContent>
            </Tabs.Panel>
          </Tabs>
        </MainContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const PageTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

const MainContainer = styled.div`
  max-width: 720px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.tabs.background};
  border-radius: 6px;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 1);

  .tab:hover {
    background-color: ${(props) => props.theme.colors.tabs.tab};
  }
`;

const TabContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;
