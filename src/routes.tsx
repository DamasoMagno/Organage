import { Routes, Route } from "react-router-dom";

import { Calendar } from "pages/Calendar";
import { Queue } from "pages/Queue";
import { Schedules } from "pages/Schedules";
import { SignIn } from "pages/SignIn";

export function RoutesProvider() {
  return (
    <Routes>
      <Route element={<Calendar />} path="/" />
      <Route element={<Queue />} path="/queue" />
      <Route element={<Schedules />} path="/schedules" />
      <Route element={<SignIn />} path="/signIn" />
    </Routes>
  );
}