import 'styled-components';
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

// criando tipagem para o módulo styled components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}