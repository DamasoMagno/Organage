import {
  createContext,
  ReactNode,
  useContext,
  useReducer
} from "react";

interface IModalReducerState {
  id?: string;
  category: string;
}

interface IModalReducerActions {
  type: "OPEN_CALENDAR" | "CLOSE_MODAl";
  payload?: {
    id: string;
  };
}

interface ModalContextProps {
  dispatch: ({ type, payload }: IModalReducerActions) => void;
  state: IModalReducerState;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextProps);

export function modalReducer(
  state: IModalReducerState,
  action: IModalReducerActions
) {
  const { type, payload } = action;

  switch (type) {
    case "OPEN_CALENDAR":
      return { id: payload?.id, category: "Calendar" }
    case "CLOSE_MODAl":
      return { id: "", category: "" };
    default:
      return state;
  }
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [state, dispatch] = useReducer(modalReducer, { id: "", category: "" });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);