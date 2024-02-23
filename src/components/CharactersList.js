import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Character } from "./Character";

import {
  characters,
  countAllCharacters,
  loadCharacters,
} from "../store/charactersReducer";
import { Flex } from "@chakra-ui/react";

export const Characters = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(characters);
  const totalCount = useSelector(countAllCharacters);

  const [fetching, setFetching] = useState(true);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    if (fetching) {
      fetch(
        `https://rickandmortyapi.com/api/character?page=${pageCurrent}`
      ).then((response) =>
        response
          .json()
          .then((characters) => {
            dispatch(loadCharacters(characters));
            setPageCurrent(pageCurrent + 1);
          })

          .finally(() => setFetching(false))
      );
    }
  }, [fetching, pageCurrent, dispatch]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (window.innerHeight + e.target.documentElement.scrollTop) <
        100 &&
      heroes.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <Flex pt={5} flexDirection={"column"} alignItems={"center"}>
      {heroes.map((character) => (
        <Character key={character.id} character={character} />
      ))}
      {/* <Pagination /> */}
    </Flex>
  );
};
