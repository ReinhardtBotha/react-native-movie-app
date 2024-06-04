import { FlatList, View, StyleSheet } from "react-native";
import ShowCard from "../listItems/ShowCard";

const ShowsList = (props) => {
  const { movies, navigation, screen, maxPages } = props;
  return (
    <View
      style={maxPages ? styles.containerWithPadding : styles.containerNoPadding}
    >
      <FlatList
        style={styles.list}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ShowCard
            image={item.poster_path}
            title={item.title ?? item.name}
            popularity={item.popularity}
            releaseDate={item.release_date}
            navigation={navigation}
            overview={item.overview}
            id={item.id}
            screen={screen}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerWithPadding: {
    flex: 1,
    paddingBottom: 50,
  },
  containerNoPadding: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

export default ShowsList;
