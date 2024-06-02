import { Box } from "@gluestack-ui/themed";
import { getShows, showTypes } from "../../services/api";
import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import ShowsList from "../lists/ShowsList";
import Filter from "../layout/Filter";

const ShowsContainer = (props) => {
  const { navigation, route } = props;
  const currentScreen = route?.params?.screen;
  const currentType = showTypes[currentScreen][0];

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState(currentType);
  const [screen, setScreen] = useState(currentScreen);

  const fetchShows = (type, screen) => {
    setIsLoading(true);
    getShows(type, screen).then(
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
    fetchShows(type, screen);
  }, [type, screen]);

  const handleTypeChange = (value) => {
    console.log("value", value);
    if (value !== undefined) {
      setType(value);
    }
  };

  return (
    <Box navigation={navigation}>
      <Filter screen={screen} handleTypeChange={handleTypeChange} />

      {isLoading ? (
        <Loading />
      ) : (
        <ShowsList navigation={navigation} movies={movies} />
      )}
    </Box>
  );
};

export default ShowsContainer;
