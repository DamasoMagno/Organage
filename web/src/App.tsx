import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { CalendarModal } from "@components/CalendarModal";

import { SignIn } from "./pages/SignIn";
import { Calendar } from "./pages/Calendar";
import { Queue } from "./pages/Queue";
import { Schedules } from "./pages/Schedules";

import Styles from "@styles/Global";
import { Themes } from "@styles/Themes";

export function App() {
  const [calendarModalIsOpen, setCalendarModalIsOpen] = useState(false);

  const [calendarData, setCalendarData] = useState({});

  return (
    <ThemeProvider theme={Themes}>
      <BrowserRouter>
        <Routes>
          <Route
            element={<SignIn />}
            path="/"
          />
          <Route
            element={
              <Calendar
                onSetCalendarData={() => {
                  setCalendarData({
                    name: "Reunião Pais e Mestres",
                    hour: "15:00",
                    description: "Testando"
                  });
                }}
              />
            }
            path="/calendar"
          />
          <Route
            element={<Queue />}
            path="/queue"
          />
          <Route
            element={<Schedules />}
            path="/schedules"
          />
        </Routes>

        <CalendarModal
          modalIsOpen={calendarModalIsOpen}
          onCloseModal={() => setCalendarModalIsOpen(false)}
          data={calendarData}
        />
        <Styles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

