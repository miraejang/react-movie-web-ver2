const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
body, div, ul {
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
li {
  list-style: none;
}

body {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #17181b;
  color: #fff;
  overflow: hidden;
}
#root {
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #fff;
}
`;

export default GlobalStyle;