import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
//import Ldesign from '/public/images/cursor--white.png';

const GlobalStyles = createGlobalStyle`
  ${normalize};

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62%; //Üstteki Portfolio, ...,Github, Twitter, Instagram kısmının boyutu
    scroll-behavior: smooth;
  }


//******** the beginning of the custom scrollbar ************
  html {
    scrollbar-width: normal;
    //scrollbar-color:  rgb(202, 49, 49) #1f1f1f;
    &::-webkit-scrollbar {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 7px;
      height: 86px;
      background-color: inherit;
      opacity: 1;
      z-index: 1;
      border-radius: 8px;
      touch-action: pan-x;
      cursor: url("../images/cursor_arrow.png"), auto;
      //cursor: grab;
      //user-select: none;
      transform: translate3d(0px, 79.0642px, 0px);
    }
    &::-webkit-scrollbar-thumb {
      background-color:inherit; //scrollbar'ın ok olmadan rengi
      &:hover {
        background-color: #0A0107;//rgb(202, 49, 49); //scrollbar'ın üzerineok gelince olan rengi
      }
    }
    &::-webkit-scrollbar-track {
      background-color: inherit; //scrollbar'ın tüm rengi
      &:hover {
        background-color: inherit;
      }
    }
  }
 
}
//******** the end of the custom scrollbar ************


  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: url("../images/cursor_arrow.png"), auto;
    span, html, a:hover {
      cursor: url("../images/cursor_arrow.png"), auto; }
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
//62.5%;