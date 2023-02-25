import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

import { client } from "libs/apollo";

import { ModalProvider } from "contexts/useModal";

import { EventDetailtModal } from "components/DetailsDataModal";
import { RoutesProvider } from "routes";

import GlobalStyles from "styles/globalCss";
import { AuthProvider } from "contexts/userContext";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <ModalProvider>
            <RoutesProvider />
            <EventDetailtModal />
            <Toaster />
            <GlobalStyles />
          </ModalProvider>
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

