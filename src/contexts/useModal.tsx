import { 
  createContext, 
  ReactNode, 
  useContext, 
  useState 
} from "react";

interface ModalProviderProps {
  children: ReactNode;
}

type Modal = {
  isOpen: boolean;
  id?: string;
  type?: "Calendar" | "Schedule";
}

interface ModalContextProps {
  modal: Modal;
  setModal: (modal: Modal) => void;
}

export const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<Modal>(
    { type: "Calendar", isOpen: false }
  );

  return (
    <ModalContext.Provider 
      value={{ 
        modal, 
        setModal 
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);