import { Box, Center, Text, set } from "@gluestack-ui/themed";
import Form from "../forms/Form";
import { useEffect, useState } from "react";
import { searchShows } from "../../services/api";
import ShowsList from "../lists/ShowsList";

const SearchContainer = (props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("movie");
  const [results, setResults] = useState([]);
  const [initiateSearch, setInitiateSearch] = useState(false);

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
    if (!query === "") {
      setInitiateSearch(true);
    }
    // console.log("Query", query, "Type", type);
  };

  return (
    <Box p={30}>
      <Form
        onInputChange={handleInputChange}
        onSubmit={handeOnSubmit}
        onTypeChange={handleTypeChange}
      />
      {initiateSearch ? (
        <ShowsList movies={results} navigation={navigation} />
      ) : (
        <Center>
          <Text size="xl" bold py={120}>
            Please initiate a search
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default SearchContainer;
