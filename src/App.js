import "./App.css";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { CharactersList } from "./pages/Main/CharactersList";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Box
      bg={"#1a1a1a"}
      backgroundImage={
        "https://zamanilka.ru/wp-content/uploads/2022/04/rik-i-morti-110422-3.jpg"
      }
      backgroundRepeat={"no-repeat"}
      backgroundAttachment={"fixed"}
      backgroundPosition={"right"}
      margin={0}
      p={0}
      pb={340}
      className="App"
    >
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </Box>
  );
};
