import { StatusBar } from "expo-status-bar"
import { StyleSheet, ImageBackground, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import CategoriesScreen from "./screens/CategoriesScreen"
import FavoritesScreen from "./screens/FavoritesScreen"

import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"

import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
        },
        headerStyle: { backgroundColor: "#070406" },
        sceneContainerStyle: { backgroundColor: "#070406" }, // this adds the background image on components nested in it.
        drawerContentStyle: { backgroundColor: "#070406" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#000000",
        drawerActiveBackgroundColor: "#8ae6f7",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

const displayNavImgBackGround = () => {
  return (
    <ImageBackground
      style={[StyleSheet.absoluteFill, { opacity: 0.3 }]}
      source={require("./assets/images/navbg.jpg")}
    />
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#070406" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="All Categories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            options={{
              headerBackground: () => displayNavImgBackGround(),
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              headerBackground: () => displayNavImgBackGround(),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
