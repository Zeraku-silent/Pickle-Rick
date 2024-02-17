import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Characters } from "./components/CharactersList";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box margin={0} p={0} className="App">
          <Header />
          <Characters></Characters>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
