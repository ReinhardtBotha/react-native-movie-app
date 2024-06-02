import SearchContainer from "../containers/SearchContainer";
import ShowsContainer from "../containers/ShowsContainer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const IndexStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={ShowsContainer}
        initialParams={{ screen: "movie" }}
      />
      <Tab.Screen name="Search" component={SearchContainer} />
      <Tab.Screen
        name="TV Series"
        component={ShowsContainer}
        initialParams={{ screen: "tv" }}
      />
    </Tab.Navigator>
  );
};

export default IndexStack;
