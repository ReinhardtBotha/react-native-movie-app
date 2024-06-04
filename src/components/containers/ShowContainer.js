import { Box, Center, Heading, Image, Text } from "@gluestack-ui/themed";
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
    <Center p={40}>
      <Box>
        <Center>
          <Heading paddingBottom={40}>{data?.title ?? data?.name}</Heading>
        </Center>

        <Center>
          <Image
            size="2xl"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
            }}
            alt="poster"
          />
        </Center>

        <Text py={20}>{data?.overview}</Text>
        <Text size="sm">
          Popularity: {data?.popularity} | Release Date:
          {data?.release_date ?? data?.first_air_date}
        </Text>
      </Box>
    </Center>
  );
};

export default ShowContainer;
