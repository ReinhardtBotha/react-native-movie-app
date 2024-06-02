import { Box, Heading, Image, Text } from "@gluestack-ui/themed";

const ShowContainer = (props) => {
  const { title, image, overview, popularity, releaseDate } =
    props.route.params;
  return (
    <Box>
      <Heading>{title}</Heading>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
        alt="poster"
      />
      <Text>{overview}</Text>
      <Text>
        Popularity: {popularity} | Release Date: {releaseDate}
      </Text>
    </Box>
  );
};

export default ShowContainer;
