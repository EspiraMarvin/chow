import { StatusBar } from "expo-status-bar"
import { StyleSheet, Platform, ImageBackground } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Easy Meal Prep with recipes",
              animation: "slide_from_left",
              headerTitleStyle: { color: "white" },
              headerBackground: () => (
                <ImageBackground
                  style={[StyleSheet.absoluteFill, { opacity: 0.3 }]}
                  source={require("./assets/images/navbg.jpg")}
                />
              ),
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            options={{
              title: "Recipe",
              animation: "slide_from_right",
              headerTintColor: "white",
              headerTitleStyle: { color: "white" },
              headerBackground: () => (
                <ImageBackground
                  style={[StyleSheet.absoluteFill, { opacity: 0.3 }]}
                  source={require("./assets/images/navbg.jpg")}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
