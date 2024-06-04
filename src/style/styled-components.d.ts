import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;

      background: string;

      tabs: {
        background: string;
        username: string;
        link: string;
        score: string;
        button: string;
        buttonText: string;
      };

      text: string;
    };
  }
}
