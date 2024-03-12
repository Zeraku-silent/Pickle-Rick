import {
  GridItem,
  Grid,
  Box,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)

      .then((response) => {
        setCharacter(response.data);
        setEpisodes(response.data.episode);
      });
  }, [id]);

  console.log(episodes);
  console.log(character);

  return (
    <Box mr={"auto"} ml={"auto"} p={5} w={"60%"}>
      {character ? (
        <Grid
          borderRadius={40}
          templateAreas={`'avatar info  info info'
        'episode episode  episode episode'`}
          bgGradient={[
            "linear-gradient(290deg, gray.500, gray.500, #000)",
            "radial-gradient(ellipse farthest-corner, gray.500 40%, #000 90%)",
          ]}
          h="100vh"
          templateRows="35% auto"
          templateColumns="1fr 1fr 1fr 1fr"
          gap={5}
          m={0}
          mt={160}
          p={7}
        >
          <Image
            alignSelf={"center"}
            border={"solid 3px  "}
            borderRadius={30}
            w={"auto"}
            src={character.image}
          />
          <GridItem
            pt={5}
            borderRadius={30}
            area={"info"}
            bg={"gray.700"}
            shadow="6px -6px 15px black"
          >
            <Heading size={"xl"}>{character.name}</Heading>
            <Divider h={3} />
            <Text
              bg={"gray.600"}
              p={1}
              pl={5}
              borderRadius={25}
              mr={5}
              ml={5}
              mt={2}
              fontSize={"lg"}
              textAlign={"left"}
            >
              Gender: {character.gender}
            </Text>
            <Text
              bg={"gray.600"}
              p={1}
              pl={5}
              borderRadius={25}
              mr={5}
              ml={5}
              mt={2}
              fontSize={"lg"}
              textAlign={"left"}
            >
              Species: {character.species}
            </Text>
            <Text
              bg={"gray.600"}
              p={1}
              pl={5}
              borderRadius={25}
              mr={5}
              ml={5}
              mt={2}
              fontSize={"lg"}
              textAlign={"left"}
            >
              Status: {character.status}
            </Text>
            <Text
              bg={"gray.600"}
              p={1}
              pl={5}
              borderRadius={25}
              mr={5}
              ml={5}
              mt={2}
              fontSize={"lg"}
              textAlign={"left"}
            >
              Type: {character.type}
            </Text>
            <Text
              bg={"gray.600"}
              p={1}
              pl={5}
              borderRadius={25}
              mr={5}
              ml={5}
              mt={2}
              fontSize={"lg"}
              textAlign={"left"}
            >
              Origin: {character.origin.name}
            </Text>
          </GridItem>
          <GridItem
            p={5}
            borderRadius={30}
            area={"episode"}
            bg={"gray.700"}
            shadow="6px -6px 15px black"
          >
            {episodes
              ? episodes.map((ep) => {
                  return <Button m={5}>{ep}</Button>;
                })
              : "Loading..."}
          </GridItem>
        </Grid>
      ) : (
        <div>'Loading'</div>
      )}
    </Box>
  );
};
