import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services/firebase";

export const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(!user) return navigate("/signIn");
    });
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}