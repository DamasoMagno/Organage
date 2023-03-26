import { 
  Routes, 
  Route, 
  Navigate, 
  Outlet 
} from "react-router-dom";

import { Calendar } from "pages/Calendar";
import { Queue } from "pages/Queue";
import { Schedules } from "pages/Schedules";
import { SignIn } from "pages/SignIn";
import { AuthenticatedRoute } from "./AuthenticatedRoute";

export function RoutesProvider() {
  return (
    <Routes>
      <Route element={<AuthenticatedRoute />} >
        <Route element={<Calendar />} path="/calendar" />
      </Route>

      <Route element={<AuthenticatedRoute />} >
        <Route element={<Queue />} path="/queue" />
      </Route>

      <Route element={<AuthenticatedRoute />} >
        <Route element={<Schedules />} path="/schedules" />
      </Route>

      <Route element={<SignIn />} path="/" />
    </Routes>
  );
}