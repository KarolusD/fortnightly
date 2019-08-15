import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: 'Libre Franklin, sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: none;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.page {
  position: absolute;
  left:0;
  top:0;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.95);
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms ease-out 150ms, transform 300ms ease-out;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0;
  transition: opacity 150ms ease-out;
}

`;

export default GlobalStyle;
