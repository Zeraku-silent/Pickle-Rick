import {
  GridItem,
  Grid,
  Box,
  Image,
  Heading,
  Text,
  Divider,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)

      .then((response) => {
        setCharacter(response.data);
        setEpisodes(response.data.episode);
      });
  }, [id]);

  const getEpisodeName = useCallback(async (arr) => {
    const result = [];

    for (const item of arr) {
      result.push(
        await fetch(item)
          .then((data) => data.json())
          .then((data) => {
            const part = data.name;
            return part;
          })
      );
    }

    if (result) {
      setEpisodeList(result);
    }
  }, []);

  useEffect(() => {
    if (episodes) {
      getEpisodeName(episodes);
    }
  }, [episodes, getEpisodeName]);

  return (
    <Box w={"70%"} ml={"auto"} mr={"auto"}>
      {character ? (
        <Grid
          height={"auto"}
          borderRadius={40}
          templateAreas={`'avatar info  info info'
        'episode episode  episode episode'`}
          bgGradient={[
            "linear-gradient(290deg, gray.500, gray.500, #000)",
            "radial-gradient(ellipse farthest-corner, gray.500 40%, #000 90%)",
          ]}
          h="auto"
          templateRows="auto auto"
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
            w={"auto"}
          >
            <Heading size={"xl"}>{character.name}</Heading>
            <Divider h={2} />
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
            {episodeList ? (
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton bgColor={"gray.600"}>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading>Появляется в эпизодах:</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex wrap={"wrap"}>
                      {episodeList.map((ep) => {
                        return (
                          <Button key={nanoid()} m={3}>
                            {ep}
                          </Button>
                        );
                      })}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : (
              "Loading..."
            )}
          </GridItem>
        </Grid>
      ) : (
        <div>'Loading'</div>
      )}
    </Box>
  );
};
