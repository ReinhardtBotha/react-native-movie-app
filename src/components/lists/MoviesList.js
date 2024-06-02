import { FlatList } from "react-native";
import MovieCard from "../listItems/MovieCard";

const MoviesList = (props) => {
  const { movies, navigation } = props;
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          image={item.poster_path}
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.release_date}
          navigation={navigation}
        />
      )}
    />
  );
};
export default MoviesList;
