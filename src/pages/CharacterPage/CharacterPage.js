import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

export const CharacterPage = () => {
  const character = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
  ];

  return (
    <Flex flexDirection={"column"} justify={"center"} mt={200}>
      <Text>Более подробно о персонаже</Text>
      <Box alignSelf={"center"}>
        <Image src={character[0].image} />
      </Box>
      <Box>
        <Text>{character[0].name}</Text>
      </Box>
      <Box>
        <Text>Раса: {character[0].species}</Text>
      </Box>
      <Box>
        <Text>Статус: {character[0].status}</Text>
      </Box>
      <Box>
        <Text>Пол: {character[0].gender}</Text>
      </Box>
      <Box>
        <Text>Происхождение: {character[0].origin.name}</Text>
        <Link>{character[0].origin.url}</Link>
      </Box>
      <Box>
        <Text>
          Текущее расположение:
          <Link pointerEvents={"none"} href={character[0].location.url}>
            {character[0].location.name}
          </Link>
        </Text>
      </Box>
      <Box>
        {/* <Text>Появлялся в епизодах: {character[0].episode}</Text> */}
      </Box>
      <Box>
        <Text>Был создан: {character[0].created}</Text>
      </Box>
    </Flex>
  );
};
