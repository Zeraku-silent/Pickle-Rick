import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const Episode = ({ url }) => {
  const [episode, setEpisode] = useState("");

  axios.get(url).then((data) => setEpisode(data.data.name));
  return <Button m={1}>{episode}</Button>;
};
