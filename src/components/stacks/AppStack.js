import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IndexScreen from "../screens/IndexStreen";
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ShowsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Index"
      component={IndexScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const TopTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movies" component={ShowsStack} />
    <Tab.Screen name="Search" component={SearchStack} />
    <Tab.Screen name="TV Series" component={ShowsStack} />
  </Tab.Navigator>
);

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TopTabs}
        options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
