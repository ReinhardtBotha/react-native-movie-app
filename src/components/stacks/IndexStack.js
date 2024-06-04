import SearchContainer from "../containers/SearchContainer";
import ShowsContainer from "../containers/ShowsContainer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const IndexStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2F4F4F",
        tabBarInactiveTintColor: "#A9A9A9",
        tabBarIndicatorStyle: {
          backgroundColor: "#2c3e50",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={ShowsContainer}
        initialParams={{ screen: "movie" }}
        tabBarLa
      />
      <Tab.Screen name="Search Results" component={SearchContainer} />
      <Tab.Screen
        name="TV Series"
        component={ShowsContainer}
        initialParams={{ screen: "tv" }}
      />
    </Tab.Navigator>
  );
};

export default IndexStack;
