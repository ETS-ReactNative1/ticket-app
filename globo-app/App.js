import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Home";
import { Platform } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Header from "./Header";
import Footer from "./Footer";
import { navigationRef } from "./RootNavigation";
import NewsDetail from "./NewsDetail";
import AboutGlobo from "./About";
import Quotepage from "./Quote";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        ref={navigationRef}
      >
        <Stack.Navigator
          initialRouteName="Globomantics"
          options={{
            headerMode: "screen",
          }}
        >
          <Stack.Screen
            name="Globomantics"
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="Globomantics" />,
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay="News" />,
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutGlobo}
            options={{
              header: () => <Header headerDisplay="About Globomantics" />,
            }}
          />
          <Stack.Screen
            name="Quote"
            component={Quotepage}
            options={{
              header: () => <Header headerDisplay="Get a quote" />,
            }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    );
  }
}
