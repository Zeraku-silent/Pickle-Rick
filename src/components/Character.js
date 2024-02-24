import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";

export const Character = ({ character }) => {
  const isAlive = (character) => {
    let st;
    if (character.status === "Alive") {
      st = "#44c123";
      return st;
    } else if (character.status === "Dead") {
      st = "#f71414";
      return st;
    } else if (character.status === "unknown") {
      st = "gray";
      return st;
    }
  };

  return (
    <Card
      maxW={364}
      marginTop={40}
      _hover={{
        background: [
          `linear-gradient(290deg, ${isAlive(character)}, ${[
            isAlive(character),
          ]}, #000)`,
          `radial-gradient(ellipse farthest-corner, ${isAlive(
            character
          )} 40%, #000 90%)`,
        ],
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
      boxShadow={`5px 2px 30px ${isAlive(character)}`}
    >
      <CardBody>
        <Image src={character.image} borderRadius={25} />
        <Stack mt={3} spacing={3}>
          <Heading noOfLines={1} textShadow="5px 4px black" fontSize={"larger"}>
            {character.name}
          </Heading>
          <Text>Gender: {character.gender}</Text>
          <Text>Species: {character.species}</Text>
          <Text>Status: {character.status}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
