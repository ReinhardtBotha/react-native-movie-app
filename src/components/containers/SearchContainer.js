import { Box, Text } from "@gluestack-ui/themed";
import Form from "../forms/Form";
import { useState } from "react";
import { searchShows } from "../../services/api";
import ShowsList from "../lists/ShowsList";

const SearchContainer = (props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("movie");
  const [results, setResults] = useState([]);

  const searchData = (query, type) => {
    setIsLoading(true);
    searchShows(query, type).then(
      (data) => {
        setResults(data.results);
        setIsLoading(false);
      },
      (error) => {
        alert("Error", error);
      }
    );
    setIsLoading(false);
  };

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handeOnSubmit = () => {
    searchData(query, type);
    console.log("Query", query, "Type", type);
  };

  return (
    <Box>
      <Form
        onInputChange={handleInputChange}
        onSubmit={handeOnSubmit}
        onTypeChange={handleTypeChange}
      />
      <Text>Search Results</Text>
      <ShowsList movies={results} navigation={navigation}/>
    </Box>
  );
};

export default SearchContainer;
