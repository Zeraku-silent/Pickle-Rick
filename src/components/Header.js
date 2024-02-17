import { Text, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      bg="indigo"
      h={100}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Text color={"#00C0A3"} fontSize={"2.5rem"}>
        Rick and Morty
      </Text>
    </Flex>
  );
};
