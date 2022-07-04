import "styled-components";

import { Themes } from "@styles/Themes";

type CustomThemes = typeof Themes;

declare module "styled-components" {
  export interface DefaultTheme extends CustomThemes {}
}
