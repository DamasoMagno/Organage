import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { Calendar } from "./pages/Calendar";

export function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path="/" />
        <Route element={<Calendar />} path="/calendar" />
      </Routes>
    </BrowserRouter>
  );
}