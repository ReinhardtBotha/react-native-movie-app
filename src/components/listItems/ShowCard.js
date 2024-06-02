import {
  Card,
  Heading,
  Text,
  Image,
  HStack,
  Box,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

const ShowCard = (props) => {
  const { image, title, popularity, releaseDate, navigation, overview } = props;
  return (
    <Card>
      <HStack>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          alt="poster"
        />
        <Box>
          <Heading>{title}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {releaseDate}</Text>
          <Button
            onPress={() =>
              navigation.navigate("Details", {
                title,
                image,
                overview,
                popularity,
                releaseDate,
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
