import { Button, HStack, Text } from "@gluestack-ui/themed";

const PageSelector = ({ page = 1, setPage, maxPages }) => {
  return (
    <HStack>
      <Button></Button>
      <Text>
        {page}/{maxPages}
      </Text>
      <Button></Button>
    </HStack>
  );
};

export default PageSelector;
