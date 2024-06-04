import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ButtonIcon,
  Center,
} from "@gluestack-ui/themed";
import { Button, HStack, Text } from "@gluestack-ui/themed";
import { StyleSheet, View } from "react-native";

const PageSelector = ({ page = 1, setPage, maxPages }) => {
  const handlePageDecrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlePageIncrement = () => {
    if (page < maxPages) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Center>
        <HStack space="3xl">
          <Button
            size="sm"
            variant="solid"
            action="secondary"
            backgroundColor="#06b6d4"
            onPress={handlePageDecrement}
          >
            <ButtonIcon as={ArrowLeftIcon} size="lg" />
          </Button>
          <Text size="xl">
            {page}/{maxPages}
          </Text>
          <Button
            size="sm"
            variant="solid"
            action="secondary"
            backgroundColor="#06b6d4"
            onPress={handlePageIncrement}
          >
            <ButtonIcon as={ArrowRightIcon} size="lg" />
          </Button>
        </HStack>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default PageSelector;
