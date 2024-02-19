import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  loadCharacters,
  // perPage,
  setCurrentPage,
  // totalCount,
  totalPages,
} from "../store/charactersReducer";
import {
  Text,
  Image,
  Card,
  CardBody,
  Flex,
  Stack,
  Heading,
  Button,
  Container,
} from "@chakra-ui/react";

export const Characters = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.characters.characters);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const pages = [];
  // const onOnePage = useSelector(perPage);
  // const totalCharacters = useSelector(totalCount);
  const pagesTotal = useSelector(totalPages);

  for (let i = 1; i <= pagesTotal; i++) {
    pages.push(i);
  }
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`).then(
      (response) =>
        response
          .json()
          .then((characters) => dispatch(loadCharacters(characters)))
    );
  }, [currentPage]);

  return (
    <Flex pt={5} flexDirection={"column"} alignItems={"center"}>
      {heroes.map((character) => (
        <Card
          marginTop={40}
          _hover={{
            background: "linear-gradient(290deg, #44c123, #44c123, #000)",
            background:
              "radial-gradient(ellipse farthest-corner, #44c123 40%, #000 90%)",
            color: "white",
          }}
          variant={"elevated"}
          p={3}
          color={"white"}
          fontSize={"1.25rem"}
          borderRadius={25}
          bgGradient={[
            "linear-gradient(290deg, #474A51, #474A51, #000)",
            "radial-gradient(ellipse farthest-corner, #474A51 40%, #000 90%)",
          ]}
          width="auto"
          h="auto"
          key={character.id}
          boxShadow={"20px 5px 30px #44c123"}
        >
          <CardBody>
            <Image src={character.image} borderRadius={25} />
            <Stack mt={3} spacing={3}>
              <Heading textShadow="5px 4px black" fontSize={"larger"}>
                {character.name}
              </Heading>
              <Text>Gender: {character.gender}</Text>
              <Text>Species: {character.species}</Text>
              <Text>Status: {character.status}</Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
      <Container mt={20} mb={100}>
        {pages.map((page) => (
          <Button
            key={page}
            value={page}
            m={2}
            colorScheme="green"
            onClick={() => {
              dispatch(setCurrentPage(page));
            }}
          >
            {page}
          </Button>
        ))}
      </Container>
    </Flex>
  );
};
