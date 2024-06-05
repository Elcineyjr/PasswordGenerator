import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      black: string;
      white: string;
      background: string;

      tabs: {
        background: string;
        tab: string;
      };

      text: string;
    };
  }
}
