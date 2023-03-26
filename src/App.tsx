import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

import { client } from "libs/apollo";

import { ModalProvider } from "contexts/ModalContext";
import { ClassInfoProvider } from "contexts/ClassContext";

import { RoutesProvider } from "routes";

import GlobalStyles from "styles/globalCss";

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ClassInfoProvider>
          <ModalProvider>
            <RoutesProvider />
            <Toaster 
              toastOptions={{ duration: 2500 }}
              position="top-center"
            />
            <GlobalStyles />
          </ModalProvider>
        </ClassInfoProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

