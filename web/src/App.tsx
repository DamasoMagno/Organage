import { RoutesProvider } from "./routes";
import { ThemeProvider } from "styled-components";

import Styles from "./styles/Global";
import { Themes } from "./styles/Themes";

export function App() {
  return (
    <ThemeProvider theme={Themes}>
      <RoutesProvider/>
      <Styles />
    </ThemeProvider>
  )
}

