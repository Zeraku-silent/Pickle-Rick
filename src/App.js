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
        <Box
          bg={"#222"}
          backgroundImage={
            "https://zamanilka.ru/wp-content/uploads/2022/04/rik-i-morti-110422-3.jpg"
          }
          backgroundRepeat={"no-repeat"}
          backgroundAttachment={"fixed"}
          backgroundPosition={"center"}
          margin={0}
          p={0}
          className="App"
        >
          <Header />
          <Characters />
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
