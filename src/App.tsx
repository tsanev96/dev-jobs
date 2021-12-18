import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/Header";
import { theme } from "./theme";
import { store } from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
