import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { CharacterCard } from "./CharacterCard";

import {
  characters,
  countAllCharacters,
  fetchToggle,
  loadCharacters,
  loading,
} from "../../store/charactersReducer";

import { Flex } from "@chakra-ui/react";
import axios from "axios";

export const CharactersList = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(characters);
  const totalCount = useSelector(countAllCharacters);
  const fetching = useSelector(loading);

  const [pageCurrent, setPageCurrent] = useState(1);

  const handleScroll = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (window.innerHeight + e.target.documentElement.scrollTop) <
          100 &&
        heroes.length < totalCount
      ) {
        dispatch(fetchToggle(true));
      }
    },
    [heroes.length, totalCount, dispatch]
  );

  useEffect(() => {
    if (fetching) {
      axios
        .get(`https://rickandmortyapi.com/api/character?page=${pageCurrent}`)
        .then((response) => {
          dispatch(loadCharacters(response.data));
          setPageCurrent((prev) => prev + 1);
        })

        .finally(() => dispatch(fetchToggle(false)));
    }
  }, [fetching, dispatch, pageCurrent]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Flex
      mx={"auto"}
      width={"70%"}
      pt={5}
      wrap={"wrap"}
      justify={"space-around"}
      gap={2}
      alignItems={"center"}
    >
      {heroes.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Flex>
  );
};
