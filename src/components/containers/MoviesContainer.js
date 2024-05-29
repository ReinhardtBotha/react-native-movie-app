import { Box } from "@gluestack-ui/themed";
import { Text } from "react-native";

const MoviesContainer = (props) => {
  const { navigation } = props;
  return (
    <Box navigation={navigation}>
      <Text>Testings</Text>
    </Box>
  );
};

export default MoviesContainer;
