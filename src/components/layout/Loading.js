import { Center, HStack, Spinner } from "@gluestack-ui/themed";
import { Text } from "react-native";

const Loading = () => {
  return (
    <Center>
      <HStack space="sm">
        <Spinner />
        <Text size="lg">Loading results</Text>
      </HStack>
    </Center>
  );
};
export default Loading;
