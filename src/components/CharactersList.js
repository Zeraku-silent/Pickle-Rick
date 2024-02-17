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
            background: "gray.200",
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
