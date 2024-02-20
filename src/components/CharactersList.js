import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Character } from "./Character";

import {
  characters,
  currentPage,
  loadCharacters,
} from "../store/charactersReducer";
import { Flex } from "@chakra-ui/react";
import { Pagination } from "./Pagination";

export const Characters = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(characters);
  const pageCurrent = useSelector(currentPage);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pageCurrent}`).then(
      (response) =>
        response
          .json()
          .then((characters) => dispatch(loadCharacters(characters)))
    );
  }, [pageCurrent, dispatch]);

  return (
    <Flex pt={5} flexDirection={"column"} alignItems={"center"}>
      {heroes.map((character) => (
        <Character key={character.id} character={character} />
      ))}
      <Pagination />
    </Flex>
  );
};
