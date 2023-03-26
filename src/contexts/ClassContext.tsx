import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { useLocation } from "react-router-dom"    
import { onAuthStateChanged, User } from "firebase/auth";

import { IClassInfo } from "interfaces";

import { auth } from "services/firebase";

interface ClassContextProps {
  classInfo: IClassInfo | null;
  setClassInfo: (classInfoData: IClassInfo) => void;
  user: User | null;
}

export const ClassInfoContext = createContext({} as ClassContextProps);

export function ClassInfoProvider({ children }: any) {
  const { pathname } = useLocation()
  const [user, setUser] = useState<User | null>(null)

  const [classInfo, setClassInfo] = useState<IClassInfo | null>(null)

  function setClassInfoOnStorage(classInfo: IClassInfo) {
    localStorage.setItem("@school", JSON.stringify(classInfo))
    setClassInfo(classInfo)
  }

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    let classData = JSON.parse(localStorage.getItem("@school") as string)
    setClassInfo(() => classData ? classData : null)

    console.log(classData)
  }, [pathname])

  return (
    <ClassInfoContext.Provider value={{
      user,
      classInfo,
      setClassInfo: setClassInfoOnStorage
    }}>
      {children}
    </ClassInfoContext.Provider>
  );
}

export const useClassInfo = () => useContext(ClassInfoContext)