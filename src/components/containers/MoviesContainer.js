import { Box } from "@gluestack-ui/themed";
import { Text } from "react-native";
import { getMovies } from "../../services/api";
import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import MoviesList from "../lists/MoviesList";

const MoviesContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setIsLoading(true);
    getMovies("now_playing").then(
      (movies) => {
        setMovies(movies.results);
        setIsLoading(false);
      },
      (error) => {
        alert("Error", error);
      }
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  getMovies("popular");
  const { navigation } = props;
  return (
    <Box navigation={navigation}>
      {isLoading ? <Loading /> : <MoviesList movies={movies} />}
    </Box>
  );
};

export default MoviesContainer;
