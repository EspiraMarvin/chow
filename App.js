import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meals Overview" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
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
