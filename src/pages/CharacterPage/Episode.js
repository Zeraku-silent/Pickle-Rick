import { Box, Button, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const Episode = ({ url }) => {
  const [episode, setEpisode] = useState("");

  axios
    .get(url)
    .then((data) => setEpisode(data.data.name))
    .catch((episode) => setEpisode(false));

  return (
    <Box m={1}>
      {episode ? (
        <Button>{episode}</Button>
      ) : (
        <Spinner
          thickness="6px"
          speed="1.2s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      )}
    </Box>
  );
};
