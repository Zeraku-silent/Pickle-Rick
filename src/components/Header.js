import { Flex, Image, Img } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      bg="#121212"
      h={150}
      justifyContent={"center"}
      flexDirection={"column"}
      bgImage={
        "https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
      }
      backgroundSize={"15%"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
    >
      {/* <Img height={150} width={90} src="src/components/pickle.png"></Img> */}
    </Flex>
  );
};
