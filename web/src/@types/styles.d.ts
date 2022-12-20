import "styled-components";

import { Themes } from "styles/themes";

type CustomThemes = typeof Themes;

declare module "styled-components" {
  export interface DefaultTheme extends CustomThemes {}
}
