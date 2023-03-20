import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

import { client } from "libs/apollo";

import { ModalProvider } from "contexts/useModal";
import { AuthProvider } from "contexts/userContext";

import { RoutesProvider } from "routes";

import GlobalStyles from "styles/globalCss";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <ModalProvider>
            <RoutesProvider />
            <Toaster />
            <GlobalStyles />
          </ModalProvider>
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

