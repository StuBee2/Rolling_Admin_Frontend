import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@src/presentation/styles/GlobalStyles";
import Nav from "../Nav";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

interface Props {
  children: ReactNode;
}

export default function Provider({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyles />
          <Container>
            <Wrapper>
              <Nav />
              <>{children}</>
            </Wrapper>
          </Container>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

const Wrapper = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
`;
