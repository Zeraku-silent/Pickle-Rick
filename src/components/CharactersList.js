import { useDispatch, useSelector } from "react-redux";

import { loadCharacters } from "../store/charactersReducer";
import { Flex, ListItem } from "@chakra-ui/react";
export const Characters = () => {
  const dispatch = useDispatch();
  const rAMChars = useSelector((state) => state.characters.characters);

  fetch("https://rickandmortyapi.com/api/character").then((response) =>
    response.json().then((characters) => dispatch(loadCharacters(characters)))
  );

  return (
    <Flex>
      {rAMChars.map((character) => (
        <ListItem>{character.name}</ListItem>
      ))}
    </Flex>
  );
};
