import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --background: #0D0D0E;
    --secondary-bg: #131314;
    --foreground: #FFFFFF;
    --accent-color: #D1FD0A;
    --secondary-color: #C704FE;
    --green-color: #00BE6E;
    --muted-color: #404044;
    --hover-button: #212122;
    --gray-color: #8D9095;
    --gray1-color: #8E8F92;
    --button-color: #94969C;
    --button-hover: #3C6DFF;
    --font-family: 'Montserrat', sans-serif; 

    --transition: all 0.250s ease-in-out;
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  }

    body{
      background-color: var(--background);
      color: var(--foreground);
      font-family: var(--font-family);
      max-width: 1053px;
      margin: 0 auto;
    }

    //scrollbar
    body,
    html {
      &::-webkit-scrollbar {
        width: 10px !important;
      }
      &::-webkit-scrollbar-track {
        background: #131314;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: #00ff940d !important;
        border-radius: 10px;
      }
    }
`;

export default GlobalStyle;
