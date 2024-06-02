import { FlatList } from "react-native";
import ShowCard from "../listItems/ShowCard";

const ShowsList = (props) => {
  const { movies, navigation } = props;
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ShowCard
          image={item.poster_path}
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.release_date}
          navigation={navigation}
          overview={item.overview}
        />
      )}
    />
  );
};
export default ShowsList;
