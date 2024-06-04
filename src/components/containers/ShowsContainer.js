import { Box } from "@gluestack-ui/themed";
import { getShows, showTypes } from "../../services/api";
import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import ShowsList from "../lists/ShowsList";
import SelectFilter from "../ui/SelectFilter";
import { StyleSheet } from "react-native";

const ShowsContainer = (props) => {
  const { navigation, route } = props;
  const currentScreen = route?.params?.screen;
  const currentType = showTypes[currentScreen][0];

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState(currentType);
  const [screen, setScreen] = useState(currentScreen);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();

  const fetchShows = (type, screen) => {
    setIsLoading(true);
    getShows(type, screen, page).then(
      (movies) => {
        setMovies(movies.results);
        setMaxPages(movies.total_pages ?? -1);
        setIsLoading(false);
      },
      (error) => {
        alert("Error", error);
      }
    );
  };

  useEffect(() => {
    fetchShows(type, screen);
  }, [type, screen, page]);

  const handleTypeChange = (value) => {
    if (value) {
      setType(value);
      setPage(1);
    }
  };

  return (
    <Box navigation={navigation}>
      <SelectFilter
        initialLabel={showTypes[screen][0]}
        defaultValue={showTypes[screen][0]}
        handleTypeChange={handleTypeChange}
        selectOptions={showTypes[screen]}
        style={styles.selectFilter}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <ShowsList
          navigation={navigation}
          screen={screen}
          movies={movies}
          page={page}
          maxPages={maxPages}
          setPage={setPage}
        />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  selectFilter: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 80,
    paddingRight: 80,
  },
});

export default ShowsContainer;
