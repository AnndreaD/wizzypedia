import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { Elixirs } from "./pages/elixirs";

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Container w={1200}>
          <img src='./banner.png' alt='banner'></img>
          <Elixirs />
        </Container>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
