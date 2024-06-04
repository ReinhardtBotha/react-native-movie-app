import { FlatList } from "react-native";
import ShowCard from "../listItems/ShowCard";
import { VStack, View } from "@gluestack-ui/themed";
import PageSelector from "../ui/PageSelector";
import { SafeAreaView } from "react-native-safe-area-context";

const ShowsList = (props) => {
  const { movies, navigation, screen, page, maxPages, setPage } = props;
  return (
    <View >

        <FlatList
          style={{ height: "100%" }}
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
   

      <PageSelector page={page} maxPages={maxPages} setPage={setPage} />
    </View>
  );
};
export default ShowsList;
