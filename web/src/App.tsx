import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ModalProvider } from "contexts/useModal";

import { EventDetailtModal } from "components/DetailsDataModal";

import { SignIn } from "pages/SignIn";
import { Calendar } from "pages/Calendar";
import { Queue } from "pages/Queue";
import { Schedules } from "pages/Schedules";

import GlobalStyles from "styles/globalCss";
import { Themes } from "styles/themes";

export function App() {
  return (
    <ModalProvider>
      <ThemeProvider theme={Themes}>
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
      </ThemeProvider>
    </ModalProvider>
  )
}

