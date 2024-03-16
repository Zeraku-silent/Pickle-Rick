import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      position={"fixed"}
      top={0}
      zIndex={"2"}
      w={"100%"}
      bg="#121212"
      h={150}
      justifyContent={"space-between"}
      flexDirection={"row"}
      pl={5}
      pr={5}
      boxShadow={"0px 10px 40px #121212"}
    >
      <Box>
        <Image
          height={140}
          width={140}
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-flying-transparent-png-stickpng-15.png"
          alt="Пидор"
        ></Image>
      </Box>

      <Link to="/">
        <Image
          w="300px"
          h={"auto"}
          src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
        ></Image>
      </Link>
      <Box alignSelf={"center"} w={120}>
        <Image
          height={125}
          width={45}
          src="https://upload.wikimedia.org/wikipedia/ru/c/c3/Morty_Smith.png"
        ></Image>
      </Box>
    </Flex>
  );
};
