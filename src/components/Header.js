import { Box, Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      bg="#121212"
      h={150}
      justifyContent={"space-between"}
      flexDirection={"row"}
      bgImage={
        "https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
      }
      backgroundSize={"15%"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
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
      <Box alignSelf={"center"}>
        <Image
          height={125}
          width={45}
          src="https://upload.wikimedia.org/wikipedia/ru/c/c3/Morty_Smith.png"
        ></Image>
      </Box>
    </Flex>
  );
};
