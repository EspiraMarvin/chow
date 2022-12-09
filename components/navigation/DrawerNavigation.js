import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import CategoriesScreen from "../../screens/CategoriesScreen"
import MealsOverViewScreen from "../../screens/MealsOverViewScreen"
import MealDetailScreen from "../../screens/MealDetailScreen"
import { ImageBackground, StyleSheet } from "react-native"

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="All Categories">
        <Drawer.Screen
          name="All Categories"
          component={CategoriesScreen}
          options={{ drawerLabel: "All Categories" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
