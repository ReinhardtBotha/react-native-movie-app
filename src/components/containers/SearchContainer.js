import { Center, Text } from "@gluestack-ui/themed";
import Form from "../forms/Form";
import { useState } from "react";
import { searchShows } from "../../services/api";
import ShowsList from "../lists/ShowsList";
import { StyleSheet, View } from "react-native";

const SearchContainer = (props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("multi");
  const [results, setResults] = useState([]);
  const [initiateSearch, setInitiateSearch] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

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
    if (!query == "") {
      setInitiateSearch(true);
      setIsInvalid(false);
    } else {
      setInitiateSearch(false);
      setIsInvalid(true);
    }
    // console.log("Query", query, "Type", type);
  };

  return (
    <View style={styles.container} p={30}>
      <View style={styles.formContainer}>
        <Form
          onInputChange={handleInputChange}
          onSubmit={handeOnSubmit}
          onTypeChange={handleTypeChange}
          styles={isInvalid ? styles.errorStyle : null}
        />
        {isInvalid ? (
          <Text size="sm" color="red">
            Movie / TV Show name is required
          </Text>
        ) : null}
      </View>

      {initiateSearch ? (
        <ShowsList movies={results} navigation={navigation} />
      ) : (
        <Center>
          <Text size="xl" bold py={120}>
            Please initiate a search
          </Text>
        </Center>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    padding: 30,
  },
  errorStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default SearchContainer;
