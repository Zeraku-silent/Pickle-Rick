import { Box, Card, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { characters } from "../../store/charactersReducer";

export const CharacterPage = () => {
  const { name } = useParams();

  const heroes = useSelector(characters);
  const character = heroes.find((hero) => hero.name === name);

  return (
    <Flex
      flexDirection={"column"}
      justify={"start"}
      mt={150}
      mx={"auto"}
      width={"100%"}
      h={"100vh"}
      pt={5}
      wrap={"wrap"}
      gap={2}
      alignItems={"center"}
    >
      <Card>
        <Box alignSelf={"center"}>
          <Image src={character.image} />
        </Box>
        <Box>
          <Text>{character.name}</Text>
        </Box>
        <Box>
          <Text>Раса: {character.species}</Text>
        </Box>
        <Box>
          <Text>Статус: {character.status}</Text>
        </Box>
        <Box>
          <Text>Пол: {character.gender}</Text>
        </Box>
        <Box>
          <Text>Происхождение: {character.origin.name}</Text>
          <Link>{character.origin.url}</Link>
        </Box>
        <Box>
          <Text>
            Текущее расположение:
            <Link pointerEvents={"none"} href={character.location.url}>
              {character.location.name}
            </Link>
          </Text>
        </Box>
        <Box>
          <Text>Был создан: {character.created}</Text>
        </Box>
      </Card>
    </Flex>
  );
};
