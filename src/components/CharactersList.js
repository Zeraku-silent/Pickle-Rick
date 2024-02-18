import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { loadCharacters } from "../store/charactersReducer";
import {
  Text,
  Image,
  Card,
  CardBody,
  Flex,
  Stack,
  Heading,
} from "@chakra-ui/react";

export const Characters = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.characters.characters);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then((response) =>
      response.json().then((characters) => dispatch(loadCharacters(characters)))
    );
  }, []);

  return (
    <Flex pt={5} flexDirection={"column"} gap={20} alignItems={"center"}>
      {heroes.map((character) => (
        <Card
          _hover={{
            background: "linear-gradient(290deg, #44c123, #44c123, #000)",
            background:
              "radial-gradient(ellipse farthest-corner, #44c123 40%, #000 90%)",
            color: "white",
            fontSize: "1.5rem",
          }}
          variant={"elevated"}
          p={3}
          color={"black"}
          fontSize={"1.25rem"}
          borderRadius={25}
          bg={"white"}
          width="auto"
          h="auto"
          key={character.id}
          boxShadow={"20px 5px 30px #44c123"}
        >
          <CardBody>
            <Image src={character.image} borderRadius={25} />
            <Stack mt={3} spacing={3}>
              <Heading textShadow="1px 2px lightgreen" fontSize={"larger"}>
                {character.name}
              </Heading>
              <Text>Gender: {character.gender}</Text>
              <Text>Species: {character.species}</Text>
              <Text>Status: {character.status}</Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};
