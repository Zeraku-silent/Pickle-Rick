import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";

export const Character = ({ character }) => {
  const isAlive = character.status === "Alive";
  return (
    <Card
      maxW={364}
      marginTop={40}
      _hover={{
        background: isAlive
          ? [
              "linear-gradient(290deg, #44c123, #44c123, #000)",
              "radial-gradient(ellipse farthest-corner, #44c123 40%, #000 90%)",
            ]
          : [
              "linear-gradient(290deg, #f71414, #f71414, #000)",
              "radial-gradient(ellipse farthest-corner, #f71414 40%, #000 90%)",
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
      boxShadow={
        isAlive ? ["20px 5px 30px #44c123"] : ["20px 5px 30px #f71414"]
      }
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
  );
};
