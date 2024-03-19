import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { CharacterCard } from "./CharacterCard";

import {
  characters,
  countAllCharacters,
  fetchToggle,
  loadCharacters,
  loading,
  pageCurrent,
  setCurrentPage,
  stat,
} from "../../store/charactersReducer";

import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { fetchCharacters } from "../../store/asyncActions";

export const CharactersList = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(characters);
  const totalCount = useSelector(countAllCharacters);
  const status = useSelector(stat);
  const currentPage = useSelector(pageCurrent);

  // const [pageCurrent, setPageCurrent] = useState(1);

  const handleScroll = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (window.innerHeight + e.target.documentElement.scrollTop) <
          100 &&
        heroes.length < totalCount
      ) {
        dispatch(fetchToggle("loading"));
      }
    },
    [heroes.length, totalCount, dispatch]
  );

  useEffect(() => {
    if (status === null) {
      const data = dispatch(fetchCharacters(currentPage));
      console.log(data);
      if (data) {
        dispatch(loadCharacters(data));
        dispatch(setCurrentPage());
        dispatch(fetchToggle(null));
      }
    }
  }, [status, dispatch, currentPage]);

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
