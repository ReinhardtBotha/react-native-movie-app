import { Box, Heading, Image, Text } from "@gluestack-ui/themed";
import { getShowDetails } from "../../services/api";
import { useState, useEffect } from "react";

const ShowContainer = (props) => {
  const { id, screen } = props.route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchShow = (id, screen) => {
    getShowDetails(id, screen).then(
      (data) => {
        setData(data);
        setIsLoading(false);
      },
      (error) => {
        alert("Error", error);
      }
    );
  };

  useEffect(() => {
    fetchShow(id, screen);
  }, []);

  return (
    <Box>
      <Heading>{data?.title ?? data?.name}</Heading>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}` }}
        alt="poster"
      />
      <Text>{data?.overview}</Text>
      <Text>
        Popularity: {data?.popularity} | Release Date: {data?.releaseDate}
      </Text>
    </Box>
  );
};

export default ShowContainer;
