import {
  Card,
  Heading,
  Text,
  Image,
  HStack,
  Box,
  Button,
  ButtonText,
  Center,
} from "@gluestack-ui/themed";

const ShowCard = (props) => {
  const { image, title, popularity, releaseDate, navigation, id, screen } =
    props;

  return (
    <Card>
      <HStack space="md">
        <Center>
          <Image
            size="lg"
            source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
            alt="poster"
          />
        </Center>

        <Box>
          <Heading size="sm">{title}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {releaseDate}</Text>
          <Button
            size="sm"
            backgroundColor="#06b6d4"
            width={200}
            onPress={() =>
              navigation.navigate("Details", {
                id,
                screen,
                title,
              })
            }
          >
            <ButtonText>More Details</ButtonText>
          </Button>
        </Box>
      </HStack>
    </Card>
  );
};

export default ShowCard;
