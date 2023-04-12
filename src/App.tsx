import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  input, button {
    padding: 5px;
    margin: 5px 0px;
  }

  `;
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;
