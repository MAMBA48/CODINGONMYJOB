import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Poppins';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 8px;
}
a {
  cursor: pointer;
  border: 1px solid transparent;
  padding: 6px;
  font-size: 1rem;
  margin: 10px;
  text-decoration: none;
  color: aliceblue;
  background: #000;
}
a:hover {
  transition: all 200ms;
  border: 1px solid transparent;
  box-shadow: 0px 0px 8px 0.1px gray;
}
button {
  width: 120px;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 6px;
  font-size: 1rem;
  margin: 10px;
  text-decoration: none;
  color: aliceblue;
  background: #000;
}
button:hover {
  transition: all 200ms;
  border: 1px solid transparent;
  box-shadow: 0px 0px 8px 0.1px gray;
}
header {
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 0%;
  height: auto;
  width: 100%;
  padding: 20px;
  background: #000;
}
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: rgba(14, 15, 17, 0.89);
  color: aliceblue;
}
.container {
  display: flex;
  flex-direction: column;
}
.content-app {
  padding: 20px;
}
`;
export default GlobalStyle;
