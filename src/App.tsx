import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { configureStore } from "./utils/configureStore";

import { HomePage } from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'CeraPro', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #FFFFFF;
  }
`;

const { store } = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HomePage />
    </Provider>
  );
};

export default App;
