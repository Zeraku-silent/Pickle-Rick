import { Button, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, totalPages } from "../store/charactersReducer";

export const Pagination = () => {
  const dispatch = useDispatch();
  const pagesTotal = useSelector(totalPages);
  return (
    <Grid
      gridTemplateColumns={"repeat(11, 40px)"}
      gridTemplateRows={"auto"}
      gap={3}
      mt={20}
      mb={100}
    >
      {Array.from({ length: pagesTotal }, (x, i) => i + 1).map((page) => (
        <Button
          key={page}
          m={2}
          colorScheme="green"
          onClick={() => {
            dispatch(setCurrentPage(page));
          }}
        >
          {page}
        </Button>
      ))}
    </Grid>
  );
};
