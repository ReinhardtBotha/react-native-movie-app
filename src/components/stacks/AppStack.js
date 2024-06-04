import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexStreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const MyTheme = {
  colors: {
    background: "white",
  },
};

const AppStack = () => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator
      screenOptions={{
        title: "Movies App",
        headerStyle: {
          backgroundColor: "#2c3e50",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Stack.Screen name="Home" component={IndexScreen} />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={({ route }) => {
          console.log(route.params);
          return {
            title: route.params?.title || "Details",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              color: "#000",
            },
            headerBackTitle: "Back to List",
          };
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
