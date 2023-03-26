import { signOut } from "firebase/auth"
import { Navigate, Outlet } from "react-router-dom"

import { auth } from "services/firebase"
import { useClassInfo } from "contexts/ClassContext"

export function AuthenticatedRoute() {
  const { user, classInfo } = useClassInfo()

  if (!user) {
    localStorage.removeItem("@shool")
    return <Navigate to="/" />
  }

  if (!classInfo) {
    signOut(auth)
    return <Navigate to="/" />
  }

  return <Outlet />
}