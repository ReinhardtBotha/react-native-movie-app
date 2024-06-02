import {
  Box,
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { getMovies } from "../../services/api";
import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import ShowsList from "../lists/ShowsList";

const ShowsContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("now_playing");
  const { navigation } = props;

  const fetchMovies = (filter) => {
    setIsLoading(true);
    getMovies(filter).then(
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
    fetchMovies(filter);
  }, [filter]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <Box navigation={navigation}>
      <Select
        initialLabel="Popular"
        defaultValue="popular"
        onValueChange={handleFilterChange}
      >
        <SelectTrigger variant="outline" size="md">
          <SelectInput />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Now Playing" value="now_playing" />
            <SelectItem label="Popular" value="popular" />
            <SelectItem label="Top Rated" value="top_rated" />
            <SelectItem label="Upcoming" value="upcoming" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {isLoading ? (
        <Loading />
      ) : (
        <ShowsList navigation={navigation} movies={movies} />
      )}
    </Box>
  );
};

export default ShowsContainer;
