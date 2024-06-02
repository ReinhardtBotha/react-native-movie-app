import { Card, Text } from "@gluestack-ui/themed";

const MovieCard = (props) => {
  const { image, title, popularity, releaseDate } = props;
  return <Card>
    <Text>{title}</Text>
    <Text>Popularity: {popularity}</Text>
    <Text>Release Date: {releaseDate}</Text>
  </Card>;
};

export default MovieCard;
