import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { client } from "libs/apollo";

import { ModalProvider } from "contexts/useModal";

import { EventDetailtModal } from "components/DetailsDataModal";

import { SignIn } from "pages/SignIn";
import { Calendar } from "pages/Calendar";
import { Queue } from "pages/Queue";
import { Schedules } from "pages/Schedules";

import GlobalStyles from "styles/globalCss";

export function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SignIn />} path="/" />
            <Route element={<Calendar />} path="/calendar" />
            <Route element={<Queue />} path="/queue" />
            <Route element={<Schedules />} path="/schedules" />
          </Routes>

          <EventDetailtModal />
          <GlobalStyles />
        </BrowserRouter>
      </ModalProvider>
    </ApolloProvider>
  )
}

